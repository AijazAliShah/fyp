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
  const [evalNo, setEval] = useState(1);

  let history = useHistory();

  useEffect(() => {}, []);

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
        Select Evaluation Number
      </h3>
      <select
        name="eval_no"
        id="eval_no"
        onChange={(e) => setEval(e.target.value)}
      >
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
      </select>
      {evalNo ? (
        <button>Start 1st evaluation</button>
      ) : (
        <input
          style={{
            width: "50%",
            height: "35px",
            marginLeft: "20%",
            marginRight: "20%",
          }}
        />
      )}
      <br></br>
    </div>
  );
}

export default View_List;
