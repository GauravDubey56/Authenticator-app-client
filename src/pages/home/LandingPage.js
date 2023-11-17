import Hero from "../../Components/Hero";
import Footer from "../../Components/Footer";
import { getLocalKey, getLoggedInUser } from "../../services/localstorage";
import Dashboard from "./Dashboard";
const LandingPage = () => {
    const token = getLocalKey('AuthToken');
    if(token) {
        const user = getLoggedInUser();
        return (
            <h1>Hi {user.name}</h1>
        );
    } else {
        return (<>      
            <Hero />
            <Footer />
            </>)
    }
  }

  export default LandingPage;