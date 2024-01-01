import React, {useState} from "react";
import "./Navbar.css";
import logo from "./logo.ico";
import SearchBar from "./SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
// import { useDispatch } from 'react-redux'
// import { login } from "../actions/auth";
function Navbar({toggleDrawer}) {
  const CurrentUser=null;
  // const CurrentUser = {
  //   result: {
  //     email: "xyz@mail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
  //   },
  // };
  
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "714159897474-e433gqpgtvsag2k60b7kvk0kqenv8hbs.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

//  const dispatch=useDispatch();
 const onSuccess = (response) => {
  const Email = response?.profileObj.email;
  console.log(Email);
};
  const onFailure = (response) => {
    console.log("Failed", response);
  };

  return (
    <div className="Container_Navbar">
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={()=>toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={"./"} className="logo_div_Navbar">
          <img src={logo} alt="" />
          <p className="logo_title_navbar">YouTube</p>
        </Link>
      </div>
      <SearchBar />
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />

      <div className="apps_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
      </div>
      <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
      <div className="Auth_cont_Navbar">
        {CurrentUser ? (
          <>
            <div className="Chanel_logo_App">
              <p className="fstChar_logo_App">
                {CurrentUser?.result.name ? (
                  <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          </>
        ) : (
          <>
            <GoogleLogin
              clientId={
                "714159897474-e433gqpgtvsag2k60b7kvk0kqenv8hbs.apps.googleusercontent.com"
              }
              onSuccess={onSuccess}
              onFailure={onFailure}

            />
            <p className="Auth_Btn">
              <BiUserCircle size={22} />
              <b>Sign in</b>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default Navbar;
