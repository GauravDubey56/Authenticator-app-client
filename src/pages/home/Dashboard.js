import { getLoggedInUser } from "../../services/localstorage"

const Dashboard = () => {
    const user = getLoggedInUser();
    return (
        <h1>Hi {user.name}</h1>
    )
}

export default  Dashboard