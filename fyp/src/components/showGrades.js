import React, { Component } from "react";
import { Link } from "react-router-dom";
import Criteria_table from "./Criteria_table";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Evaluation1 from './Evaluation1'
import Evaluation2 from './Evaluation2'
import Evaluation3 from './Evaluation3'
import Evaluation4 from './Evaluation4'


export class Mid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTitle: "",
      projectId: "",
      batch: "",
      groupId: "",
      eval_no: "",
      date: "",
      des1: "",
      des2: "",
      des3: "",
      evl1: "",
      evl2: "",
      evl3: "",

      rollNo1: "",
      rollNo2: "",
      rollNo3: "",
      stdName1: "",
      stdName2: "",
      stdName3: "",
      stdG1: "",
      stdG2: "",
      stdG3: "",
      criteria13: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria14: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria15: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria16: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria17: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
    };
  }

  render() {
    console.log("data", this.state);

    return (
      <div id="c_table">
        <form>
          <h1
            style={{
              color: "black",
              color: "#0b1442",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "50PX",
            }}
          >
          DETAILS
          </h1>
         
          <div id="eval_table">
            <h3
              className="main_heading2"
              style={{
                textTransform: "uppercase",
                fontSize: "30px",
                color: "#0b1442",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Evaluator Details
            </h3>
            <br></br>
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
                <th>NO</th>
                <th>Project No</th>
                <th>Project Name</th>
                <th>Batch</th>
                <th>Group Id</th>
                <th>Text</th>
              </tr>

              <tr>
                <td>1</td>
                <td>
                 223
                </td>
                <td>
                 ggbbb
                </td>
                <td>bvvbhg</td>
                <td>bvvbhg</td>
                <td>bvvbhg</td>
              </tr>

            
            </table>
           

           
            {/* //student details/ */}
       
           
           



           
           
  
          </div>
          <div>
            {/* Individual Assesment */}
            <br></br>

            
          </div>
         
          <br></br>
          <Link to={"/rubric2"}>
          <button type="submit" class="btn btn-primary" id="marks_submit_btn" >
            
            Save and Next{" "}
          </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Mid;
