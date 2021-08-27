import React, { Component } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import "./Project.css";


export class Mid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
    };
  }

  componentDidMount() {
    const isNav = reactLocalStorage.getObject("accessToken");
    console.log("isnva");
    console.log(isNav);

    axios
      .get("http://localhost:3001/api/progress")
      .then((resp) => {
        console.log(resp.data, isNav.result[0].email);
        const temp = resp.data.result.filter(
          (data) => data.supEmail === isNav.result[0].email
        );
        this.setState({ reports: temp });
      })
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
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
                    padding:"20px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: "16px",
                    border: "1px solid black",
                  }}
                >
                  <th  style={{
                    padding:"10px"
                  }}>User Name</th>
                  <th  style={{
                    padding:"10px"
                  }}>User Email</th>
                  <th  style={{
                    padding:"10px"
                  }}>Project Name</th>
                  <th  style={{
                    padding:"10px"
                  }}>Date</th>
                  <th  style={{
                    padding:"10px"
                  }}>Report</th>
                </tr>
                {this.state.reports.map((rep) => (
                  <tr>
                    <td>{rep.userName}</td>
                    <td>{rep.userEmail}</td>
                    <td>{rep.Title}</td>
                    <td>{rep.date.substring(8, 10) +
                    " " +
                    monthNames[Number(rep.date.substring(5, 7)) - 1] +
                    " " +
                    rep.date.substring(0, 4)}</td>
                
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <a target="_blank" href={rep.reportUrl}>
                        <button
                          type="submit"
                          class="btn btn-primary"
                    style={{border: '1px solid blue',}}

                          // id="marks_submit_btn"
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
