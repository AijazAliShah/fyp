import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import Axios from 'axios';

import Table from 'react-bootstrap/Table';
import "./View_List.css";


function View_List(){
  
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


useEffect(()=> {
  Axios.get("http://localhost:3001/api/view_list").then((response)=> {
  setDataList(response.data);
  });

}, []);

const updateButton = (project_id) => {
  Axios.put("http://localhost:3001/update", { title: newTitle, project_id: project_id }).then(
    (response) => {
      setDataList(
        dataList.map((val) => {
          return val.Project_id == project_id
            ? {
                Project_id: val.Project_id,
                Title: newTitle,
                Description: val.Description,
                Student: val.Student,
                Email: val.Email,
                Internal: val.Internal,
                External: val.External,

              }
            : val;
        })
      );
    }
  );
};

const submit =(project_id) => {

  history.push("/editproject/{project_id}");
  
};

const deleteButton = (project_id) => {
  Axios.delete(`http://localhost:3001/delete/${project_id}`).then((response) => {  
    var result = window.confirm("Are you sure to delete the record?");
    if (result) {
      setDataList(
        dataList.filter((val) => {
          return val.Project_id != project_id;
        })
      );
    }
  });
};


        return (

        
            <div id="table-div">
                            <h3 className="main_heading2" style={{textTransform:"uppercase",fontSize:"30px",color:"#0b1442",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Project Details</h3>

                           <br></br>
              <input style= {{width:"50%",height:"35px", marginLeft:"20%", marginRight:"20%"}} type="text"  placeholder="Search Record..."onChange={(event) => {
                  setSearchTerm(event.target.value);
            }} 
            />
             <br></br>

             <br></br>
                <Table striped bordered hover size="sm">

                  
                <thead id="view_thead" >
                  <tr>
                    <th style={{textTransform:"uppercase",fontSize:"20px",color:"white",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>#</th>
                    <th style={{textTransform:"uppercase",fontSize:"20px",color:"white",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Project Title</th>
                    <th style={{textTransform:"uppercase",fontSize:"20px",color:"white",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Student</th>
                    <th style={{textTransform:"uppercase",fontSize:"20px",color:"white",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Internal</th>
                    <th style={{textTransform:"uppercase",fontSize:"20px",color:"white",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>External</th>
                    <th style={{textTransform:"uppercase",fontSize:"20px",color:"white",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Email Id</th>
                    <th style={{textTransform:"uppercase",fontSize:"20px",color:"white",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Action</th>
                    <th style={{textTransform:"uppercase",fontSize:"20px",color:"white",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Action</th>

                  </tr>
                </thead>
                <tbody>
    
            {dataList.filter((val)=> {
              if (searchTerm == ""){
                return val;
              }
              else if (val.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
              else if (val.Internal.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
              else if (val.External.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
              else if (val.Student.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
              else if (val.Email.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }

              
            }).map((val)=> {
          return ( 
        <tr>
          <td>{val.Project_id}</td>
          <td>{val.Title}</td>
          <td>{val.Student}</td>
          <td>{val.Internal}</td>
          <td>{val.External}</td>
          <td>{val.Email}</td>
          <td>
            <input type="text" placeholder="Change Project Title" onChange={(event) => {
              setNewTitle(event.target.value);
            }}/>
            <button class="btn btn-primary" onClick={() => {
            submit(val.Project_id);}}  >Edit</button></td>

          <td><button class="btn btn-primary" onClick={() => {
            deleteButton(val.Project_id);}}>Delete</button></td>
        </tr>);
        })}
        
      </tbody>
    </Table>

                    
                </div>
            )
        }
    

export default View_List;
