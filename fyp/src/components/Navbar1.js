import { useHistory } from "react-router-dom";

import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { StdSidebarData } from "./StdSidebarData";
import { CodSidebarData } from "./CodSidebarData";
import { SupSidebarData } from "./SupSidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { reactLocalStorage } from "reactjs-localstorage";
import { Button } from "./Button";
import logo from './NEDUET.png'
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }
  const showSidebar = () => setSidebar(!sidebar);
  const isNav = reactLocalStorage.getObject("accessToken");
  console.log("isnva");
  console.log(isNav);
  let history = useHistory();
  let SidebarData = [];
  if (!isEmpty(isNav)) {
    if (isNav.result[0].type === "student") {
      SidebarData = StdSidebarData;
    } else if (isNav.result[0].type === "coordinator") {
      SidebarData = CodSidebarData;
    } else if (isNav.result[0].type === "supervisor") {
      SidebarData = SupSidebarData;
    }
  }
  return (
    <>
      {isEmpty(isNav) ? (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <div className="navbar">
              {/* <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link> */}
              <img src={logo} style={{width: '60px', height: '60px',marginLeft:"10px",marginRight:"10px"}}/>
              <h1>NEDUET</h1>
 
            </div>
          </IconContext.Provider>
        </>
      ) : (
        <> </>
      )}
    </>
  );
}

export default Navbar;
