import React, { useState } from "react";
import { useEffect } from "react";
import { FaCentercode } from "react-icons/fa";
import Axios from "axios";
import "./Project.css";
import { ToastContainer, toast } from "react-toastify";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Info from './Info'
import background from "./img.png";

import { reactLocalStorage } from "reactjs-localstorage";

function AddAnnouncement() {
  const [activity, setActivity] = useState("");
  const [tentativeDate, setTentativeDate] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [deliverables, setDeliverables] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const [dataList, setDataList] = useState([]);
  const isNav = reactLocalStorage.getObject("accessToken");
  console.log("isnva");
  console.log(isNav);
  //insert project details function
  const add = () => {
    Axios.post("http://localhost:3001/api/announcement", {
      activity: activity,
      tentativeDate: tentativeDate,
      responsibility: responsibility,
      deliverables: deliverables,

    })
      .then(resp => {
        console.log(resp.data)
        toast("Announcement added Successfully", {
          position: "top-center",
          type: "success",
        });
      }).catch(err => console.log(err));

    setDataList([
      ...dataList,
      {
        activity: activity,
        tentativeDate: tentativeDate,
        responsibility: responsibility,
        deliverables: deliverables,
      },
    ]);
  };

  return (
    <div style={{ marginLeft: "0%" }}>

      <ToastContainer />

      <Tabs style={{ color: "#000" }} onSelect={index => setTabIndex(index)}>
        <TabList>
          {isNav.result[0].type !== "student" && isNav.result[0].type !== "supervisor" ? (
            <Tab style={tabIndex === 0 ? { backgroundColor: '#0b1442', color: '#fff' } : null}>Add Announcement</Tab>
          ) : null}
          <Tab style={tabIndex === 1 ? { backgroundColor: '#0b1442', color: '#fff' } : null} >View Announcement</Tab>
        </TabList>
        {isNav.result[0].type !== "student" && isNav.result[0].type !== "supervisor" ? (
          <TabPanel>
      <img src={background} alt="background" style={{width:"100%", height:"83vh"}}/>

            <div className="container" style={{opacity:"0.8", backgroundColor:"#fff"}}>

              <h3 style={{ color: "blue", textAlign: "center", fontSize: "1.5rem" }}>
                ADD AN ANNOUNCEMENT
              </h3>
            
                <tr>
                  <td>
                    <input 
                      style={{border:"none",
                      borderBottom:"1px solid #2b2b94",
                      outline:"none"
           }}
                      type="text"
                      name="Activity"
                      placeholder="Activity"
                      onChange={(e) => {
                        setActivity(e.target.value);
                      }}
                    />
                  </td>
                </tr>
                <br></br>
                <tr>
                  <td>
                    <input
                      style={{ border:"none",
                      borderBottom:"1px solid #2b2b94",
                      outline:"none",
                      width:"120%"
           }}
                      type="date"
                      name="Tentative Date"
                      placeholder="Tentative Date"
                      onChange={(e) => {
                        setTentativeDate(e.target.value);
                      }}
                    />
                  </td>
                </tr>
                <br></br>
                <tr>
                  <td>
                    <input
                      style={{ border:"none",
                      borderBottom:"1px solid #2b2b94",
                      outline:"none"
           }}
                      type="text"
                      name="Responsibility"
                      placeholder="Responsibility"
                      onChange={(e) => {
                        setResponsibility(e.target.value);
                      }}
                    />
                  </td>
                </tr>
                <br></br>
                <tr>
                  <td>
                    <input
                      style={{ border:"none",
                      borderBottom:"1px solid #2b2b94",
                      outline:"none"
           }}
                      type="text"
                      name="Deliverables"
                      placeholder="Deliverables"
                      onChange={(e) => {
                        setDeliverables(e.target.value);
                      }}
                    />
                  </td>
                </tr>
             
              <br></br>

              <button style={{
                backgroundColor: "rgb(43, 43, 148)",
                color: "white",
                border: "none",
                height: "2rem",
                width: "9rem",
                fontWeight: "bold",
                borderRadius: "5px",
                cursor: "pointer"
              }} onClick={add}>Add Announcement</button>
            </div>
          </TabPanel>
        ) : null}
        <TabPanel style={{ paddingRight: "30px", marginRight: "50px" }}>
          <Info />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default AddAnnouncement;
