import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Axios from "axios";

import Table from "react-bootstrap/Table";
import "./View_List.css";
import axios from "axios";

function View_List() {
  /*const [project_id, setProject_id] = useState("");
const [title, setTitle] = useState("");
const [student, setStudent] = useState("");
const [internal, setInternal] = useState("");
const [external, setExternal] = useState("");
const [email, setEmail] = useState("");
const [description, setDescription] = useState("");*/
  const [searchTerm, setSearchTerm] = useState("");

  const [newTitle, setNewTitle] = useState("");

  const [dataList, setDataList] = useState([]);

  let history = useHistory();

  const getData = () => {
    Axios.get("http://localhost:3001/api/grade").then((response) => {
      console.log(response.data.result)
      setDataList(response.data.result);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  
  return (
    <div id="table-div">
      <h3
        className="main_heading2"
        style={{
          textTransform: "uppercase",
          fontSize: "30px",
          color: "#0b1442",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        Result List
      </h3>

      <br></br>
      <input
        style={{
          width: "50%",
          height: "35px",
          marginLeft: "20%",
          marginRight: "20%",
        }}
        type="text"
        placeholder="Search Record..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <br></br>

      <br></br>
      <Table striped bordered hover size="sm">
        <thead id="view_thead">
          <tr>
            <th
              style={{
                textTransform: "uppercase",
                fontSize: "20px",
                color: "white",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Project Title
            </th>
            
            <th
              style={{
                textTransform: "uppercase",
                fontSize: "20px",
                color: "white",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Project ID
            </th>
            <th
              style={{
                textTransform: "uppercase",
                fontSize: "20px",
                color: "white",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Group ID
            </th>

            <th
              style={{
                textTransform: "uppercase",
                fontSize: "20px",
                color: "white",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Batch
            </th>
         
            <th
              style={{
                textTransform: "uppercase",
                fontSize: "20px",
                color: "white",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dataList
            .filter((val) => {
              console.log('val')
              if (searchTerm == "") {
                return val;
              } else if (
                val.projectTitle.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.project_id.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.group_id.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if(
                val.batch.toLowerCase().includes(searchTerm.toLocaleLowerCase())
              ){
                return val;
              }
            })
            .map((val) => {
              return (
                <tr style={{border: '2px solid black', textAlign: 'center'}}>
                  <td style={{border: '2px solid black', textAlign: 'center'}}>{val.projectTitle}</td>
                  <td style={{border: '2px solid black', textAlign: 'center'}}>{val.project_id}</td>
                  <td style={{border: '2px solid black', textAlign: 'center'}}>{val.group_id}</td>
                  <td style={{border: '2px solid black', textAlign: 'center'}}>{val.batch}</td>

                  <td style={{border: '2px solid black', textAlign: 'center'}}>
                    <button
                    style={{border: '2px solid black',}}
                      // className="btn btn-primary"
                      onClick={() => {
                        window.location.href ='/detail/'+val.id
                      }}
                    >
                      View Detail
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default View_List;
