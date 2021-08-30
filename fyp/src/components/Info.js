import React, { Component } from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "./Info.css";

function Info() {
  const [dataList, setDataList] = useState([]);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/info").then((response) => {
      setDataList(response.data);
    });
    Axios.get("http://localhost:3001/api/templates").then((response) => {
      setTemplates(response.data);
    });
  }, []);

  //export class Info extends Component {
  // render() {

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log('templates');
  console.log(templates);
  return (
    templates.length ? 
    (<div id="table-div1" style={{marginLeft:"5%"}}>
      <br></br>
      {/* <br></br> */}
      <h3 className="info_heading">Timeline and Deliverables </h3>
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
          <th style={{color:"#fff" , backgroundColor:"#0b1442", padding: "10px"}}> Activity</th>
          <th style={{color:"#fff" , backgroundColor:"#0b1442"}}> Tentative Dates</th>
          <th style={{color:"#fff" , backgroundColor:"#0b1442"}}>Responsibility</th>
          <th style={{color:"#fff" , backgroundColor:"#0b1442"}}>Deliverables</th>
        </tr>

        <tbody>
          {dataList.map((val) => {
            return (
              <tr>
                <td>{val.Activity}</td>
                <td>
                  {val.Tentative_date.substring(8, 10) +
                    " " +
                    monthNames[Number(val.Tentative_date.substring(5, 7)) - 1] +
                    " " +
                    val.Tentative_date.substring(0, 4)}
                </td>
                <td>{val.Responsibility}</td>
                <td>{val.Deliverables}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      <br></br>

      <h3 className="info_heading"> Downloadable Forms/Templates</h3>
      <table style={{ border: "1px solid black" }} className="detail">
      

        <tr  >
          <td>FYP Proposal</td>
          <td style={{display:"flex", justifyContent:"center"}}>
          

            <a
              target="_blank"
              href={templates[0].url}
            >
              Download
            </a>
           

          </td>
        </tr>
        <tr>
          <td>FYP Progress Report</td>
          <td style={{display:"flex", justifyContent:"center"}}>
        
            <a
              target="_blank"
              href={templates[1].url}
            >
              Download
            </a>
           

          </td>
        </tr>
        <tr>
          <td>FYP Progress Tracker</td>
          <td style={{display:"flex", justifyContent:"center"}}>
                
               <a 
              target="_blank"
              href={templates[2].url}
            >
              Download
            </a>
           

          </td>
        </tr>
      </table>
    </div>) : null
  );
}

export default Info;
