import React, { Component } from "react";
import axios from "axios";

export class Mid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/progress")
      .then((resp) => {
          console.log(resp.data)
        this.setState({ reports: resp.data.result });
      })
      .catch((err) => console.log(err));
  }
  render() {
      console.log(this.state)
    return (
      <div id="c_table">
        <div>
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
              Progress Report
            </h3>
            <br></br>
            <table style={{ border: "1px solid black" }} className="detail">
              <>
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
                  <th>Project Name</th>
                  <th>Supervisor Email</th>
                  <th>Report</th>
                </tr>
                {this.state.reports.map((rep) => (
                  <tr>
                    <td>{rep.id}</td>
                    <td>{rep.Title}</td>
                    <td>{rep.supEmail}</td>
                    <td style={{display:"flex", justifyContent:"center"}}>
                        <a target='_blank' href={rep.reportUrl}>
                      <button
                      
                        type="submit"
                        class="btn btn-primary"
                        id="marks_submit_btn"
                      >
                        Download{" "}
                      </button>
                      </a>
                    </td>
                  </tr>
                ))}
              </>
            </table>
            <br></br>
            <br></br>
          </div>

          {/* <h3 style={{color:"black"}}>Criteria1</h3> */}

          <br></br>
        </div>
      </div>
    );
  }
}

export default Mid;
