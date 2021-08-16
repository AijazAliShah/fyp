import React, { useState } from "react";
import { useEffect } from 'react';
import { FaCentercode } from "react-icons/fa";
import Axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

import "./Project.css";

function AddInput() {
  const [title, setTitle] = useState("");
  const [internal, setInternal] = useState("");
  const [external, setExternal] = useState("");
  const [student, setStudent] = useState("");
  const [email, setEmail] = useState("");
  const [dataList, setDataList] = useState([]);

  const [newTitle, setNewTitle] = useState("");

  let { id } = useParams();


  useEffect(() => {Axios.get(`http://localhost:3001/editproject/${id}`).then((response) => {
          setTitle(response.data.Title);
          setStudent(response.data.Student);
          setEmail(response.data.Email);
          setInternal(response.data.Internal);
          setExternal(response.data.External);
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
  
  
  


  return (
    <div className="container">
          
      <h3 style={{ color:"blue",textAlign:"center" }}>EDIT PROJECT RECORDS</h3>

            <form>
 
      <tr >
        <td colspan='2'>
      <input  type="text" name="Project Title" value = {title} onChange={(e) => {
                setTitle(e.target.value);}}
            /></td>
            </tr>
           
            <tr >
            <td colspan='2'>
            <input  type="text" name="Student" placeholder="Student name" onChange={(e) => {
                setStudent(e.target.value);}}
            /></td>
            </tr>
            <tr>
            <td colspan='2'>
            <input  type="email" name="Email" placeholder="Student email" onChange={(e) => {
                setEmail(e.target.value);}}
            /></td>
            </tr>
            <tr>
            <td><input type="text" name="Internal" placeholder="Internal" onChange={(e) => {
              setInternal(e.target.value);}}
            /></td>
            <td>
            <input type="text" name="External" placeholder="External" onChange={(e) => {
              setExternal(e.target.value);}}
            />
            </td>
            </tr>
            </form>

           
     
          
        
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
      <button /*onClick={() => {updateButton(val.Project_id);}}*/>Save Changes</button>
              

      
    </div>
  );
}

export default AddInput;
