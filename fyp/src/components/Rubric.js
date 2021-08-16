import React from "react";
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Group_Ass from "./Group_Ass";
import Ind_Ass from "./Ind_Ass";
import "./Rubric.css";
function Rubric() {
  return (
    //Main Rubric wrapper//
    <div id="table-div1">
      <br></br>
      <h3 className="main_heading1">DEPARTMENT OF SOFTWARE ENGINEERING</h3>
      <p className="sub_heading">
        Mid-Year Final Year Project Grading Sheet - 2021
      </p>
      <br></br>
      <br></br>
      <br></br>
      <div
        style={{ marginLeft: "0px", marginRight: "30px", textAlign: "center" }}
      >
        {/* <div style={{float:""}}> */}
        <br></br>
        <span className="p_info">
          Project Id :
          <span className="p_info" style={{ textDecoration: "underline" }}>
            1701
          </span>
        </span>
        <span className="p_info">
          Project Title :{" "}
          <span className="p_info" style={{ textDecoration: "underline" }}>
            OBE BASED FYP PORTAL
          </span>
        </span>
        {/* <p className=""  style={{textDecoration:"underline"}}></p>        */}

        {/* </div> */}
        {/* <div style={{float:"",paddingLeft:""}}> */}
        <br></br>
        {/* <br></br> */}
        <span className="p_info">
          Batch :{" "}
          <span className="p_info" style={{ textDecoration: "underline" }}>
            2017
          </span>
        </span>

        <span className="p_info">
          Date :{" "}
          <span className="p_info" style={{ textDecoration: "underline" }}>
            25-4-21
          </span>
        </span>
        <span className="p_info">
          Group :
          <span className="p_info" style={{ textDecoration: "underline" }}>
            2
          </span>{" "}
        </span>

        {/* </div> */}
      </div>
      <br></br>

      <hr></hr>
      <br></br>
      {/* Student Details Table */}

      <h3 className="main_heading2">Student Details</h3>

      <table className="detail" style={{ fontFamily: "", textAlign: "center" }}>
        <thead
          id="rub_thead"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "16px",
          }}
        >
          <tr style={{ border: "1px solid black", fontWeight: " bold" }}>
            <td>Roll No</td>
            <td>Name</td>
            <td>Group Position</td>
          </tr>
        </thead>

        <tr>
          <td>SE-008</td>
          <td>Zoha Khattak</td>
          <td>Team Member</td>
        </tr>

        <tr>
          <td>SE-012</td>
          <td>Saira Gaad</td>
          <td>Team Member</td>
        </tr>

        <tr>
          <td>SE-027</td>
          <td>Quratul Ain</td>
          <td>Group Leader</td>
        </tr>
      </table>
      <br></br>
      <br></br>
      {/* Evaluator Details Table */}

      <h3 className="main_heading2">Evaluator Details</h3>

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
          <td>No</td>
          <td>Name</td>
          <td>Designation</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Umair</td>
          <td>Developer</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Ali</td>
          <td>Manager</td>
        </tr>
      </table>
      <hr></hr>

      <Form>
        {/* This Individual Assessment component should render 3 times bcoz 3 group members  */}
        <Ind_Ass />

        <Ind_Ass />

        <br></br>

        <Group_Ass />

        <br></br>
        <button type="submit" class="btn btn-primary" id="rubric_submit_btn">
          Submit
        </button>
        <br></br>
      </Form>
    </div>
  );
}

export default Rubric;
