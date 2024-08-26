import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import HeaderAdmin from "./layout/Header-Admin/HeaderAdmin";
import AdminHome from "./layout/Admin-Home/AdminHome";
import SideNavbarAdmin from "./layout/SideNavbarAdmin/SideNavbarAdmin";
import "@emotion/styled";
import useLocalStorage from "./hooks/useLocalStorage";
import EmployeeHome from "./layout/EmployeeHome/EmployeeHome";

function App() {
  const [count, setCount] = useState(0);
  const [userDetails, setUserDetails] = useLocalStorage("user", null);
  console.log("app rendering the user deatils", userDetails);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/*"
          element={
            userDetails.role === "user" ? <EmployeeHome /> : <AdminHome />
          }
        />
      </Routes>
    </>
  );
}

export default App;
