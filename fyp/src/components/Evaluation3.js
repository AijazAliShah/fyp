import React, { Component } from "react";
import { Link } from "react-router-dom";
import Criteria_table from "./Criteria_table";

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
            Evaluation 3
          </h1>
         
        
          <div>
            {/* Individual Assesment */}
            <br></br>

            <h3>Group Based Assessment </h3>
            <table style={{ border: "1px solid black" }} className="detail">
              <tr
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                <td>Criterion 13</td>
                <td>PLO</td>
                <td>Weighing Factor</td>
                <td style={{ width: "40%" }}>Guidelines</td>
              </tr>

              <tr>
                <td>How well have the tasks been distributed among members?</td>
                <td>PLO-11 Project Management</td>
                <td>1-10</td>
                <td rowSpan="5">
                  Are the project roles and responsibilities were evenly divided
                  among team members?
                </td>
              </tr>

              <tr
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                <td>Evaluator</td>
                <td>Factor Awarded</td>
                <td>Remarks</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <select
                    name="fact"
                    id="fact"
                    onChange={(e) => {
                      var temp = this.state.criteria13;
                      temp.marks1 = e.target.value;
                      this.setState({ criteria13: temp });
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                  <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria13;
                      temp.remarks1 = e.target.value;
                      this.setState({ criteria13: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  {" "}
                  <select name="fact" id="fact"   onChange={(e) => {
                      var temp = this.state.criteria13;
                      temp.marks2 = e.target.value;
                      this.setState({ criteria13: temp });
                    }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria13;
                      temp.remarks2 = e.target.value;
                      this.setState({ criteria13: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  {" "}
                  <select name="fact" id="fact"
                    onChange={(e) => {
                        var temp = this.state.criteria13;
                        temp.marks3 = e.target.value;
                        this.setState({ criteria13: temp });
                      }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria13;
                      temp.remarks3 = e.target.value;
                      this.setState({ criteria13: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div>
            {/* Individual Assesment */}
            <br></br>

            <br></br>
            <table style={{ border: "1px solid black" }} className="detail">
              <tr
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                <td>Criteria 14</td>
                <td>PLO</td>
                <td>Weighing Factor</td>
                <td style={{ width: "40%" }}>Guidelines</td>
              </tr>

              <tr>
                <td>How do you rate the project's progress?</td>
                <td>PLO-11 Project Management</td>
                <td>1-10</td>
                <td rowSpan="5">
                  Students provided accurate, complete report of project
                  progress
                </td>
              </tr>

              <tr
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                <td>Evaluator</td>
                <td>Factor Awarded</td>
                <td>Remarks</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                <select
                    name="fact"
                    id="fact"
                    onChange={(e) => {
                      var temp = this.state.criteria14;
                      temp.marks1 = e.target.value;
                      this.setState({ criteria14: temp });
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria14;
                      temp.remarks1 = e.target.value;
                      this.setState({ criteria14: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  {" "}
                  <select
                    name="fact"
                    id="fact"
                    onChange={(e) => {
                      var temp = this.state.criteria14;
                      temp.marks2 = e.target.value;
                      this.setState({ criteria14: temp });
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria14;
                      temp.remarks2 = e.target.value;
                      this.setState({ criteria14: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  {" "}
                  <select
                    name="fact"
                    id="fact"
                    onChange={(e) => {
                      var temp = this.state.criteria14;
                      temp.marks3 = e.target.value;
                      this.setState({ criteria14: temp });
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria14;
                      temp.remarks3 = e.target.value;
                      this.setState({ criteria14: temp });
                    }}
                  ></textarea>                </td>
              </tr>
            </table>
          </div>
          <div>
            {/* Individual Assesment */}
            <br></br>

            <br></br>
            <table style={{ border: "1px solid black" }} className="detail">
              <tr
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                <td>Criteria 15</td>
                <td>PLO</td>
                <td>Weighing Factor</td>
                <td style={{ width: "40%" }}>Guidelines</td>
              </tr>

              <tr>
                <td>How well was the Project scheduled?</td>
                <td>PLO-11 Project Management</td>
                <td>1-10</td>
                <td rowSpan="5">
                  Students developed a comprehensive schedule of project
                  activities/tasks with realistic due dates.
                </td>
              </tr>

              <tr
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                <td>Evaluator</td>
                <td>Factor Awarded</td>
                <td>Remarks</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <select name="fact" id="fact"
                   onChange={(e) => {
                    var temp = this.state.criteria15;
                    temp.marks1 = e.target.value;
                    this.setState({ criteria15: temp });
                  }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria15;
                      temp.remarks1 = e.target.value;
                      this.setState({ criteria15: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  {" "}
                  <select name="fact" id="fact"
                   onChange={(e) => {
                    var temp = this.state.criteria15;
                    temp.marks2 = e.target.value;
                    this.setState({ criteria15: temp });
                  }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria15;
                      temp.remarks2 = e.target.value;
                      this.setState({ criteria15: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  {" "}
                  <select name="fact" id="fact"
                   onChange={(e) => {
                    var temp = this.state.criteria15;
                    temp.marks3 = e.target.value;
                    this.setState({ criteria15: temp });
                  }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria15;
                      temp.remarks3 = e.target.value;
                      this.setState({ criteria15: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div>
            {/* Individual Assesment */}
            <br></br>

            <br></br>
            <table style={{ border: "1px solid black" }} className="detail">
              <tr
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                <td>Criteria 16</td>
                <td>PLO</td>
                <td>Weighing Factor</td>
                <td style={{ width: "40%" }}>Guidelines</td>
              </tr>

              <tr>
                <td>
                  How has the student planned to carry out rest of the Project?
                </td>
                <td>PLO-11 Project Management</td>
                <td>1-10</td>
                <td rowSpan="5">
                  Has the student provided a detailed description of future work
                  related to the project?
                </td>
              </tr>

              <tr
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                <td>Evaluator</td>
                <td>Factor Awarded</td>
                <td>Remarks</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <select name="fact" id="fact"
                     onChange={(e) => {
                        var temp = this.state.criteria16;
                        temp.marks1 = e.target.value;
                        this.setState({ criteria16: temp });
                      }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria16;
                      temp.remarks1 = e.target.value;
                      this.setState({ criteria16: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  {" "}
                  <select name="fact" id="fact"
                     onChange={(e) => {
                        var temp = this.state.criteria16;
                        temp.marks2 = e.target.value;
                        this.setState({ criteria16: temp });
                      }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria16;
                      temp.remarks2 = e.target.value;
                      this.setState({ criteria16: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  {" "}
                  <select name="fact" id="fact"
                     onChange={(e) => {
                        var temp = this.state.criteria16;
                        temp.marks3 = e.target.value;
                        this.setState({ criteria16: temp });
                      }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria16;
                      temp.remarks3 = e.target.value;
                      this.setState({ criteria16: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div>
            {/* Individual Assesment */}
            <br></br>

            <br></br>
            <table style={{ border: "1px solid black" }} className="detail">
              <tr
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                <td>Criteria 17</td>
                <td>PLO</td>
                <td>Weighing Factor</td>
                <td style={{ width: "40%" }}>Guidelines</td>
              </tr>

              <tr>
                <td>Demonstration of Project? </td>
                <td>PLO-11 Project Management</td>
                <td>1-10</td>
                <td rowSpan="5">
                  Either the demonstration of the project is poor, average,
                  good, very good or ?
                </td>
              </tr>

              <tr
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                <td>Evaluator</td>
                <td>Factor Awarded</td>
                <td>Remarks</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <select name="fact" id="fact"
                   onChange={(e) => {
                    var temp = this.state.criteria17;
                    temp.marks1 = e.target.value;
                    this.setState({ criteria17: temp });
                  }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria17;
                      temp.remarks1 = e.target.value;
                      this.setState({ criteria17: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  {" "}
                  <select name="fact" id="fact"
                   onChange={(e) => {
                    var temp = this.state.criteria17;
                    temp.marks2 = e.target.value;
                    this.setState({ criteria17: temp });
                  }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria17;
                      temp.remarks2 = e.target.value;
                      this.setState({ criteria17: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  {" "}
                  <select name="fact" id="fact"
                   onChange={(e) => {
                    var temp = this.state.criteria17;
                    temp.marks3 = e.target.value;
                    this.setState({ criteria17: temp });
                  }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>
                <textarea
                    onChange={(e) => {
                      var temp = this.state.criteria17;
                      temp.remarks3 = e.target.value;
                      this.setState({ criteria17: temp });
                    }}
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          {/* <h3 className="main_heading2" style={{textTransform:"uppercase",fontSize:"30px",color:"#0b1442",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>GROUP ASSESSMENT</h3>
               <Criteria_table c_no="13" PLO="11"/>
               <Criteria_table c_no="14" PLO="11"/>
               <Criteria_table c_no="15" PLO="11"/> 
               <Criteria_table c_no="16" PLO="11"/> 
               <Criteria_table c_no="17" PLO="5"/>  */}

          {/* <h3 style={{color:"black"}}>Criteria1</h3> */}

          <br></br>
          <Link to={"/rubric2"}>
          <button type="submit" class="btn btn-primary" id="marks_submit_btn">
            
            Save and Next{" "}
          </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Mid;
