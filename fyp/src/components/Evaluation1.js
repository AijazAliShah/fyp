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
    const group = this.props.eval1Criterias.filter(elv => elv.stdRollNo === 'group')
    const member1 = this.props.eval1Criterias.filter(elv => elv.stdRollNo === this.props.data.stdRoll1)
    const member2 = this.props.eval1Criterias.filter(elv => elv.stdRollNo === this.props.data.stdRoll2)
    const member3 = this.props.eval1Criterias.filter(elv => elv.stdRollNo === this.props.data.stdRoll3)
    console.log('sssssssssssssssssssssssssssssss')
    console.log(group, member1, member2, member3)
    this.setState({ group, member1, member2, member3 })
    console.log('saaaaaaaaaaaaaa')
    console.log(group.filter(crit => crit.criteriaNo === '13')[0])
  }

  render() {
    console.log("data123", this.state, this.props);

    return (
      <Tabs style={{ color: "#000" }} onSelect={index => this.setState({selectedTab: index})}>
        <TabList>
          <Tab style= {this.state.selectedTab === 0 ? { backgroundColor: '#0b1442', color: '#fff' } : null}>Group</Tab>
          {this.props.data.stdRoll1 ? (<Tab style={this.state.selectedTab === 1 ? { backgroundColor: '#0b1442', color: '#fff' } : null}>Individual 1</Tab>) : null}
          {this.props.data.stdRoll2 ? (<Tab style={this.state.selectedTab === 2 ? { backgroundColor: '#0b1442', color: '#fff' } : null}>Individual 2</Tab>) : null}
          {this.props.data.stdRoll3 ? (<Tab style={this.state.selectedTab === 3 ? { backgroundColor: '#0b1442', color: '#fff' } : null}>Individual 3</Tab>) : null}
        </TabList>
        <TabPanel>
          <>
            <div>
              <h3 className="main_heading2"
                style={{
                  textTransform: "uppercase",
                  fontSize: "30px",
                  color: "#0b1442",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}>Group Based Assessment </h3>
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
                  }}>Criterion 13</td>
                  <td style={{
                    backgroundColor: "#0b1442", textAlign: "center",
                    fontWeight: "bold", color: "#fff"
                  }}>PLO</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '13')[0].marks1 : null}
                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '13')[0].reMarks1 : null}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '13')[0].marks2 : null}
                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '13')[0].reMarks2 : null}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '13')[0].marks3 : null}
                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '13')[0].reMarks3 : null}
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
                  }}>Criteria 14</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '14')[0].marks1 : null}
                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '14')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '14')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '14')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '14')[0].marks3 : null}
                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '14')[0].reMarks3 : null}

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
                  }}>Criteria 15</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '15')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '15')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '15')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '15')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '15')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '15')[0].reMarks3 : null}

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
                  }}>Criteria 16</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '16')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '16')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '16')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '16')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '16')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '16')[0].reMarks3 : null}

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
                  }}>Criteria 17</td>
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
                  <td>Demonstration of Project? </td>
                  <td>PLO-5 Project Management</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '17')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '17')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '17')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '17')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '17')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.group.length ? this.state.group.filter(crit => crit.criteriaNo === '17')[0].reMarks3 : null}

                  </td>
                </tr>

              </table>
              <br></br>

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
              <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <h2>Name: <b>{this.props.data.stdName1}</b></h2>
                <h2>Roll Number: <b>{this.props.data.stdRoll1}</b></h2>
                <h2>Position: <b>{this.props.data.groupP1}</b></h2>
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
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '1')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '1')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '1')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '1')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '1')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '1')[0].reMarks3 : null}

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
                    How clearly has the student explained the Methodology?
                  </td>
                  <td>PLO-4 Investigation</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    How successfully the student explains how /why / which
                    methods are most relevant to the problem and also describes
                    embedded methods and possible alternative methods of working
                    on the problem?
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
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '2')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '2')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '2')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '2')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '2')[0].marks3 : null}
                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '2')[0].reMarks3 : null}

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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '3')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '3')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '3')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '3')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '3')[0].marks3 : null}
                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '3')[0].reMarks3 : null}
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
                    How well have the students responded to the questions?
                  </td>
                  <td>PLO-10 Communication</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    How well the student assesses information in a meaningful
                    way and clearly answers the questions with accuracy, detail
                    and understanding?
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
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '4')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '4')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '4')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '4')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '4')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '4')[0].reMarks3 : null}

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
                    How do you grade the student’s performance as an individual?
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
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '5')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '5')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '5')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '5')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '5')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '5')[0].reMarks3 : null}

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
                  }}> PLO</td>
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
                    How do you grade the student’s performance as a team member?{" "}
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
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '6')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '6')[0].reMarks : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '6')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '6')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '6')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '6')[0].reMarks3 : null}

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
                    How do you grade the psychological contribution of the
                    student to the team?{" "}
                  </td>
                  <td>PLO-9 Individual and Team Work</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The student boosted morale of the team and brought consensus
                    when required.
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
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '7')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '7')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '7')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '7')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '7')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '7')[0].reMarks3 : null}

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
                  <td>
                    How do you grade the student’s communicational abilities as
                    a team member?
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '8')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '8')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '8')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '8')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '8')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '8')[0].reMarks3 : null}

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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '9')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '9')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '9')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '9')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '9')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '9')[0].reMarks3 : null}

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
                  }}>Criteria 10</td>
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
                    Does the student have an idea of professional ethics
                    relevant to the project?
                  </td>
                  <td>PLO-8 Ethics</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The student demonstrates professional ethics satisfactorily.
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
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '10')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '10')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '10')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '10')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '10')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '10')[0].reMarks3 : null}

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
                  }}>Criteria 11</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '11')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '11')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '11')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '11')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '11')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '11')[0].reMarks3 : null}

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
                  }}>Criteria 12</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '12')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '12')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '12')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '12')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '12')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member1.length ? this.state.member1.filter(crit => crit.criteriaNo === '12')[0].reMarks3 : null}

                  </td>
                </tr>
              </table>
              <br></br>

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
              <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <h2>Name: <b>{this.props.data.stdName2}</b></h2>
                <h2>Roll Number: <b>{this.props.data.stdRoll2}</b></h2>
                <h2>Position: <b>{this.props.data.groupP2}</b></h2>
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
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '1')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '1')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '1')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '1')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '1')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '1')[0].reMarks3 : null}

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
                    How clearly has the student explained the Methodology?
                  </td>
                  <td>PLO-4 Investigation</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    How successfully the student explains how /why / which
                    methods are most relevant to the problem and also describes
                    embedded methods and possible alternative methods of working
                    on the problem?
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
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '2')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '2')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '2')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '2')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '2')[0].marks3 : null}
                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '2')[0].reMarks3 : null}

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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '3')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '3')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '3')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '3')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '3')[0].marks3 : null}
                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '3')[0].reMarks3 : null}
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
                    How well have the students responded to the questions?
                  </td>
                  <td>PLO-10 Communication</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    How well the student assesses information in a meaningful
                    way and clearly answers the questions with accuracy, detail
                    and understanding?
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
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '4')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '4')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '4')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '4')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '4')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '4')[0].reMarks3 : null}

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
                    How do you grade the student’s performance as an individual?
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
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '5')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '5')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '5')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '5')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '5')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '5')[0].reMarks3 : null}

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
                    How do you grade the student’s performance as a team member?{" "}
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
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '6')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '6')[0].reMarks : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '6')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '6')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '6')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '6')[0].reMarks3 : null}

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
                    How do you grade the psychological contribution of the
                    student to the team?{" "}
                  </td>
                  <td>PLO-9 Individual and Team Work</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The student boosted morale of the team and brought consensus
                    when required.
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
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '7')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '7')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '7')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '7')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '7')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '7')[0].reMarks3 : null}

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
                  <td>
                    How do you grade the student’s communicational abilities as
                    a team member?
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '8')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '8')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '8')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '8')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '8')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '8')[0].reMarks3 : null}

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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '9')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '9')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '9')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '9')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '9')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '9')[0].reMarks3 : null}

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
                  }}>Criteria 10</td>
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
                    Does the student have an idea of professional ethics
                    relevant to the project?
                  </td>
                  <td>PLO-8 Ethics</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The student demonstrates professional ethics satisfactorily.
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
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '10')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '10')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '10')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '10')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '10')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '10')[0].reMarks3 : null}

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
                  }}>Criteria 11</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '11')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '11')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '11')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '11')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '11')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '11')[0].reMarks3 : null}

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
                  }}>Criteria 12</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '12')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '12')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '12')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '12')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '12')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member2.length ? this.state.member2.filter(crit => crit.criteriaNo === '12')[0].reMarks3 : null}

                  </td>
                </tr>
              </table>
            </div>
          </>
        </TabPanel>
        <TabPanel>
          <>
            <div>
              {/* Individual Assesment */}
              <br></br>
              <br></br>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <h2>Name: <b>{this.props.data.stdName3}</b></h2>
                <h2>Roll Number: <b>{this.props.data.stdRoll3}</b></h2>
                <h2>Position: <b>{this.props.data.groupP3}</b></h2>
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
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '1')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '1')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '1')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '1')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '1')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '1')[0].reMarks3 : null}

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
                    How clearly has the student explained the Methodology?
                  </td>
                  <td>PLO-4 Investigation</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    How successfully the student explains how /why / which
                    methods are most relevant to the problem and also describes
                    embedded methods and possible alternative methods of working
                    on the problem?
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
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '2')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '2')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '2')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '2')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '2')[0].marks3 : null}
                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '2')[0].reMarks3 : null}

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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '3')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '3')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '3')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '3')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '3')[0].marks3 : null}
                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '3')[0].reMarks3 : null}
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
                    How well have the students responded to the questions?
                  </td>
                  <td>PLO-10 Communication</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    How well the student assesses information in a meaningful
                    way and clearly answers the questions with accuracy, detail
                    and understanding?
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
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '4')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '4')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '4')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '4')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '4')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '4')[0].reMarks3 : null}

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
                    How do you grade the student’s performance as an individual?
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
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '5')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '5')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '5')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '5')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '5')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '5')[0].reMarks3 : null}

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
                    How do you grade the student’s performance as a team member?{" "}
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
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '6')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '6')[0].reMarks : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '6')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '6')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '6')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '6')[0].reMarks3 : null}

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
                    How do you grade the psychological contribution of the
                    student to the team?{" "}
                  </td>
                  <td>PLO-9 Individual and Team Work</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The student boosted morale of the team and brought consensus
                    when required.
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
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '7')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '7')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '7')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '7')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '7')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '7')[0].reMarks3 : null}

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
                  <td>
                    How do you grade the student’s communicational abilities as
                    a team member?
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '8')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '8')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '8')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '8')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '8')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '8')[0].reMarks3 : null}

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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '9')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '9')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '9')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '9')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '9')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '9')[0].reMarks3 : null}

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
                  }}>Criteria 10</td>
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
                    Does the student have an idea of professional ethics
                    relevant to the project?
                  </td>
                  <td>PLO-8 Ethics</td>
                  <td>1-10</td>
                  <td rowSpan="5">
                    The student demonstrates professional ethics satisfactorily.
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
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '10')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '10')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '10')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '10')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '10')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '10')[0].reMarks3 : null}

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
                  }}>Criteria 11</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '11')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '11')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '11')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '11')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '11')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '11')[0].reMarks3 : null}

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
                  }}>Criteria 12</td>
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
                  <td>ReMarks</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '12')[0].marks1 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '12')[0].reMarks1 : null}

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '12')[0].marks2 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '12')[0].reMarks2 : null}

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '12')[0].marks3 : null}

                  </td>
                  <td>
                    {this.state.member3.length ? this.state.member3.filter(crit => crit.criteriaNo === '12')[0].reMarks3 : null}

                  </td>
                </tr>
              </table>
            </div>
          </>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Mid;
