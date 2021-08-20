import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Evaluation1 from "./Evaluation1";
import Evaluation2 from "./Evaluation2";
import Evaluation3 from "./Evaluation3";
import Evaluation4 from "./Evaluation4";

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
      eval1ObtainedPerc: 0,
      eval2ObtainedPerc: 0,
      eval3ObtainedPerc: 0,
      eval4ObtainedPerc: 0,
      p4: [],
      p5: [],
      p6: [],
      p7: [],
      p8: [],
      p9: [],
      p10: [],
      p11: [],
      p12: [],
      p4perc: 0,
      p5perc: 0,
      p6perc: 0,
      p7perc: 0,
      p8perc: 0,
      p9perc: 0,
      p10perc: 0,
      p11perc: 0,
      p12perc: 0,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/grade/" + this.props.match.params.id)
      .then((resp) => {
        this.setState({ gradeData: resp.data.result[0] });
        axios
          .get(
            "http://localhost:3001/api/weightage/" +
              resp.data.result[0].project_id
          )
          .then((resp2) => {
            console.log("resp2.data");
            console.log(resp2.data);
            this.setState({
              weight1: Number(resp2.data.result[0].weight1),
              weight2: Number(resp2.data.result[0].weight2),
              weight3: Number(resp2.data.result[0].weight3),
              weight4: Number(resp2.data.result[0].weight4),
            });
          })
          .catch((err) => console.log(err));
        axios
          .get(
            "http://localhost:3001/api/criteria/" +
              resp.data.result[0].project_id
          )
          .then((resp1) => {
            const eval1Criterias = resp1.data.result.filter(
              (element) => element.evalNo === "1"
            );
            const eval2Criterias = resp1.data.result.filter(
              (element) => element.evalNo === "2"
            );
            const eval3Criterias = resp1.data.result.filter(
              (element) => element.evalNo === "3"
            );
            const eval4Criterias = resp1.data.result.filter(
              (element) => element.evalNo === "4"
            );
            this.setState({
              allCriterias: resp1.data.result,
              eval1Criterias,
              eval2Criterias,
              eval3Criterias,
              eval4Criterias,
            });
            let eval1ObtainedMarks = 0;
            let eval2ObtainedMarks = 0;
            let eval3ObtainedMarks = 0;
            let eval4ObtainedMarks = 0;
            eval1Criterias.map((evl) => {
              eval1ObtainedMarks =
                eval1ObtainedMarks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval2Criterias.map((evl) => {
              eval2ObtainedMarks =
                eval2ObtainedMarks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval3Criterias.map((evl) => {
              eval3ObtainedMarks =
                eval3ObtainedMarks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval4Criterias.map((evl) => {
              eval4ObtainedMarks =
                eval4ObtainedMarks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            this.setState({
              eval1ObtainedMarks,
              eval2ObtainedMarks,
              eval3ObtainedMarks,
              eval4ObtainedMarks,
              eval1ObtainedPerc: eval1ObtainedMarks / 1230,
              eval2ObtainedPerc: eval2ObtainedMarks / 1230,
              eval3ObtainedPerc: eval3ObtainedMarks / 1230,
              eval4ObtainedPerc: eval4ObtainedMarks / 810,
            });

            const p4 = resp1.data.result.filter(
              (crit) => crit.criteriaNo === "1" || crit.criteriaNo === "2"
            );
            const p5 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "9" ||
                crit.criteriaNo === "3" ||
                crit.criteriaNo === "17"
            );
            const p6 = resp1.data.result.filter(
              (crit) => crit.criteriaNo === "2"
            );
            const p7 = resp1.data.result.filter(
              (crit) => crit.criteriaNo === "3"
            );
            const p8 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "4" ||
                crit.criteriaNo === "9" ||
                crit.criteriaNo === "10" ||
                crit.criteriaNo === "11" ||
                crit.criteriaNo === "12"
            );
            const p9 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "5" ||
                crit.criteriaNo === "6" ||
                crit.criteriaNo === "7"
            );
            const p10 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "6" ||
                crit.criteriaNo === "4" ||
                crit.criteriaNo === "8"
            );
            const p11 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "7" ||
                crit.criteriaNo === "13" ||
                crit.criteriaNo === "14" ||
                crit.criteriaNo === "15" ||
                crit.criteriaNo === "16"
            );
            const p12 = resp1.data.result.filter(
              (crit) => crit.criteriaNo === "8"
            );
            this.setState({ p4, p5, p6, p7, p8, p9, p10, p11, p12 });
            let p4marks = 0;
            let p5marks = 0;
            let p6marks = 0;
            let p7marks = 0;
            let p8marks = 0;
            let p9marks = 0;
            let p10marks = 0;
            let p11marks = 0;
            let p12marks = 0;
            p4.map((evl) => {
              p4marks =
                p4marks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p5.map((evl) => {
              p5marks =
                p5marks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p6.map((evl) => {
              p6marks =
                p6marks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p7.map((evl) => {
              p7marks =
                p7marks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p8.map((evl) => {
              p8marks =
                p8marks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p9.map((evl) => {
              p9marks =
                p9marks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p10.map((evl) => {
              p10marks =
                p10marks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p11.map((evl) => {
              p11marks =
                p11marks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p12.map((evl) => {
              p12marks =
                p12marks +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            console.log("ooooooooooooooooooooooooooooooooooooooooo");
            console.log(p4marks);
            this.setState({
              p4perc: (p4marks / 720) * 100,
              p5perc: (p5marks / 990) * 100,
              p6perc: (p6marks / 360) * 100,
              p7perc: (p7marks / 360) * 100,
              p8perc: (p8marks / 1530) * 100,
              p9perc: (p9marks / 1080) * 100,
              p10perc: (p10marks / 1080) * 100,
              p11perc: (p11marks / 1440) * 100,
              p12perc: (p12marks / 360) * 100,
            });
          })
          .catch((err) => console.log(err));
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
              <th>Evaluation</th>
              <th>Weightage</th>
              <th>Obtained marks</th>
            </tr>

            <tr>
              <td>Evaluation 1</td>
              <td>{this.state.weight1}</td>
              <td>
                {(this.state.weight1 * this.state.eval1ObtainedPerc).toFixed(2)}
              </td>
            </tr>

            <tr>
              <td>Evaluation 2 </td>
              <td>{this.state.weight2}</td>
              <td>
                {(this.state.weight2 * this.state.eval2ObtainedPerc).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td> Evaluation 3</td>
              <td>{this.state.weight3}</td>
              <td>
                {(this.state.weight3 * this.state.eval3ObtainedPerc).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td> Evaluation 4</td>
              <td>{this.state.weight4}</td>
              <td>
                {(this.state.weight4 * this.state.eval4ObtainedPerc).toFixed(2)}
              </td>
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
              <th> PLO No</th>
              <th>Percentage</th>
            </tr>

            <tr>
              <td>Plo 4</td>
              <td>{this.state.p4perc.toFixed(2)}%</td>
            </tr>

            <tr>
              <td>Plo 5 </td>
              <td>{this.state.p5perc.toFixed(2)}%</td>
            </tr>
            <tr>
              <td> Plo 6</td>
              <td>{this.state.p6perc.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Plo 7</td>
              <td>{this.state.p7perc.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Plo 8 </td>
              <td>{this.state.p8perc.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Plo 9 </td>
              <td>{this.state.p9perc.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Plo 10 </td>
              <td>{this.state.p10perc.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Plo 11 </td>
              <td>{this.state.p11perc.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Plo 12 </td>
              <td>{this.state.p12perc.toFixed(2)}%</td>
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
        {this.state.eval4Criterias.length ? (
        <Tabs style={{ color: "#000" }}>
          <TabList>
            <Tab>Evaluation 1</Tab>
            <Tab style={{ marginLeft: "20%" }}>Evaluation 2</Tab>
            <Tab style={{ marginLeft: "20%" }}>Evaluation 3</Tab>
            <Tab style={{ marginLeft: "20%" }}>Evaluation 4</Tab>
          </TabList>
          <TabPanel>
            <Evaluation1 eval1Criterias={this.state.eval1Criterias} data={this.state.gradeData} />
          </TabPanel>
          <TabPanel>
            <Evaluation2 eval1Criterias={this.state.eval2Criterias} data={this.state.gradeData} />
          </TabPanel>
          <TabPanel>
            <Evaluation3 eval1Criterias={this.state.eval3Criterias} data={this.state.gradeData} />
          </TabPanel>
          <TabPanel>
            <Evaluation4 eval1Criterias={this.state.eval4Criterias} data={this.state.gradeData} />
          </TabPanel>
        </Tabs>): null}
      </div>
    );
  }
}

export default Mid;
