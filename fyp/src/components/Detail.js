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
      eval1Criterias1: [],
      eval2Criterias1: [],
      eval3Criterias1: [],
      eval4Criterias1: [],
      eval1Criterias2: [],
      eval2Criterias2: [],
      eval3Criterias2: [],
      eval4Criterias2: [],
      eval1Criterias3: [],
      eval2Criterias3: [],
      eval3Criterias3: [],
      eval4Criterias3: [],
      eval1ObtainedMarks1: 0,
      eval2ObtainedMarks1: 0,
      eval3ObtainedMarks1: 0,
      eval4ObtainedMarks1: 0,
      eval1ObtainedMarks2: 0,
      eval2ObtainedMarks2: 0,
      eval3ObtainedMarks2: 0,
      eval4ObtainedMarks2: 0,
      eval1ObtainedMarks3: 0,
      eval2ObtainedMarks3: 0,
      eval3ObtainedMarks3: 0,
      eval4ObtainedMarks3: 0,
      eval1ObtainedPerc1: 0,
      eval2ObtainedPerc1: 0,
      eval3ObtainedPerc1: 0,
      eval4ObtainedPerc1: 0,
      eval1ObtainedPerc2: 0,
      eval2ObtainedPerc2: 0,
      eval3ObtainedPerc2: 0,
      eval4ObtainedPerc2: 0,
      eval1ObtainedPerc3: 0,
      eval2ObtainedPerc3: 0,
      eval3ObtainedPerc3: 0,
      eval4ObtainedPerc3: 0,
      finalReport: "",
      otherRepots: "",
      byChairman: "",
      p4m1: [],
      p4m2: [],
      p4m3: [],
      p5m1: [],
      p5m2: [],
      p5m3: [],
      p6m1: [],
      p6m2: [],
      p6m3: [],
      p7m1: [],
      p7m2: [],
      p7m3: [],
      p8m1: [],
      p8m2: [],
      p8m3: [],
      p9m1: [],
      p9m2: [],
      p9m3: [],
      p10m1: [],
      p10m2: [],
      p10m3: [],
      p11m1: [],
      p11m2: [],
      p11m3: [],
      p12m1: [],
      p12m2: [],
      p12m3: [],
      p4perc1: 0,
      p4perc2: 0,
      p4perc3: 0,
      p5perc1: 0,
      p5perc2: 0,
      p5perc3: 0,
      p6perc1: 0,
      p6perc2: 0,
      p6perc3: 0,
      p7perc1: 0,
      p7perc2: 0,
      p7perc3: 0,
      p8perc1: 0,
      p8perc2: 0,
      p8perc3: 0,
      p9perc1: 0,
      p9perc2: 0,
      p9perc3: 0,
      p10perc1: 0,
      p10perc2: 0,
      p10perc3: 0,
      p11perc1: 0,
      p11perc2: 0,
      p11perc3: 0,
      p12perc1: 0,
      p12perc2: 0,
      p12perc3: 0,
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
              finalReport: Number(resp2.data.result[0].finalReport),
              otherRepots: Number(resp2.data.result[0].otherRepots),
              byChairman: Number(resp2.data.result[0].byChairman),
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

            const eval1Criterias1 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "1" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const eval1Criterias2 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "1" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const eval1Criterias3 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "1" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll3)
            );

            const eval2Criterias1 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "2" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const eval2Criterias2 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "2" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const eval2Criterias3 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "2" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll3)
            );

            const eval3Criterias1 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "3" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const eval3Criterias2 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "3" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const eval3Criterias3 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "3" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll3)
            );

            const eval4Criterias1 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "4" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const eval4Criterias2 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "4" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const eval4Criterias3 = resp1.data.result.filter(
              (element) =>
                element.evalNo === "4" &&
                (element.stdRollNo === "group" ||
                  element.stdRollNo === resp.data.result[0].stdRoll3)
            );

            this.setState({
              allCriterias: resp1.data.result,
              eval1Criterias,
              eval2Criterias,
              eval3Criterias,
              eval4Criterias,
              eval1Criterias1,
              eval2Criterias1,
              eval3Criterias1,
              eval4Criterias1,
              eval1Criterias2,
              eval2Criterias2,
              eval3Criterias2,
              eval4Criterias2,
              eval1Criterias3,
              eval2Criterias3,
              eval3Criterias3,
              eval4Criterias3,
            });
            let eval1ObtainedMarks1 = 0;
            let eval2ObtainedMarks1 = 0;
            let eval3ObtainedMarks1 = 0;
            let eval4ObtainedMarks1 = 0;
            let eval1ObtainedMarks2 = 0;
            let eval2ObtainedMarks2 = 0;
            let eval3ObtainedMarks2 = 0;
            let eval4ObtainedMarks2 = 0;
            let eval1ObtainedMarks3 = 0;
            let eval2ObtainedMarks3 = 0;
            let eval3ObtainedMarks3 = 0;
            let eval4ObtainedMarks3 = 0;

            eval1Criterias1.map((evl) => {
              eval1ObtainedMarks1 =
                eval1ObtainedMarks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval1Criterias2.map((evl) => {
              eval1ObtainedMarks2 =
                eval1ObtainedMarks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval1Criterias3.map((evl) => {
              eval1ObtainedMarks3 =
                eval1ObtainedMarks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval2Criterias1.map((evl) => {
              eval2ObtainedMarks1 =
                eval2ObtainedMarks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval2Criterias2.map((evl) => {
              eval2ObtainedMarks2 =
                eval2ObtainedMarks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval2Criterias3.map((evl) => {
              eval2ObtainedMarks3 =
                eval2ObtainedMarks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval3Criterias1.map((evl) => {
              eval3ObtainedMarks1 =
                eval3ObtainedMarks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval3Criterias2.map((evl) => {
              eval3ObtainedMarks2 =
                eval3ObtainedMarks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval3Criterias3.map((evl) => {
              eval3ObtainedMarks3 =
                eval3ObtainedMarks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval4Criterias1.map((evl) => {
              eval4ObtainedMarks1 =
                eval4ObtainedMarks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval4Criterias2.map((evl) => {
              eval4ObtainedMarks2 =
                eval4ObtainedMarks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            eval4Criterias3.map((evl) => {
              eval4ObtainedMarks3 =
                eval4ObtainedMarks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            this.setState({
              eval1ObtainedMarks1,
              eval2ObtainedMarks1,
              eval3ObtainedMarks1,
              eval4ObtainedMarks1,
              eval1ObtainedMarks2,
              eval2ObtainedMarks2,
              eval3ObtainedMarks2,
              eval4ObtainedMarks2,
              eval1ObtainedMarks3,
              eval2ObtainedMarks3,
              eval3ObtainedMarks3,
              eval4ObtainedMarks3,
              eval1ObtainedPerc1: eval1ObtainedMarks1 / 510,
              eval2ObtainedPerc1: eval2ObtainedMarks1 / 510,
              eval3ObtainedPerc1: eval3ObtainedMarks1 / 510,
              eval4ObtainedPerc1: eval4ObtainedMarks1 / 270,
              eval1ObtainedPerc2: eval1ObtainedMarks2 / 510,
              eval2ObtainedPerc2: eval2ObtainedMarks2 / 510,
              eval3ObtainedPerc2: eval3ObtainedMarks2 / 510,
              eval4ObtainedPerc2: eval4ObtainedMarks2 / 270,
              eval1ObtainedPerc3: eval1ObtainedMarks3 / 510,
              eval2ObtainedPerc3: eval2ObtainedMarks3 / 510,
              eval3ObtainedPerc3: eval3ObtainedMarks3 / 510,
              eval4ObtainedPerc3: eval4ObtainedMarks3 / 270,
            });

            const p4m1 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "1" || crit.criteriaNo === "2") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const p4m2 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "1" || crit.criteriaNo === "2") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const p4m3 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "1" || crit.criteriaNo === "2") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll3)
            );
            const p5m1 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "9" ||
                  crit.criteriaNo === "3" ||
                  crit.criteriaNo === "17") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const p5m2 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "9" ||
                  crit.criteriaNo === "3" ||
                  crit.criteriaNo === "17") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const p5m3 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "9" ||
                  crit.criteriaNo === "3" ||
                  crit.criteriaNo === "17") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll3)
            );
            const p6m1 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "2" &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const p6m2 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "2" &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const p6m3 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "2" &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll3)
            );
            const p7m1 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "3" &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const p7m2 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "3" &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const p7m3 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "3" &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll3)
            );
            const p8m1 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "4" ||
                  crit.criteriaNo === "9" ||
                  crit.criteriaNo === "10" ||
                  crit.criteriaNo === "11" ||
                  crit.criteriaNo === "12") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const p8m2 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "4" ||
                  crit.criteriaNo === "9" ||
                  crit.criteriaNo === "10" ||
                  crit.criteriaNo === "11" ||
                  crit.criteriaNo === "12") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const p8m3 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "4" ||
                  crit.criteriaNo === "9" ||
                  crit.criteriaNo === "10" ||
                  crit.criteriaNo === "11" ||
                  crit.criteriaNo === "12") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll3)
            );
            const p9m1 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "5" ||
                  crit.criteriaNo === "6" ||
                  crit.criteriaNo === "7") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const p9m2 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "5" ||
                  crit.criteriaNo === "6" ||
                  crit.criteriaNo === "7") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const p9m3 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "5" ||
                  crit.criteriaNo === "6" ||
                  crit.criteriaNo === "7") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll3)
            );
            const p10m1 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "6" ||
                  crit.criteriaNo === "4" ||
                  crit.criteriaNo === "8") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const p10m2 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "6" ||
                  crit.criteriaNo === "4" ||
                  crit.criteriaNo === "8") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const p10m3 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "6" ||
                  crit.criteriaNo === "4" ||
                  crit.criteriaNo === "8") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll3)
            );
            const p11m1 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "7" ||
                  crit.criteriaNo === "13" ||
                  crit.criteriaNo === "14" ||
                  crit.criteriaNo === "15" ||
                  crit.criteriaNo === "16") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const p11m2 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "7" ||
                  crit.criteriaNo === "13" ||
                  crit.criteriaNo === "14" ||
                  crit.criteriaNo === "15" ||
                  crit.criteriaNo === "16") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const p11m3 = resp1.data.result.filter(
              (crit) =>
                (crit.criteriaNo === "7" ||
                  crit.criteriaNo === "13" ||
                  crit.criteriaNo === "14" ||
                  crit.criteriaNo === "15" ||
                  crit.criteriaNo === "16") &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll3)
            );
            const p12m1 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "8" &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll1)
            );
            const p12m2 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "8" &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll2)
            );
            const p12m3 = resp1.data.result.filter(
              (crit) =>
                crit.criteriaNo === "8" &&
                (crit.stdRollNo === "group" ||
                  crit.stdRollNo === resp.data.result[0].stdRoll3)
            );
            this.setState({
              p4m1,
              p4m2,
              p4m3,
              p5m1,
              p5m2,
              p5m3,
              p6m1,
              p6m2,
              p6m3,
              p7m1,
              p7m2,
              p7m3,
              p8m1,
              p8m2,
              p8m3,
              p9m1,
              p9m2,
              p9m3,
              p10m1,
              p10m2,
              p10m3,
              p11m1,
              p11m2,
              p11m3,
              p12m1,
              p12m2,
              p12m3,
            });
            let p4marks1 = 0;
            let p4marks2 = 0;
            let p4marks3 = 0;
            let p5marks1 = 0;
            let p5marks2 = 0;
            let p5marks3 = 0;
            let p6marks1 = 0;
            let p6marks2 = 0;
            let p6marks3 = 0;
            let p7marks1 = 0;
            let p7marks2 = 0;
            let p7marks3 = 0;
            let p8marks1 = 0;
            let p8marks2 = 0;
            let p8marks3 = 0;
            let p9marks1 = 0;
            let p9marks2 = 0;
            let p9marks3 = 0;
            let p10marks1 = 0;
            let p10marks2 = 0;
            let p10marks3 = 0;
            let p11marks1 = 0;
            let p11marks2 = 0;
            let p11marks3 = 0;
            let p12marks1 = 0;
            let p12marks2 = 0;
            let p12marks3 = 0;
            p4m1.map((evl) => {
              p4marks1 =
                p4marks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p4m2.map((evl) => {
              p4marks2 =
                p4marks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p4m3.map((evl) => {
              p4marks3 =
                p4marks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p5m1.map((evl) => {
              p5marks1 =
                p5marks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p5m2.map((evl) => {
              p5marks2 =
                p5marks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p5m3.map((evl) => {
              p5marks3 =
                p5marks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p6m1.map((evl) => {
              p6marks1 =
                p6marks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p6m2.map((evl) => {
              p6marks2 =
                p6marks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p6m3.map((evl) => {
              p6marks3 =
                p6marks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p7m1.map((evl) => {
              p7marks1 =
                p7marks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p7m2.map((evl) => {
              p7marks2 =
                p7marks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p7m3.map((evl) => {
              p7marks3 =
                p7marks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p8m1.map((evl) => {
              p8marks1 =
                p8marks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p8m2.map((evl) => {
              p8marks2 =
                p8marks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p8m3.map((evl) => {
              p8marks3 =
                p8marks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p9m1.map((evl) => {
              p9marks1 =
                p9marks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p9m2.map((evl) => {
              p9marks2 =
                p9marks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p9m3.map((evl) => {
              p9marks3 =
                p9marks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p10m1.map((evl) => {
              p10marks1 =
                p10marks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p10m2.map((evl) => {
              p10marks2 =
                p10marks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p10m3.map((evl) => {
              p10marks3 =
                p10marks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p11m1.map((evl) => {
              p11marks1 =
                p11marks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p11m2.map((evl) => {
              p11marks2 =
                p11marks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p11m3.map((evl) => {
              p11marks3 =
                p11marks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p12m1.map((evl) => {
              p12marks1 =
                p12marks1 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p12m2.map((evl) => {
              p12marks2 =
                p12marks2 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            p12m3.map((evl) => {
              p12marks3 =
                p12marks3 +
                Number(evl.marks1) +
                Number(evl.marks2) +
                Number(evl.marks3);
            });
            this.setState({
              p4perc1: (p4marks1 / 240) * 100,
              p4perc2: (p4marks2 / 240) * 100,
              p4perc3: (p4marks3 / 240) * 100,
              p5perc1: (p5marks1 / 330) * 100,
              p5perc2: (p5marks2 / 330) * 100,
              p5perc3: (p5marks3 / 330) * 100,
              p6perc1: (p6marks1 / 120) * 100,
              p6perc2: (p6marks2 / 120) * 100,
              p6perc3: (p6marks3 / 120) * 100,
              p7perc1: (p7marks1 / 120) * 100,
              p7perc2: (p7marks2 / 120) * 100,
              p7perc3: (p7marks3 / 120) * 100,
              p8perc1: (p8marks1 / 510) * 100,
              p8perc2: (p8marks2 / 510) * 100,
              p8perc3: (p8marks3 / 510) * 100,
              p9perc1: (p9marks1 / 360) * 100,
              p9perc2: (p9marks2 / 360) * 100,
              p9perc3: (p9marks3 / 360) * 100,
              p10perc1: (p10marks1 / 360) * 100,
              p10perc2: (p10marks2 / 360) * 100,
              p10perc3: (p10marks3 / 360) * 100,
              p11perc1: (p11marks1 / 480) * 100,
              p11perc2: (p11marks2 / 480) * 100,
              p11perc3: (p11marks3 / 480) * 100,
              p12perc1: (p12marks1 / 120) * 100,
              p12perc2: (p12marks2 / 120) * 100,
              p12perc3: (p12marks3 / 120) * 100,
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
              fontFamily: "Arial, sans-serif",
            }}
          >
            Result Details
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

          <h3
            className="main_heading2"
            style={{
              textTransform: "uppercase",
              fontSize: "30px",
              color: "#0b1442",
              fontFamily: "Arial, sans-serif",
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
          <h3
            className="main_heading2"
            style={{
              textTransform: "uppercase",
              fontSize: "30px",
              color: "#0b1442",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Member Details
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
              fontFamily: "Arial, sans-serif",
            }}
          >
            Marks
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
              <th>Name</th>
              <th>Marks</th>
            </tr>

            <tr>
              <td style={{ width: "50%", height: "50%" }}>
                Final Report (Out Of 10 Marks)
              </td>
              <td>{this.state.finalReport}</td>
            </tr>

            <tr>
              <td style={{ width: "50%", height: "50%" }}>
                Other Report (Out Of 10 Marks)
              </td>
              <td>{this.state.otherRepots}</td>
            </tr>
            <tr>
              <td style={{ width: "50%", height: "50%" }}>
                {" "}
                By Chairman (Out Of 20 Marks)
              </td>
              <td>{this.state.byChairman}</td>
            </tr>
          </table>
          <br></br>
          <br></br>
          <Tabs style={{ color: "#000" }}>
            <TabList
              style={{
                border: "1px solid #000",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Tab>Member 1</Tab>
              <Tab>Member 2</Tab>
              <Tab>Member 3 </Tab>
            </TabList>
            <TabPanel>
              <br></br>
              <br></br>

              <h3
                className="main_heading2"
                style={{
                  textTransform: "uppercase",
                  fontSize: "30px",
                  color: "#0b1442",
                  fontFamily: "Arial, sans-serif",
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
                    {(
                      this.state.weight1 * this.state.eval1ObtainedPerc1
                    ).toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <td>Evaluation 2 </td>
                  <td>{this.state.weight2}</td>
                  <td>
                    {(
                      this.state.weight2 * this.state.eval2ObtainedPerc1
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td> Evaluation 3</td>
                  <td>{this.state.weight3}</td>
                  <td>
                    {(
                      this.state.weight3 * this.state.eval3ObtainedPerc1
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td> Evaluation 4</td>
                  <td>{this.state.weight4}</td>
                  <td>
                    {(
                      this.state.weight4 * this.state.eval4ObtainedPerc1
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td> Total of all Evalouations</td>
                  <td>
                    {Number(this.state.weight1) +
                      Number(this.state.weight2) +
                      Number(this.state.weight3) +
                      Number(this.state.weight4)}
                  </td>
                  <td>
                    {(
                      Number(
                        (
                          this.state.weight1 * this.state.eval1ObtainedPerc1
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight2 * this.state.eval2ObtainedPerc1
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight3 * this.state.eval3ObtainedPerc1
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight4 * this.state.eval4ObtainedPerc1
                        ).toFixed(2)
                      )
                    ).toFixed(2)}
                  </td>
                </tr>
              </table>
              <br></br>
              <br></br>

              <table style={{ border: "1px solid black" }} className="detail">
            

                <tr>
                  <td>Total</td>
                  <td>
                    {" "}
                    {(
                      Number(
                        (
                          this.state.weight1 * this.state.eval1ObtainedPerc1
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight2 * this.state.eval2ObtainedPerc1
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight3 * this.state.eval3ObtainedPerc1
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight4 * this.state.eval4ObtainedPerc1
                        ).toFixed(2)
                      )+
                        Number(this.state.finalReport) +
                        Number(this.state.otherRepots) +
                        Number(this.state.byChairman)
                    ).toFixed(2)}
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
                  fontFamily: "Arial, sans-serif",
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
                  <td>PLO 4</td>
                  <td>{this.state.p4perc1.toFixed(2)}%</td>
                </tr>

                <tr>
                  <td>PLO 5 </td>
                  <td>{this.state.p5perc1.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td> PLO 6</td>
                  <td>{this.state.p6perc1.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 7</td>
                  <td>{this.state.p7perc1.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 8 </td>
                  <td>{this.state.p8perc1.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 9 </td>
                  <td>{this.state.p9perc1.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 10 </td>
                  <td>{this.state.p10perc1.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 11 </td>
                  <td>{this.state.p11perc1.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 12 </td>
                  <td>{this.state.p12perc1.toFixed(2)}%</td>
                </tr>
              </table>
            </TabPanel>

            <TabPanel>
              <br></br>
              <br></br>

              <h3
                className="main_heading2"
                style={{
                  textTransform: "uppercase",
                  fontSize: "30px",
                  color: "#0b1442",
                  fontFamily: "Arial, sans-serif",
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
                    {(
                      this.state.weight1 * this.state.eval1ObtainedPerc2
                    ).toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <td>Evaluation 2 </td>
                  <td>{this.state.weight2}</td>
                  <td>
                    {(
                      this.state.weight2 * this.state.eval2ObtainedPerc2
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td> Evaluation 3</td>
                  <td>{this.state.weight3}</td>
                  <td>
                    {(
                      this.state.weight3 * this.state.eval3ObtainedPerc2
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td> Evaluation 4</td>
                  <td>{this.state.weight4}</td>
                  <td>
                    {(
                      this.state.weight4 * this.state.eval4ObtainedPerc2
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td> Total of all Evalouations</td>
                  <td>
                    {Number(this.state.weight1) +
                      Number(this.state.weight2) +
                      Number(this.state.weight3) +
                      Number(this.state.weight4)}
                  </td>
                  <td>
                    {(
                      Number(
                        (
                          this.state.weight1 * this.state.eval1ObtainedPerc2
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight2 * this.state.eval2ObtainedPerc2
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight3 * this.state.eval3ObtainedPerc2
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight4 * this.state.eval4ObtainedPerc2
                        ).toFixed(2)
                      )
                    ).toFixed(2)}
                  </td>
                </tr>
              </table>
              <br></br>
              <br></br>

              <table style={{ border: "1px solid black" }} className="detail">

                <tr>
                  <td>Total</td>
                  <td>
                    {" "}
                    {(
                      Number(
                        (
                          this.state.weight1 * this.state.eval1ObtainedPerc2
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight2 * this.state.eval2ObtainedPerc2
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight3 * this.state.eval3ObtainedPerc2
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight4 * this.state.eval4ObtainedPerc2
                        ).toFixed(2)
                      )+
                      Number(this.state.finalReport) +
                      Number(this.state.otherRepots) +
                      Number(this.state.byChairman)
                    ).toFixed(2)}
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
                  fontFamily: "Arial, sans-serif",
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
                  <td>PLO 4</td>
                  <td>{this.state.p4perc2.toFixed(2)}%</td>
                </tr>

                <tr>
                  <td>PLO 5 </td>
                  <td>{this.state.p5perc2.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td> PLO 6</td>
                  <td>{this.state.p6perc2.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 7</td>
                  <td>{this.state.p7perc2.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 8 </td>
                  <td>{this.state.p8perc2.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 9 </td>
                  <td>{this.state.p9perc2.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 10 </td>
                  <td>{this.state.p10perc2.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 11 </td>
                  <td>{this.state.p11perc2.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 12 </td>
                  <td>{this.state.p12perc2.toFixed(2)}%</td>
                </tr>
              </table>
            </TabPanel>

            <TabPanel>
              <br></br>
              <br></br>

              <h3
                className="main_heading2"
                style={{
                  textTransform: "uppercase",
                  fontSize: "30px",
                  color: "#0b1442",
                  fontFamily: "Arial, sans-serif",
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
                    {(
                      this.state.weight1 * this.state.eval1ObtainedPerc3
                    ).toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <td>Evaluation 2 </td>
                  <td>{this.state.weight2}</td>
                  <td>
                    {(
                      this.state.weight2 * this.state.eval2ObtainedPerc3
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td> Evaluation 3</td>
                  <td>{this.state.weight3}</td>
                  <td>
                    {(
                      this.state.weight3 * this.state.eval3ObtainedPerc3
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td> Evaluation 4</td>
                  <td>{this.state.weight4}</td>
                  <td>
                    {(
                      this.state.weight4 * this.state.eval4ObtainedPerc3
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td> Total of all Evalouations</td>
                  <td>
                    {Number(this.state.weight1) +
                      Number(this.state.weight2) +
                      Number(this.state.weight3) +
                      Number(this.state.weight4)}
                  </td>
                  <td>
                    {
                      Number(
                        (
                          this.state.weight1 * this.state.eval1ObtainedPerc3
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight2 * this.state.eval2ObtainedPerc3
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight3 * this.state.eval3ObtainedPerc3
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight4 * this.state.eval4ObtainedPerc3
                        ).toFixed(2)
                      )
                    }
                  </td>
                </tr>
              </table>
              <br></br>
              <br></br>

              <table style={{ border: "1px solid black" }} className="detail">
                <tr>
                  <td>Total </td>
                  <td>
                    {" "}
                    {(
                      Number(
                        (
                          this.state.weight1 * this.state.eval1ObtainedPerc3
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight2 * this.state.eval2ObtainedPerc3
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight3 * this.state.eval3ObtainedPerc3
                        ).toFixed(2)
                      ) +
                      Number(
                        (
                          this.state.weight4 * this.state.eval4ObtainedPerc3
                        ).toFixed(2)
                      )+
                      Number(this.state.finalReport) +
                      Number(this.state.otherRepots) +
                      Number(this.state.byChairman)
                    ).toFixed(2) }
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
                  fontFamily: "Arial, sans-serif",
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
                  <td>PLO 4</td>
                  <td>{this.state.p4perc3.toFixed(2)}%</td>
                </tr>

                <tr>
                  <td>PLO 5 </td>
                  <td>{this.state.p5perc3.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td> PLO 6</td>
                  <td>{this.state.p6perc3.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 7</td>
                  <td>{this.state.p7perc3.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 8 </td>
                  <td>{this.state.p8perc3.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 9 </td>
                  <td>{this.state.p9perc3.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 10 </td>
                  <td>{this.state.p10perc3.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 11 </td>
                  <td>{this.state.p11perc3.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>PLO 12 </td>
                  <td>{this.state.p12perc3.toFixed(2)}%</td>
                </tr>
              </table>
            </TabPanel>
          </Tabs>
        </div>
        <div>
          {/* Individual Assesment */}
          <br></br>
        </div>

        <br></br>

        <Tabs style={{ color: "#000" }}>
          <TabList>
            {this.state.eval1Criterias.length ? <Tab>Evaluation 1</Tab> : null}
            {this.state.eval2Criterias.length ? (
              <Tab style={{ marginLeft: "20%" }}>Evaluation 2</Tab>
            ) : null}
            {this.state.eval3Criterias.length ? (
              <Tab style={{ marginLeft: "20%" }}>Evaluation 3</Tab>
            ) : null}
            {this.state.eval4Criterias.length ? (
              <Tab style={{ marginLeft: "20%" }}>Evaluation 4</Tab>
            ) : null}
          </TabList>
          {this.state.eval1Criterias.length ? (
            <TabPanel>
              <Evaluation1
                eval1Criterias={this.state.eval1Criterias}
                data={this.state.gradeData}
              />
            </TabPanel>
          ) : null}
          {this.state.eval2Criterias.length ? (
            <TabPanel>
              <Evaluation2
                eval1Criterias={this.state.eval2Criterias}
                data={this.state.gradeData}
              />
            </TabPanel>
          ) : null}
          {this.state.eval3Criterias.length ? (
            <TabPanel>
              <Evaluation3
                eval1Criterias={this.state.eval3Criterias}
                data={this.state.gradeData}
              />
            </TabPanel>
          ) : null}
          {this.state.eval4Criterias.length ? (
            <TabPanel>
              <Evaluation4
                eval1Criterias={this.state.eval4Criterias}
                data={this.state.gradeData}
              />
            </TabPanel>
          ) : null}
        </Tabs>
      </div>
    );
  }
}

export default Mid;
