import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import DrawerSidebar from "./Components/LeftSidebar/DrawerSidebar";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home/Home";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };
  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer} />

      <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
      />

      {/* <Home/> */}
      <AllRoutes />
    </Router>
  );
}

export default App;
