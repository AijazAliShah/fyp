import React, { Component } from "react";
import Criteria_table from "./Criteria_table";
import { Link } from "react-router-dom";

export class Mid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollNo: "",
      name: "",
      groupPosition: "",
      //   des1: "",
      //   des2: "",
      //   des3: "",
      //   evl1: "",
      //   evl2: "",
      //   evl3: "",
      criteria1: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria2: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria3: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria4: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria5: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria6: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria7: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria8: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria9: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria10: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria11: {
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      criteria12: {
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
            OBE BASED FYP
          </h1>
          <table>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="rollNo"
                  placeholder="Roll No"
                  className="mid_inp"
                  required
                  onChange={(e) => this.setState({ rollNo: e.target.value })}
                ></input>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="mid_inp"
                  required
                  autofocus
                  onChange={(e) => this.setState({ name: e.target.value })}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  name="groupPosition"
                  placeholder="Group Position"
                  className="mid_inp"
                  required
                  onChange={(e) =>
                    this.setState({ groupPosition: e.target.value })
                  }
                ></input>
              </td>
            </tr>
          </table>
          {/* <div id="eval_table">
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
                <th>No</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>

              <tr>
                <td>1</td>
                <td>
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name="evl1"
                    type="text"
                    placeholder="Name"
                    required
                    onChange={(e) => this.setState({ evl1: e.target.value })}
                  ></input>
                </td>
                <td>
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name="des1"
                    type="text"
                    placeholder="Designation"
                    required
                    onChange={(e) => this.setState({ des1: e.target.value })}
                  ></input>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name="evl2"
                    type="text"
                    placeholder="Name"
                    required
                    onChange={(e) => this.setState({ evl2: e.target.value })}
                  ></input>
                </td>
                <td>
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name="des2"
                    type="text"
                    placeholder="Designation"
                    required
                    onChange={(e) => this.setState({ des2: e.target.value })}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name="evl3"
                    type="text"
                    placeholder="Name"
                    required
                    onChange={(e) => this.setState({ evl3: e.target.value })}
                  ></input>
                </td>
                <td>
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name="des3"
                    type="text"
                    placeholder="Designation"
                    required
                    onChange={(e) => this.setState({ des3: e.target.value })}
                  ></input>
                </td>
              </tr>
            </table>
            <br></br>
            <br></br> 
          </div> */}
          <h3>Individual Assessment </h3>

          {false ? (
            <>
              <div>
                {/* Individual Assesment */}
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
                    <td>Criterion 1</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      How clearly has the student identified issues & explained
                      project?
                    </td>
                    <td>PLO-4 Investigation</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      How clearly student identifies and summarizes main issues
                      and successfully explains why/how they are problems or
                      questions; and identifies embedded or implicit issues,
                      addressing their relationships to each other?
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
                          var temp = this.state.criteria1;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria1: temp });
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
                          var temp = this.state.criteria1;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria1: temp });
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
                          var temp = this.state.criteria1;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria1: temp });
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
                          var temp = this.state.criteria1;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria1: temp });
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
                          var temp = this.state.criteria1;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria1: temp });
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
                          var temp = this.state.criteria1;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria1: temp });
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
                    <td>Criteria 2</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      How clearly has the student explained the Methodology?
                    </td>
                    <td>PLO-4 Investigation</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      How successfully the student explains how /why / which
                      methods are most relevant to the problem and also
                      describes embedded methods and possible alternative
                      methods of working on the problem?
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
                          var temp = this.state.criteria2;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria2: temp });
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
                          var temp = this.state.criteria2;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria2: temp });
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
                          var temp = this.state.criteria2;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria2: temp });
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
                          var temp = this.state.criteria2;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria2: temp });
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
                          var temp = this.state.criteria2;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria2: temp });
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
                          var temp = this.state.criteria2;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria2: temp });
                        }}
                      ></textarea>{" "}
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
                    <td>Criteria 3</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>Confidence with relevant tool interface</td>
                    <td>PLO5 Modern Tool Usage</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The student is proficient with the relevant tools
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
                          var temp = this.state.criteria3;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria3: temp });
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
                          var temp = this.state.criteria3;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria3: temp });
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
                          var temp = this.state.criteria3;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria3: temp });
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
                          var temp = this.state.criteria3;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria3: temp });
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
                          var temp = this.state.criteria3;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria3: temp });
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
                          var temp = this.state.criteria3;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria3: temp });
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
                    <td>Criteria 4</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      How well have the students responded to the questions?
                    </td>
                    <td>PLO-10 Communication</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      How well the student assesses information in a meaningful
                      way and clearly answers the questions with accuracy,
                      detail and understanding?
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
                          var temp = this.state.criteria4;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria4: temp });
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
                          var temp = this.state.criteria4;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria4: temp });
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
                          var temp = this.state.criteria4;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria4: temp });
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
                          var temp = this.state.criteria4;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria4: temp });
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
                          var temp = this.state.criteria4;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria4: temp });
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
                          var temp = this.state.criteria4;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria4: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
              </div>
              <div>
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
                    <td>Criteria 5</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      How do you grade the student’s performance as an
                      individual?
                    </td>
                    <td>PLO-9 Individual and Team Work</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The student worked on the assigned task, and accomplished
                      goals beyond expectations.
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
                          var temp = this.state.criteria5;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria5: temp });
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
                          var temp = this.state.criteria5;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria5: temp });
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
                          var temp = this.state.criteria5;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria5: temp });
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
                          var temp = this.state.criteria5;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria5: temp });
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
                          var temp = this.state.criteria5;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria5: temp });
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
                          var temp = this.state.criteria5;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria5: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 6</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      How do you grade the student’s performance as a team
                      member?{" "}
                    </td>
                    <td>PLO-9 Individual and Team Work</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The student worked on the assigned task, and accomplished
                      goals beyond expectations.
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
                          var temp = this.state.criteria6;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria6: temp });
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
                          var temp = this.state.criteria6;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria6: temp });
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
                          var temp = this.state.criteria6;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria6: temp });
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
                          var temp = this.state.criteria6;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria6: temp });
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
                          var temp = this.state.criteria6;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria6: temp });
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
                          var temp = this.state.criteria6;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria6: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 7</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      How do you grade the psychological contribution of the
                      student to the team?{" "}
                    </td>
                    <td>PLO-9 Individual and Team Work</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The student boosted morale of the team and brought
                      consensus when required.
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
                          var temp = this.state.criteria7;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria7: temp });
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
                          var temp = this.state.criteria7;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria7: temp });
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
                          var temp = this.state.criteria7;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria7: temp });
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
                          var temp = this.state.criteria7;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria7: temp });
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
                          var temp = this.state.criteria7;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria7: temp });
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
                          var temp = this.state.criteria7;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria7: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 8</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      How do you grade the student’s communicational abilities
                      as a team member?
                    </td>
                    <td>PLO-10 Communication</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The student adequately communicated information to other
                      team members.
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
                          var temp = this.state.criteria8;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria8: temp });
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
                          var temp = this.state.criteria8;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria8: temp });
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
                          var temp = this.state.criteria8;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria8: temp });
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
                          var temp = this.state.criteria8;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria8: temp });
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
                          var temp = this.state.criteria8;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria8: temp });
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
                          var temp = this.state.criteria8;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria8: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 9</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>How do you grade the student’s outlook? </td>
                    <td>PLO-8 Ethics</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The student is disciplined, adheres to a respectable dress
                      code and exhibits a groomed personality.
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
                          var temp = this.state.criteria9;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria9: temp });
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
                          var temp = this.state.criteria9;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria9: temp });
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
                          var temp = this.state.criteria9;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria9: temp });
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
                          var temp = this.state.criteria9;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria9: temp });
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
                          var temp = this.state.criteria9;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria9: temp });
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
                          var temp = this.state.criteria9;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria9: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 10</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      Does the student have an idea of professional ethics
                      relevant to the project?
                    </td>
                    <td>PLO-8 Ethics</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The student demonstrates professional ethics
                      satisfactorily.
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
                          var temp = this.state.criteria10;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria10: temp });
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
                          var temp = this.state.criteria10;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria10: temp });
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
                          var temp = this.state.criteria10;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria10: temp });
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
                          var temp = this.state.criteria10;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria10: temp });
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
                          var temp = this.state.criteria10;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria10: temp });
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
                          var temp = this.state.criteria10;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria10: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 11</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      Does the student have an idea of legal responsibilities
                      relevant to the project?{" "}
                    </td>
                    <td>PLO-8 Ethics</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The student understands legal responsibilities
                      satisfactorily.
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
                          var temp = this.state.criteria1;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria11: temp });
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
                          var temp = this.state.criteria11;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria11: temp });
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
                          var temp = this.state.criteria11;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria11: temp });
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
                          var temp = this.state.criteria11;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria11: temp });
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
                          var temp = this.state.criteria11;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria11: temp });
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
                          var temp = this.state.criteria11;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria11: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 12</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>How do you visualize the student’s learning curve? </td>
                    <td>PLO-8 Ethics</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      Both previous and current attempts are satisfactory.
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
                          var temp = this.state.criteria12;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria12: temp });
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
                          var temp = this.state.criteria12;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria12: temp });
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
                          var temp = this.state.criteria12;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria12: temp });
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
                          var temp = this.state.criteria12;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria12: temp });
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
                          var temp = this.state.criteria12;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria12: temp });
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
                          var temp = this.state.criteria12;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria12: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
              </div>
            </>
          ) : (
            <>
              <div>
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
                    <td>Criterion 1</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      How clearly has the student identified issues related to
                      the project and explained the methodology?
                    </td>
                    <td>PLO-4 Investigation</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      How clearly student identifies, summarize, or explain the
                      main problem or question and how/why/which specific
                      method(s) are most relevant to the problem?
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
                          var temp = this.state.criteria1;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria1: temp });
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
                          var temp = this.state.criteria1;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria1: temp });
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
                          var temp = this.state.criteria1;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria1: temp });
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
                          var temp = this.state.criteria1;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria1: temp });
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
                          var temp = this.state.criteria1;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria1: temp });
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
                          var temp = this.state.criteria1;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria1: temp });
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
                    <td>Criteria 2</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      To what extent does the student realize the societal
                      impacts of design and implementation of the project?
                    </td>
                    <td>PLO-6 The Engineer and Society </td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      How correctly the student realizes the societal impact of
                      the proposed design and implementation and has made
                      sufficient efforts to address these effects?
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
                          var temp = this.state.criteria2;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria2: temp });
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
                          var temp = this.state.criteria2;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria2: temp });
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
                          var temp = this.state.criteria2;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria2: temp });
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
                          var temp = this.state.criteria2;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria2: temp });
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
                          var temp = this.state.criteria2;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria2: temp });
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
                          var temp = this.state.criteria2;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria2: temp });
                        }}
                      ></textarea>{" "}
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
                    <td>Criteria 3</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      What level of importance does the student assign to
                      sustainable design and implementation of a project?
                    </td>
                    <td>PLO-7 Environment and Sustainability</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      How the student realizes the need for sustainable design
                      and implementation of a project and gives clear answers w
                      h e n a s k e d how sustainability would be incorporated
                      in the project. Also, whether the project incorporates
                      sustainability
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
                          var temp = this.state.criteria3;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria3: temp });
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
                          var temp = this.state.criteria3;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria3: temp });
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
                          var temp = this.state.criteria3;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria3: temp });
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
                          var temp = this.state.criteria3;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria3: temp });
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
                          var temp = this.state.criteria3;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria3: temp });
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
                          var temp = this.state.criteria3;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria3: temp });
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
                    <td>Criteria 4</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      Does the student have an idea of professional ethics and
                      legal responsibilities relevant to the project?
                    </td>
                    <td>PLO-8 Ethics</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      How well the student explains professional ethics
                      satisfactorily and understands the legal responsibilities
                      relevant to the project.
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
                          var temp = this.state.criteria4;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria4: temp });
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
                          var temp = this.state.criteria4;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria4: temp });
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
                          var temp = this.state.criteria4;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria4: temp });
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
                          var temp = this.state.criteria4;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria4: temp });
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
                          var temp = this.state.criteria4;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria4: temp });
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
                          var temp = this.state.criteria4;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria4: temp });
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
                    <td>Criteria 5</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      How do you grade the student’s performance as an
                      individual and as a team member?
                    </td>
                    <td>PLO-9 Individual and Team Work</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The student worked on the assigned task, and accomplished
                      goals beyond expectations.
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
                          var temp = this.state.criteria5;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria5: temp });
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
                          var temp = this.state.criteria5;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria5: temp });
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
                          var temp = this.state.criteria5;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria5: temp });
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
                          var temp = this.state.criteria5;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria5: temp });
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
                          var temp = this.state.criteria5;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria5: temp });
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
                          var temp = this.state.criteria5;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria5: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 6</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      During the presentation, how do you grade the
                      conversational abilities of the student and how well has
                      the student responded to the questions?{" "}
                    </td>
                    <td>PLO-10 Communication</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The student’s conversational abilities are good. Student
                      assesses information in a meaningful way and clearly
                      answers the question with accuracy, detail and
                      understanding
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
                          var temp = this.state.criteria6;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria6: temp });
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
                          var temp = this.state.criteria6;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria6: temp });
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
                          var temp = this.state.criteria6;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria6: temp });
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
                          var temp = this.state.criteria6;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria6: temp });
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
                          var temp = this.state.criteria6;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria6: temp });
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
                          var temp = this.state.criteria6;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria6: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 7</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      How well were the project scheduling, planning and
                      progress?{" "}
                    </td>
                    <td>PLO-11 Project Management</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      Students developed a comprehensive schedule of project
                      activities/tasks with realistic due
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
                          var temp = this.state.criteria7;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria7: temp });
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
                          var temp = this.state.criteria7;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria7: temp });
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
                          var temp = this.state.criteria7;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria7: temp });
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
                          var temp = this.state.criteria7;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria7: temp });
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
                          var temp = this.state.criteria7;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria7: temp });
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
                          var temp = this.state.criteria7;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria7: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 8</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>How do you visualize the student’s learning curve?</td>
                    <td>PLO-12 Life Long Learning </td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      Both previous and current attempts for improvement are
                      good.
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
                          var temp = this.state.criteria8;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria8: temp });
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
                          var temp = this.state.criteria8;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria8: temp });
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
                          var temp = this.state.criteria8;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria8: temp });
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
                          var temp = this.state.criteria8;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria8: temp });
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
                          var temp = this.state.criteria8;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria8: temp });
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
                          var temp = this.state.criteria8;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria8: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
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
                    <td>Criteria 9</td>
                    <td>PLO</td>
                    <td>Weighing Factor</td>
                    <td style={{ width: "40%" }}>Guidelines</td>
                  </tr>

                  <tr>
                    <td>
                      Does the demonstration of project indicate that the
                      student has selected and applied suitable techniques,
                      resources, and modern engineering{" "}
                    </td>
                    <td>PLO-5 Modern Tool Usage</td>
                    <td>1-10</td>
                    <td rowSpan="5">
                      The demonstration indicates that the student has selected
                      the most appropriate resources and tools in wherever
                      needed is proficient with the relevant tools.
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
                          var temp = this.state.criteria9;
                          temp.marks1 = e.target.value;
                          this.setState({ criteria9: temp });
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
                          var temp = this.state.criteria9;
                          temp.remarks1 = e.target.value;
                          this.setState({ criteria9: temp });
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
                          var temp = this.state.criteria9;
                          temp.marks2 = e.target.value;
                          this.setState({ criteria9: temp });
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
                          var temp = this.state.criteria9;
                          temp.remarks2 = e.target.value;
                          this.setState({ criteria9: temp });
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
                          var temp = this.state.criteria9;
                          temp.marks3 = e.target.value;
                          this.setState({ criteria9: temp });
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
                          var temp = this.state.criteria9;
                          temp.remarks3 = e.target.value;
                          this.setState({ criteria9: temp });
                        }}
                      ></textarea>
                    </td>
                  </tr>
                </table>
                <br></br>

                <br></br>
              </div>
            </>
          )}
          {/* <h3 className="main_heading2" style={{textTransform:"uppercase",fontSize:"30px",color:"#0b1442",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>GROUP ASSESSMENT</h3>
               <Criteria_table c_no="13" PLO="11"/>
               <Criteria_table c_no="14" PLO="11"/>
               <Criteria_table c_no="15" PLO="11"/> 
               <Criteria_table c_no="16" PLO="11"/> 
               <Criteria_table c_no="17" PLO="5"/>  */}

          {/* <h3 style={{color:"black"}}>Criteria1</h3> */}

          <br></br>
          <Link to={"/#"}>
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
