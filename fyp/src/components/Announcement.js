import React, { useState } from "react";
import { useEffect } from "react";
import { FaCentercode } from "react-icons/fa";
import Axios from "axios";
import "./Project.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Info from './Info'
import { reactLocalStorage } from "reactjs-localstorage";

function AddAnnouncement() {
  const [activity, setActivity] = useState("");
  const [tentativeDate, setTentativeDate] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [deliverables, setDeliverables] = useState("");

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
    });

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
    <div style={{ marginLeft: "20%" }}>
      <Tabs style={{ color: "#000" }}>
        <TabList>
          {isNav.result[0].type !== "student" ? (
          <Tab>Add Announcement</Tab>
          ): null}
          <Tab style={{marginLeft:"20px"}}>View Announcement</Tab>
        </TabList>
        {isNav.result[0].type !== "student" ? (
        <TabPanel>
          <div className="container">
            <h3 style={{ color: "blue", textAlign: "center", fontSize:"1.5rem" }}>
              ADD AN ANNOUNCEMENT
            </h3>
            <form>
              <tr>
                <td>
                  <input
                  style={{border:"1px solid #000", width:"120%"}}
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
                  style={{border:"1px solid #000", width:"150%"}}
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
                  style={{border:"1px solid #000", width:"120%"}}
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
                  style={{border:"1px solid #000", width:"120%"}}
                    type="text"
                    name="Deliverables"
                    placeholder="Deliverables"
                    onChange={(e) => {
                      setDeliverables(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </form>
            <br></br>

            <button style={{ backgroundColor: "rgb(43, 43, 148)",  
             color: "white",
             border:"none",
             height:"2rem",
             width:"9rem",
             fontWeight:"bold",
             borderRadius:"5px",
             cursor:"pointer"}} onClick={add}>Add Announcement</button>
          </div>
        </TabPanel>
        ): null}
        <TabPanel style={{paddingRight:"30px" , marginRight:"50px"}}>
          <Info/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default AddAnnouncement;
