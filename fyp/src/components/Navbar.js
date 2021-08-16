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
      {!isEmpty(isNav) ? (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <div className="navbar">
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>

              <h1>NEDUET</h1>
              {isNav.result[0].type !== "student" ? (
                <button
                  onClick={() => history.push("/Signup")}
                  style={{
                    // padding: "14px 40px",
                    marginLeft: "70%",
                    // width: "100%",
                    backgroundColor: "rgb(43, 43, 148)",
                    border: "none",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "white",
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                >
                  Create Account
                </button>
              ) : null}
              {/* <Link to="/signup" ><Button >Sign In</Button> </Link> */}
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link
                        to={item.path === '/profile' ? `${item.path}/${isNav.result[0].id}` : item.path}
                        onClick={() => {
                          console.log("item.path");
                          console.log(item.path);
                          if (item.path === "/") {
                            reactLocalStorage.clear();
                          }
                        }}
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </>
      ) : (
        <> </>
      )}
      ;
    </>
  );
}

export default Navbar;
