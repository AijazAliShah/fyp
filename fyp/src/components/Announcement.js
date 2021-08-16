import React, { useState } from "react";
import { useEffect } from 'react';
import { FaCentercode } from "react-icons/fa";
import Axios from 'axios';
import "./Project.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function AddAnnouncement() {

  const [activity, setActivity] = useState("");
  const [tentativeDate, setTentativeDate] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [deliverables, setDeliverables] = useState("");

  const [dataList, setDataList] = useState([]);

 

 //insert project details function
  const add =() => {
    Axios.post("http://localhost:3001/api/announcement", {
        activity: activity, 
        tentativeDate: tentativeDate,
        responsibility: responsibility,
        deliverables: deliverables });
        
            setDataList([
                ...dataList,
                 { activity: activity, tentativeDate: tentativeDate, responsibility: responsibility, deliverables: deliverables},]);
};


  return (
    <div style={{marginLeft:"30%"}}>
        <Tabs style={{color:"#000",}}>
    <TabList>
      <Tab>Add Announcement</Tab>
      <Tab>View Announcement</Tab>
    </TabList>

    <TabPanel>
    <div className="container">
     
   
     <h3 style={{ color:"blue",textAlign:"center" }}>ADD AN ANNOUNCEMENT</h3>
   <form>
     <tr >
       <td>
     <input  type="text" name="Activity" placeholder="Activity" onChange={(e) => {
               setActivity(e.target.value);}}
           /></td>
           </tr>
           <tr>
           <td>
           <input type="date" name="Tentative Date" placeholder="Tentative Date" onChange={(e) => {
             setTentativeDate(e.target.value);}}
           />
           </td>
           </tr>
           <tr>
           <td>
           <input type="text" name="Responsibility" placeholder="Responsibility" onChange={(e) => {
             setResponsibility(e.target.value);}}
           />
           </td>
           </tr>
           <tr>
           <td>
           <input type="text" name="Deliverables" placeholder="Deliverables" onChange={(e) => {
             setDeliverables(e.target.value);}}
           />
           </td>
           </tr>
              
           </form>
                   
     <button onClick={add} >Add Announcement</button>         
     
     
   </div>
    </TabPanel>
    <TabPanel>
    <div className="container" style={{width:"50%", height:"50%"}}>
     
   
     <h3 style={{ color:"blue",textAlign:"center" }}>View AN ANNOUNCEMENT</h3>
     <table style={{ border: "1px solid black" }} className="detail">
        <tr
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "16px",
            border: "1px solid black",
          }}
        >
          <td>Activity</td>
          <td>Date</td>
          <td>Responsibility</td>
          <td>Deliverables</td>
     
        </tr>

        <tr>
          <td>1</td>
          <td>Umair</td>
          <td>Developer</td>
          <td>2</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Ali</td>
          <td>Manager</td>
          <td>2</td>
        </tr>
        
      </table>      
     
     
   </div>
    </TabPanel>
  </Tabs>
    
    </div>
  );
}

export default AddAnnouncement;


