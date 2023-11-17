import { jwtDecode } from "jwt-decode";

export const getLocalKey = (keyname) => {
    return localStorage.getItem(keyname);
}
export const setLocalKey = (keyname, value) => {
    return localStorage.setItem(keyname, value);
}
export const decodeJwtToken = (stringToken) => {
    try {
        return jwtDecode(stringToken);
    } catch (error) {
        return {};
    }
}
export const getLoggedInUser = () => {
    return decodeJwtToken(getLocalKey('AuthToken'));
}