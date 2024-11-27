import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import List from "./components/home/utilities/internships/list";
import Specific from "./components/home/utilities/internships/specific";
import Checklist from "./components/home/utilities/data/checking/checklist";
import { db } from "./firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export let data = []
export const getData = async () => {
  const docs = await getDocs(collection(db,"users"));
  docs.forEach((doc) => {
    data.push(doc.data())
    console.log(data);
  });
};

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
      path:"/List",
      element:<List/>
    },
    {
      path:"/Specific",
      element:<Specific/>
    },
    {
      path:"/Checklist",
      element:<Checklist/>
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
