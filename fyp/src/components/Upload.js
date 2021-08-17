import React from "react";
import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { OutTable, ExcelRenderer } from "react-excel-renderer";
import "./Upload.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { reactLocalStorage } from "reactjs-localstorage";
import fire from "./firebase";
import "react-tabs/style/react-tabs.css";
const isStd = reactLocalStorage.getObject("accessToken");
console.log("isStd");
console.log(isStd);

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: "",
      cols: "",
    };
  }

  // fileHandler = (event) => {
  //     let fileObj = event.target.files[0];
  //     //just pass the fileObj as parameter
  //     ExcelRenderer(fileObj, (err, resp) => {
  //       if(err){
  //         console.log(err);
  //       }
  //       else{
  //         this.setState({
  //           cols: resp.cols,
  //           rows: resp.rows
  //         });
  //       }
  //     });
  //   }
  render() {
    console.log(this.state);
    return (
      //       <section>
      //   <div className="form-container1">
      //       <h1 className="upload"> Upload Project List</h1>
      //       <form>
      //           <div className="control">

      //           <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />

      //              {/* <span><input type="checkbox" /> Remember Me </span> */}
      //              <div className ="control">
      //            <input type="submit" value="Done" />
      //            {/* <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" /> */}
      //             </div>
      //           </div>

      //       </form>

      //  </div>
      // </section>
      <div>
        {/* <form class="container" enctype="multipart/form-data"> */}
          <div class="form-group">
            <h1 id="upload">Upload File here</h1>
            <label className="lab">Email: </label>
            {/* <ErrorMessage className="error" name="email" component="span" /> */}
            <br></br>
            <input
              style={{ width: "98%" }}
              autocomplete="off"
              id="inputCreatePost"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <br></br>
            <br></br>
            <label className="lab">Email: </label>
            {/* <ErrorMessage className="error" name="email" component="span" /> */}
            <input
              style={{ width: "98%" }}
              autocomplete="off"
              id="inputCreatePost"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <br></br>
            <br></br>

            {isStd.result[0].type !== "student" ? (
              <select name="cars" id="cars" style={{ width: "98%" }}>
                <option value="student">FYP Proposal </option>
                <option value="supervisor">FYP Progress Report</option>
                <option value="coordinator">FYP Progress Tracker</option>
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
            onClick={() => {
              // storage
              //   .ref(`/images/aijaz`)
              //   .put(this.state.doc)
              //   .on("state_changed", alert("success"), alert);
              var storageRef = fire
                .storage()
                .ref("website_docsassets/abc");
              storageRef.put(this.state.doc).then((snapshot) => {
                console.log("Uploaded a file!");

                snapshot.ref.getDownloadURL().then((downloadURL) => {
                  console.log("File available at", downloadURL);
                  // this.setState({ imagePreviewUrl: downloadURL })
                  // onGetUrl(downloadURL);
                  // window.location.reload();
                });
              });
            }}
          >
            Submit
          </button>
        {/* </form> */}
      </div>
    );
  }
}
export default Upload;
