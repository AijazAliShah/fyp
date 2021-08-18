import React from "react";
import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { OutTable, ExcelRenderer } from "react-excel-renderer";
import "./Upload.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { reactLocalStorage } from "reactjs-localstorage";
import fire from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-tabs/style/react-tabs.css";
import axios from "axios";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: "",
      cols: "",
      isStd: {},
      fileName: "FYPProposal",
      supEmail: "",
      title: "",
    };
  }

  async componentDidMount() {
    const isStd = await reactLocalStorage.getObject("accessToken");
    console.log("isStd");
    console.log(isStd);
    await this.setState({ isStd });
  }

  isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }
  submitData() {
    if (this.state.isStd.result[0].type === "coordinator") {
      var file = this.state.doc;
      var fullname = this.state.fileName;
      var ext = this.state.doc.name.split(".")[1];

      console.log(file, "file", fullname, ext);

      var storageRef = fire.storage().ref(`doc/${fullname}.${ext}`);
      storageRef.put(this.state.doc).then((snapshot) => {
        console.log("Uploaded a file!");

        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          toast("Document uploaded successsfully!", {
            position: "top-center",
            type: "success",
          });
        });
      });
    } else if (this.state.isStd.result[0].type === "student") {
      axios
        .post("http://localhost:3001/api/progress", {
          supEmail: this.state.supEmail,
          title: this.state.title,
        })
        .then((resp) => {
          console.log(resp.data.result.insertId);
          var file = this.state.doc;
          var fullname = "progress_";
          var id = resp.data.result.insertId;
          var ext = this.state.doc.name.split(".")[1];

          console.log(file, "file", fullname, ext);

          var storageRef = fire
            .storage()
            .ref(`progress/${fullname}${id}.${ext}`);
          storageRef.put(this.state.doc).then((snapshot) => {
            console.log("Uploaded a file!");

            snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log("File available at", downloadURL);
              axios
                .post("http://localhost:3001/api/progress/edit/" + id, {
                  reportUrl: downloadURL,
                })
                .then((resp1) => {
                  toast("Document uploaded successsfully!", {
                    position: "top-center",
                    type: "success",
                  });
                })
                .catch((err) => console.log(err));
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    console.log(this.state);
    return !this.isEmpty(this.state.isStd) ? (
      <div>
        <ToastContainer />
        <div class="container" enctype="multipart/form-data">
          <div class="form-group">
            <h1 id="upload">Upload File here</h1>
            {this.state.isStd.result[0].type === "student" ? (
              <>
                <label className="lab">Project Name: </label>
                {/* <ErrorMessage className="error" name="email" component="span" /> */}
                <br></br>
                <input
                  style={{ width: "98%" }}
                  autocomplete="off"
                  id="inputCreatePost"
                  name="title"
                  type="text"
                  placeholder="Enter Project Name"
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
                <br></br>
                <br></br>
                <label className="lab">Supervisor Email: </label>
                {/* <ErrorMessage className="error" name="email" component="span" /> */}
                <input
                  style={{ width: "98%" }}
                  autocomplete="off"
                  id="inputCreatePost"
                  name="supEmail"
                  type="email"
                  placeholder="Enter supervisor Email"
                  onChange={(e) => this.setState({ supEmail: e.target.value })}
                />
                <br></br>
                <br></br>
              </>
            ) : null}
            {this.state.isStd.result[0].type === "coordinator" ? (
              <select
                name="cars"
                id="cars"
                style={{ width: "98%" }}
                onChange={(e) => this.setState({ fileName: e.target.value })}
              >
                <option value="FYPProposal">FYP Proposal </option>
                <option value="FYPProgressReport">FYP Progress Report</option>
                <option value="FYPProgressTracker">FYP Progress Tracker</option>
              </select>
            ) : null}

            <br></br>
            <br></br>
            <hr></hr>
            {/* <label for="exampleFormControlFile1" id="upload">Upload File</label> */}
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
              onChange={(e) => this.setState({ doc: e.target.files[0] })}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            id="prj_submit"
            onClick={() => this.submitData()}
          >
            Submit
          </button>
        </div>
      </div>
    ) : null;
  }
}
export default Upload;
