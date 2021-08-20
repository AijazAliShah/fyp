import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        marks1: "2",
        marks2: "3",
        marks3: "2",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
    };
  }

  saveData() {
    axios
      .post("http://localhost:3001/api/grade", {
        projectTitle: this.state.projectTitle,
        project_id: this.state.projectId,
        batch: this.state.batch,
        group_id: this.state.groupId,
        date: this.state.date,
        evlP: this.state.eval_no,
        evlName1: this.state.evl1,
        evlName2: this.state.evl2,
        evlName3: this.state.evl3,
        designation1: this.state.des1,
        designation2: this.state.des2,
        designation3: this.state.des3,
        stdRoll1: this.state.rollNo1,
        stdRoll2: this.state.rollNo2,
        stdRoll3: this.state.rollNo3,
        stdName1: this.state.stdName1,
        stdName2: this.state.stdName2,
        stdName3: this.state.stdName3,
        groupP1: this.state.stdG1,
        groupP2: this.state.stdG2,
        groupP3: this.state.stdG3,
      })
      .then((resp) => {
        console.log(resp.data);
        if (this.state.eval_no !== "4") {
          for (let i = 13; i < 18; i++) {
            axios
              .post("http://localhost:3001/api/criteria", {
                grade_id: resp.data.result.insertId,
                marks1: this.state[`criteria${i}`].marks1,
                marks2: this.state[`criteria${i}`].marks2,
                marks3: this.state[`criteria${i}`].marks3,
                reMarks1: this.state[`criteria${i}`].remarks1,
                reMarks2: this.state[`criteria${i}`].remarks2,
                reMarks3: this.state[`criteria${i}`].remarks3,
                criteriaNo: i,
                evalNo: this.state.eval_no,
                project_id: this.state.projectId.toLocaleLowerCase(),
                stdRollNo: "group",
              })
              .then((resp1) => {
                console.log(resp1.data);
                if (i === 17) {
                  // window.location.href = `/rubric2/${resp.data.result.insertId}/${this.state.eval_no}`;
                }
              })
              .catch((err) => console.log(err));
          }
        }
      })
      .catch((err) => console.log(err));
  }
  render() {
    console.log("data", this.state);

    return (
      <div id="c_table">
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
                name="projectTitle"
                placeholder="Project Title"
                className="mid_inp"
                required
                onChange={(e) =>
                  this.setState({ projectTitle: e.target.value })
                }
              ></input>
            </td>
            <td>
              {" "}
              <input
                type="text"
                name="projectId"
                placeholder="Project ID"
                className="mid_inp"
                required
                autofocus
                onChange={(e) => this.setState({ projectId: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="number"
                name="batch"
                placeholder="Batch"
                className="mid_inp"
                required
                onChange={(e) => this.setState({ batch: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="text"
                name="groupId"
                placeholder="Group ID"
                className="mid_inp"
                required
                onChange={(e) => this.setState({ groupId: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                name="date"
                type="date"
                className="mid_inp"
                onChange={(e) => this.setState({ date: e.target.value })}
              ></input>
            </td>
            <td>
              <select
                name="eval_no"
                id="eval_no"
                onChange={(e) => this.setState({ eval_no: e.target.value })}
              >
                <option>Select Evaluation no</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
              </select>
            </td>
          </tr>
        </table>
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
          {/* //student details/ */}
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
              <th> Roll No</th>
              <th>Name</th>
              <th>Group Position</th>
            </tr>

            <tr>
              <td>
                {" "}
                <input
                  style={{ width: "100%", height: "100%" }}
                  name="rollNo1"
                  type="text"
                  placeholder="Roll No"
                  required
                  onChange={(e) => this.setState({ rollNo1: e.target.value })}
                ></input>
              </td>
              <td>
                <input
                  style={{ width: "100%", height: "100%" }}
                  name="stdName1"
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => this.setState({ stdName1: e.target.value })}
                ></input>
              </td>
              <td>
                <input
                  style={{ width: "100%", height: "100%" }}
                  name="stdG1"
                  type="text"
                  placeholder="Group Position"
                  required
                  onChange={(e) => this.setState({ stdG1: e.target.value })}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <input
                  style={{ width: "100%", height: "100%" }}
                  name="rollNo2"
                  type="text"
                  placeholder="Roll No"
                  required
                  onChange={(e) => this.setState({ rollNo2: e.target.value })}
                ></input>
              </td>
              <td>
                <input
                  style={{ width: "100%", height: "100%" }}
                  name="stdName2"
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => this.setState({ stdName2: e.target.value })}
                ></input>
              </td>
              <td>
                <input
                  style={{ width: "100%", height: "100%" }}
                  name="stdG2"
                  type="text"
                  placeholder="Group Position"
                  required
                  onChange={(e) => this.setState({ stdG2: e.target.value })}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  style={{ width: "100%", height: "100%" }}
                  name="rollNo3"
                  type="text"
                  placeholder="Roll No"
                  required
                  onChange={(e) => this.setState({ rollNo3: e.target.value })}
                ></input>
              </td>
              <td>
                <input
                  style={{ width: "100%", height: "100%" }}
                  name="stdName3"
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => this.setState({ stdName3: e.target.value })}
                ></input>
              </td>
              <td>
                <input
                  style={{ width: "100%", height: "100%" }}
                  name="stdG3"
                  type="text"
                  placeholder="Group Position"
                  required
                  onChange={(e) => this.setState({ stdG3: e.target.value })}
                ></input>
              </td>
            </tr>
          </table>
        </div>
        {this.state.eval_no !== "4" ? (
          <>
            <div>
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
                  <td>
                    How well have the tasks been distributed among members?
                  </td>
                  <td>PLO-11 Project Management</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    Are the project roles and responsibilities were evenly
                    divided among team members?
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
                    <select
                      name="fact"
                      id="fact"
                      onChange={(e) => {
                        var temp = this.state.criteria13;
                        temp.marks2 = e.target.value;
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
                    <select
                      name="fact"
                      id="fact"
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
                    <select
                      name="fact"
                      id="fact"
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
                    <select
                      name="fact"
                      id="fact"
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
                    <select
                      name="fact"
                      id="fact"
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
                    How has the student planned to carry out rest of the
                    Project?
                  </td>
                  <td>PLO-11 Project Management</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    Has the student provided a detailed description of future
                    work related to the project?
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
                    <select
                      name="fact"
                      id="fact"
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
                    <select
                      name="fact"
                      id="fact"
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
                    <select
                      name="fact"
                      id="fact"
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
                    <select
                      name="fact"
                      id="fact"
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
                    <select
                      name="fact"
                      id="fact"
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
          </>
        ) : null}
        {/* <h3 className="main_heading2" style={{textTransform:"uppercase",fontSize:"30px",color:"#0b1442",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>GROUP ASSESSMENT</h3>
               <Criteria_table c_no="13" PLO="11"/>
               <Criteria_table c_no="14" PLO="11"/>
               <Criteria_table c_no="15" PLO="11"/> 
               <Criteria_table c_no="16" PLO="11"/> 
               <Criteria_table c_no="17" PLO="5"/>  */}

        {/* <h3 style={{color:"black"}}>Criteria1</h3> */}

        <br></br>
        {/* <Link to={"/rubric2"}> */}
        <button
          type="submit"
          class="btn btn-primary"
          id="marks_submit_btn"
          onClick={() => this.saveData()}
        >
          Save and Next{" "}
        </button>
        {/* </Link> */}
      </div>
    );
  }
}

export default Mid;
