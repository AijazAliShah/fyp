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
                <th>Project Title</th>
                <th>Project Id</th>
                <th>Batch</th>
                <th>Group Id</th>
                <th>Date</th>
                <th>Evaluation No</th>
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
                <td>
                abc
                </td>
                <td>
                  abc
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                 abc
                </td>
                <td>
                  abc
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                 abc
                </td>
                <td>
                  abc
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
                <td>abc</td>
                <td>
                 abc
                </td>
                <td>
                abc
                </td>
              </tr>

              <tr>
                <td>abc </td>
                <td>
                 abc
                </td>
                <td>
                abc
                </td>
              </tr>
              <tr>
                <td> abc</td>
                <td>
                 abc
                </td>
                <td>
                abc
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
              Marks Of Each Evaluator
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
                <th> Evaluator</th>
                <th>Name</th>
                <th>Group Position</th>
              </tr>

              <tr>
                <td>Evaluator 1</td>
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
                <td>
                abc
                </td>
              </tr>

              <tr>
                <td>Evaluator 2 </td>
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
                <td>
                abc
                </td>
              </tr>
              <tr>
                <td> Evaluator 3</td>
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
                <td>
                abc
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
                <th> Plo No</th>
                <th>Obtained Marks</th>
                <th>Total Marks</th>
              </tr>

              <tr>
                <td>Plo 4</td>
                <td>
                 abc
                </td>
                <td>
                abc
                </td>
                
              </tr>

              <tr>
                <td>Plo 5 </td>
                <td>
                 abc
                </td>
                <td>
                abc
                </td>
              </tr>
              <tr>
                <td> Plo 6</td>
                <td>
                 abc
                </td>
                <td>
                abc
                </td>
              </tr>
              <tr>
                <td>Plo 7</td>
                <td>
                 abc
                </td>
                <td>
                abc
                </td>
              </tr>
              <tr>
                <td>Plo 8 </td>
                <td>
                 abc
                </td>
                <td>
                abc
                </td>
              </tr>
              <tr>
                <td>Plo 9 </td>
                <td>
                 abc
                </td>
                <td>
                abc
                </td>
              </tr>
              <tr>
                <td>Plo 10 </td>
                <td>
                 abc
                </td>
                <td>
                abc
                </td>
              </tr>
              <tr>
                <td>Plo 11 </td>
                <td>
                 abc
                </td>
                <td>
                abc
                </td>
              </tr>
              <tr>
                <td>Plo 12 </td>
                <td>
                 abc
                </td>
                <td>
                abc
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
            Tabs
            </h3>
            <br></br>
            <Tabs style={{ color: "#000" }}>
        <TabList>
        
          <Tab>Evaluation 1</Tab>
          <Tab style={{  marginLeft:"20%"}}>Evaluation 2</Tab>
          <Tab style={{  marginLeft:"20%"}}>Evaluation 3</Tab>
          <Tab style={{  marginLeft:"20%"}}>Evaluation 4</Tab>
        </TabList>
        <TabPanel>
         <Evaluation1/>
        </TabPanel>
        <TabPanel>
        <Evaluation2/>

          
        </TabPanel>
        <TabPanel>
        <Evaluation3/>

          
        </TabPanel>
     
      
        <TabPanel >
        <Evaluation4/>

        </TabPanel>
      </Tabs>
          </div>
          <div>
            {/* Individual Assesment */}
            <br></br>

            
          </div>
         
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
