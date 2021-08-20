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
        marks1: "",
        marks2: "",
        marks3: "",
        remarks1: "",
        remarks2: "",
        remarks3: "",
      },
      gradeData: {},
      weight1: 0,
      weight2: 0,
      weight3: 0,
      weight4: 0,
      weightmarks1: 0,
      weightmarks2: 0,
      weightmarks3: 0,
      weightmarks4: 0,
      weightageTotal: 0,
      allCriterias: [],
      eval1Criterias: [],
      eval2Criterias: [],
      eval3Criterias: [],
      eval4Criterias: [],
      eval1ObtainedMarks: 0,
      eval2ObtainedMarks: 0,
      eval3ObtainedMarks: 0,
      eval4ObtainedMarks: 0,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/grade/" + this.props.match.params.id)
      .then((resp) => {
        this.setState({ gradeData: resp.data.result[0] });
        axios
          .get(
            "http://localhost:3001/api/criteria/" +
            resp.data.result[0].project_id
          )
          .then((resp1) => {
            const eval1Criterias = resp1.data.result.filter(element => element.evalNo === '1')
            const eval2Criterias = resp1.data.result.filter(element => element.evalNo === '2')
            const eval3Criterias = resp1.data.result.filter(element => element.evalNo === '3')
            const eval4Criterias = resp1.data.result.filter(element => element.evalNo === '4')
            this.setState({ allCriterias: resp1.data.result,eval1Criterias,eval2Criterias,eval3Criterias,eval4Criterias });
            let eval1ObtainedMarks = 0;
            let eval2ObtainedMarks = 0;
            let eval3ObtainedMarks = 0;
            let eval4ObtainedMarks = 0;
            eval1Criterias.map(evl => {
              eval1ObtainedMarks= eval1ObtainedMarks + Number(evl.marks1) + Number(evl.marks2) + Number(evl.marks3)
            })
            eval2Criterias.map(evl => {
              eval2ObtainedMarks= eval2ObtainedMarks + Number(evl.marks1) + Number(evl.marks2) + Number(evl.marks3)
            })
            eval3Criterias.map(evl => {
              eval3ObtainedMarks= eval3ObtainedMarks + Number(evl.marks1) + Number(evl.marks2) + Number(evl.marks3)
            })
            eval4Criterias.map(evl => {
              eval4ObtainedMarks= eval4ObtainedMarks + Number(evl.marks1) + Number(evl.marks2) + Number(evl.marks3)
            })
            this.setState({eval1ObtainedMarks,eval2ObtainedMarks,eval3ObtainedMarks,eval4ObtainedMarks})
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
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
            RESULT
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
                <th>Project Title</th>
                <th>Project Id</th>
                <th>Batch</th>
                <th>Group Id</th>
                <th>Date</th>
              </tr>

              <tr>
                <td>{this.state.gradeData.projectTitle}</td>
                <td>{this.state.gradeData.project_id}</td>
                <td>{this.state.gradeData.batch}</td>
                <td>{this.state.gradeData.group_id}</td>
                <td>{this.state.gradeData.date}</td>
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
                <td>{this.state.gradeData.evlName1}</td>
                <td>{this.state.gradeData.designation1}</td>
              </tr>

              <tr>
                <td>2</td>
                <td>{this.state.gradeData.evlName2}</td>
                <td>{this.state.gradeData.designation2}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{this.state.gradeData.evlName3}</td>
                <td>{this.state.gradeData.designation3}</td>
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
                <td>{this.state.gradeData.stdRoll1}</td>
                <td>{this.state.gradeData.stdName1}</td>
                <td>{this.state.gradeData.groupP1}</td>
              </tr>

              <tr>
                <td>{this.state.gradeData.stdRoll2} </td>
                <td>{this.state.gradeData.stdName2}</td>
                <td>{this.state.gradeData.groupP2}</td>
              </tr>
              <tr>
                <td> {this.state.gradeData.stdRoll3}</td>
                <td>{this.state.gradeData.stdName3}</td>
                <td>{this.state.gradeData.groupP3}</td>
              </tr>
            </table>
            <br></br>
            <br></br>

            <h3
              className="main_heading2"
              style={{
                textTransform: "uppercase",
                fontSize: "30px",
                color: "#0b1442",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Marks Of Each Evaluation
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
                <th> Evaluation</th>
                <th>Name</th>
                <th>Group Position</th>
              </tr>

              <tr>
                <td>Evaluation 1</td>
                <td>
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name="des3"
                    type="text"
                    placeholder="Weightage out of 160 marks"
                    required
                    onChange={(e) => this.setState({ des3: e.target.value })}
                  ></input>
                </td>
                <td>abc</td>
              </tr>

              <tr>
                <td>Evaluation 2 </td>
                <td>
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name="des3"
                    type="text"
                    placeholder="Weightage out of 160 marks"
                    required
                    onChange={(e) => this.setState({ des3: e.target.value })}
                  ></input>
                </td>
                <td>abc</td>
              </tr>
              <tr>
                <td> Evaluation 3</td>
                <td>
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name="des3"
                    type="text"
                    placeholder="Weightage out of 160 marks"
                    required
                    onChange={(e) => this.setState({ des3: e.target.value })}
                  ></input>
                </td>
                <td>abc</td>
              </tr>
              <tr>
                <td> Evaluation 4</td>
                <td>
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name="des3"
                    type="text"
                    placeholder="Weightage out of 160 marks"
                    required
                    onChange={(e) => this.setState({ des3: e.target.value })}
                  ></input>
                </td>
                <td>abc</td>
              </tr>
            </table>
            <br></br>
            <br></br>
            <h3
              className="main_heading2"
              style={{
                textTransform: "uppercase",
                fontSize: "30px",
                color: "#0b1442",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              PLO
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
                <th> Plo No</th>
                <th>Obtained Marks</th>
                <th>Total Marks</th>
              </tr>

              <tr>
                <td>Plo 4</td>
                <td>abc</td>
                <td>abc</td>
              </tr>

              <tr>
                <td>Plo 5 </td>
                <td>abc</td>
                <td>abc</td>
              </tr>
              <tr>
                <td> Plo 6</td>
                <td>abc</td>
                <td>abc</td>
              </tr>
              <tr>
                <td>Plo 7</td>
                <td>abc</td>
                <td>abc</td>
              </tr>
              <tr>
                <td>Plo 8 </td>
                <td>abc</td>
                <td>abc</td>
              </tr>
              <tr>
                <td>Plo 9 </td>
                <td>abc</td>
                <td>abc</td>
              </tr>
              <tr>
                <td>Plo 10 </td>
                <td>abc</td>
                <td>abc</td>
              </tr>
              <tr>
                <td>Plo 11 </td>
                <td>abc</td>
                <td>abc</td>
              </tr>
              <tr>
                <td>Plo 12 </td>
                <td>abc</td>
                <td>abc</td>
              </tr>
            </table>
            <br></br>
            <br></br>
          </div>
          <div>
            {/* Individual Assesment */}
            <br></br>
          </div>

          <br></br>
          <Link to={"/"}>
            <button type="submit" class="btn btn-primary" id="marks_submit_btn">
              Save{" "}
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Mid;
