import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Scholarship from "./components/home/utilities/scholarships";
import Header from "./components/header";
import Home from "./components/home";


import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import Internship from "./components/home/utilities/internships";
import List from "./components/home/utilities/internships/list";
import Specific from "./components/home/utilities/internships/specific";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path:"/Scholarships",
      element:<Scholarship/>
    },
    {
      path:"/Internships",
      element:<Internship/>
    },
    {
      path:"/List",
      element:<List/>
    },
    {
      path:"/Specific",
      element:<Specific/>
    }
  ];
  let routesElement = useRoutes(routesArray);
  return ( 
    <AuthProvider>
      <Header />
      <div  className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
