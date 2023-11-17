import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { decodeJwtToken, getLocalKey, setLocalKey } from '../../services/localstorage';
const GithubCallback = (props) => {
    let location = useLocation();
    const [authToken, setAuthToken] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const params = Object.fromEntries(new URLSearchParams(location.search));
        if(params.successToken) {
            setAuthToken(params.successToken);
            setUser(decodeJwtToken(params.successToken));
            setLocalKey('AuthToken', params.successToken);
            setTimeout(() => {
                navigate("/");
                window.location.reload();
            }, 2000);
        } else {
            setError(params.error || "Something went wrong");
        }
    }, [location])
    return (<div>
        {!error && !authToken && <h1>{"Please wait"}</h1>}
        {error ? <h1>{error}</h1> : ""}
        {user?.name && <h2>{`Hi ${user.name}`}</h2>}
        {authToken ? <h4>{"Redirecting to app"}</h4> : ""}
    </div>)
}
export default GithubCallback;