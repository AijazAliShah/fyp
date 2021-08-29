import React, { Component } from "react";
import { Link } from "react-router-dom";
import Criteria_table from "./Criteria_table";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export class Mid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: [],
      member1: [],
      member2: [],
      member3: [],
      selectedTab: 0,

    };
  }

  componentDidMount() {
    const group = this.props.eval1Criterias.filter(
      (elv) => elv.stdRollNo === "group"
    );
    const member1 = this.props.eval1Criterias.filter(
      (elv) => elv.stdRollNo === this.props.data.stdRoll1
    );
    const member2 = this.props.eval1Criterias.filter(
      (elv) => elv.stdRollNo === this.props.data.stdRoll2
    );
    const member3 = this.props.eval1Criterias.filter(
      (elv) => elv.stdRollNo === this.props.data.stdRoll3
    );
    console.log("sssssssssssssssssssssssssssssss");
    console.log(group, member1, member2, member3);
    this.setState({ group, member1, member2, member3 });
    console.log("saaaaaaaaaaaaaa");
    console.log(group.filter((crit) => crit.criteriaNo === "13")[0]);
  }

  render() {
    console.log("data123", this.state, this.props);

    return (
      <Tabs style={{ color: "#000" }} onSelect={index => this.setState({selectedTab: index})}>
        <TabList>
          {this.props.data.stdRoll1 ? (<Tab style={this.state.selectedTab === 0 ? { backgroundColor: '#0b1442', color: '#fff' } : null}>Individual 1</Tab>) : null}
          {this.props.data.stdRoll2 ? (<Tab style={this.state.selectedTab === 1 ? { backgroundColor: '#0b1442', color: '#fff' } : null}>Individual 2</Tab>) : null}
          {this.props.data.stdRoll3 ? (<Tab style={this.state.selectedTab === 2 ? { backgroundColor: '#0b1442', color: '#fff' } : null}>Individual 3</Tab>) : null}
        </TabList>

        <TabPanel>
          <>
            <div>
              {/* Individual Assesment */}
              <br></br>
              <br></br>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h2>
                  Name: <b>{this.props.data.stdName1}</b>
                </h2>
                <h2>
                  Roll Number: <b>{this.props.data.stdRoll1}</b>
                </h2>
                <h2>
                  Position: <b>{this.props.data.groupP1}</b>
                </h2>
              </div>
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criterion 1</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 2</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    To what extent does the student realize the societal impacts
                    of design and implementation of the project?
                  </td>
                  <td>PLO-6 The Engineer and Society</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 3</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    What level of importance does the student assign to
                    sustainable design and implementation of a project?
                  </td>
                  <td>PLO-7 Environment and Sustainability</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    How the student realizes the need for sustainable design and
                    implementation of a project and gives clear answers w h e n
                    a s k e d how sustainability would be incorporated in the
                    project. Also, whether the project incorporates
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 4</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 5</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    How do you grade the student’s performance as an individual
                    and as a team member?
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}> Criteria 6</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}> PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}> Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    During the presentation, how do you grade the conversational
                    abilities of the student and how well has the student
                    responded to the questions?{" "}
                  </td>
                  <td>PLO-10 Communication</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The student’s conversational abilities are good. Student
                    assesses information in a meaningful way and clearly answers
                    the question with accuracy, detail and understanding
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].reMarks
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 7</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    How well were the project scheduling, planning and progress?
                  </td>
                  <td>PLO-11 Project Management</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    Students developed a comprehensive schedule of project
                    activities/tasks with realistic due dates. The planning was
                    efficient and complete reports of project progress were
                    provided
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 8</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>How do you visualize the student’s learning curve?</td>
                  <td>PLO-12 Life Long Learning</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    Both previous and current attempts for improvement are good.
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 9</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    Does the demonstration of project indicate that the student
                    has selected and applied suitable techniques, resources, and
                    modern engineering and IT tools?
                  </td>
                  <td>PLO-5 Modern Tool Usage</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The demonstration indicates that the student has selected
                    the most appropriate resources and tools in wherever needed
                    is proficient with the relevant tools
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member1.length
                      ? this.state.member1.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].reMarks3
                      : null}
                  </td>
                </tr>
              </table>
              <br></br>
            </div>
          </>
        </TabPanel>
        <TabPanel>
          <>
            <div>
              {/* Individual Assesment */}
              <br></br>
              <br></br>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h2>
                  Name: <b>{this.props.data.stdName1}</b>
                </h2>
                <h2>
                  Roll Number: <b>{this.props.data.stdRoll1}</b>
                </h2>
                <h2>
                  Position: <b>{this.props.data.groupP1}</b>
                </h2>
              </div>
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criterion 1</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 2</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    To what extent does the student realize the societal impacts
                    of design and implementation of the project?
                  </td>
                  <td>PLO-6 The Engineer and Society</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 3</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    What level of importance does the student assign to
                    sustainable design and implementation of a project?
                  </td>
                  <td>PLO-7 Environment and Sustainability</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    How the student realizes the need for sustainable design and
                    implementation of a project and gives clear answers w h e n
                    a s k e d how sustainability would be incorporated in the
                    project. Also, whether the project incorporates
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 4</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 5</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    How do you grade the student’s performance as an individual
                    and as a team member?
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 6</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    During the presentation, how do you grade the conversational
                    abilities of the student and how well has the student
                    responded to the questions?{" "}
                  </td>
                  <td>PLO-10 Communication</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The student’s conversational abilities are good. Student
                    assesses information in a meaningful way and clearly answers
                    the question with accuracy, detail and understanding
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].reMarks
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 7</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    How well were the project scheduling, planning and progress?
                  </td>
                  <td>PLO-11 Project Management</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    Students developed a comprehensive schedule of project
                    activities/tasks with realistic due dates. The planning was
                    efficient and complete reports of project progress were
                    provided
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 8</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>How do you visualize the student’s learning curve?</td>
                  <td>PLO-12 Life Long Learning</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    Both previous and current attempts for improvement are good.
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 9</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    Does the demonstration of project indicate that the student
                    has selected and applied suitable techniques, resources, and
                    modern engineering and IT tools?
                  </td>
                  <td>PLO-5 Modern Tool Usage</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The demonstration indicates that the student has selected
                    the most appropriate resources and tools in wherever needed
                    is proficient with the relevant tools
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member2.length
                      ? this.state.member2.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].reMarks3
                      : null}
                  </td>
                </tr>
              </table>
              <br></br>
            </div>
          </>
        </TabPanel>
        <TabPanel>
          <>
            <div>
              {/* Individual Assesment */}
              <br></br>
              <br></br>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h2>
                  Name: <b>{this.props.data.stdName1}</b>
                </h2>
                <h2>
                  Roll Number: <b>{this.props.data.stdRoll1}</b>
                </h2>
                <h2>
                  Position: <b>{this.props.data.groupP1}</b>
                </h2>
              </div>
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criterion 1</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "1"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 2</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    To what extent does the student realize the societal impacts
                    of design and implementation of the project?
                  </td>
                  <td>PLO-6 The Engineer and Society</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "2"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 3</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    What level of importance does the student assign to
                    sustainable design and implementation of a project?
                  </td>
                  <td>PLO-7 Environment and Sustainability</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    How the student realizes the need for sustainable design and
                    implementation of a project and gives clear answers w h e n
                    a s k e d how sustainability would be incorporated in the
                    project. Also, whether the project incorporates
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "3"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 4</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "4"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 5</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    How do you grade the student’s performance as an individual
                    and as a team member?
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "5"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 6</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    During the presentation, how do you grade the conversational
                    abilities of the student and how well has the student
                    responded to the questions?{" "}
                  </td>
                  <td>PLO-10 Communication</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The student’s conversational abilities are good. Student
                    assesses information in a meaningful way and clearly answers
                    the question with accuracy, detail and understanding
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].reMarks
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "6"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 7</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    How well were the project scheduling, planning and progress?
                  </td>
                  <td>PLO-11 Project Management</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    Students developed a comprehensive schedule of project
                    activities/tasks with realistic due dates. The planning was
                    efficient and complete reports of project progress were
                    provided
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "7"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 8</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>How do you visualize the student’s learning curve?</td>
                  <td>PLO-12 Life Long Learning</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    Both previous and current attempts for improvement are good.
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "8"
                      )[0].reMarks3
                      : null}
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
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Criteria 9</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>Weighing Factor</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff", width: "40%"
                  }}>Guidelines</td>
                </tr>

                <tr>
                  <td>
                    Does the demonstration of project indicate that the student
                    has selected and applied suitable techniques, resources, and
                    modern engineering and IT tools?
                  </td>
                  <td>PLO-5 Modern Tool Usage</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The demonstration indicates that the student has selected
                    the most appropriate resources and tools in wherever needed
                    is proficient with the relevant tools
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].marks1
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].reMarks1
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].marks2
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].reMarks2
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].marks3
                      : null}
                  </td>
                  <td>
                    {this.state.member3.length
                      ? this.state.member3.filter(
                        (crit) => crit.criteriaNo === "9"
                      )[0].reMarks3
                      : null}
                  </td>
                </tr>
              </table>
              <br></br>
            </div>
          </>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Mid;
