import axios from "axios"
import { DASHBOARD_API, SERVER_BASE_URL } from "../config/config";
import { jwtDecode } from "jwt-decode";
export const apiRequest = async ({
    method,
    route,
    body, 
    query,
    sendAuthHeader,
    decryptResponse,
    headers
}, baseUrl = SERVER_BASE_URL) => {
    try {
        const apiConfig ={
            url: `${baseUrl}${route}`,
            method
        }
        if(body) {
            apiConfig.data = body;
        }
        if(query) {
            apiConfig.query = query;
        }
        apiConfig.headers = {
            ...(headers && {headers})
        }
        if(sendAuthHeader) {
            apiConfig.headers.Authorization = localStorage.getItem('AuthToken')
        }
        const response = await axios.request(apiConfig);
        if(decryptResponse) {
            response.data = jwtDecode(response.data);
        }
        return {
            statusCode: response.status,
            data: response?.data.data,
            message: response?.data?.message,
            error: false
        }
    } catch (error) {
        if(decryptResponse && error?.response?.data) {
            error?.response?.data = jwtDecode(error?.response?.data);
        }
        return {
            statusCode: error?.response?.status,
            data: error?.response?.data,
            message: error?.response?.data?.message,
            error: true
        }
    }
}