import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GithubCallback from "./pages/auth/GithubCallback";
import LandingPage from "./pages/home/LandingPage";
import { getLocalKey } from "./services/localstorage";
import Dashboard from "./pages/home/Dashboard";
function App() {
  const navigation=[
    {
      path: "/auth/githubCallback",
      element: <GithubCallback />
    }
  ]
  const token = getLocalKey('AuthToken');
  console.log(`fetching token`, token);
  if(token) {
    navigation.push({
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/home",
      element: <Dashboard />,
    })
  } else {
    navigation.push({
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <LandingPage />,
    })
  }
  const router = createBrowserRouter(navigation);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
