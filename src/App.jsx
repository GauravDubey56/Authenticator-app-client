// import Companies from "./Components/Companies";
// import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
// import Properties from "./Components/Properties";
// import Details from "./Components/Details";
// import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// eslint-disable-next-line
      // {/* <Companies />
      // <Guide />
      // <Properties />
      // <Details />
      // <GetStarted /> */}
const HomePage = () => {
  return (<>      
  <Hero />
  <Footer />
  </>)
}
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
