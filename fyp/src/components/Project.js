import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import background from "./img.png";

import "./Project.css";
// import React, { useState, useEffect } from "react";
function Project() {
  // This use state was already defined in the code in video  so change according to our input fields i.e email etc
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  const [title, setTitle] = useState("");
  const [Internal, setInternal] = useState("");
  const [External, setExternal] = useState("");
  const [batch, setBatch] = useState("");
  // const [Full , setTitle] = useState('');
  // const [title, setTitle] = useState('');
  // const [title, setTitle] = useState('');

  // handle input change
  const handleInputChange = (e, index) => {
    // console.log("data");

    // console.log(data);
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  const addProject = () => {
    console.log(inputList);
    console.log(title);
    console.log(Internal);
    console.log(External);

    axios
      .post("http://localhost:3001/api/project", {
        title,
        batch,
        internal: Internal,
        external: External,
      })
      .then(async (resp) => {
        console.log(resp.data);
        for (let i = 0; i < inputList.length; i++) {
          axios
            .post("http://localhost:3001/api/projectStd", {
              fullName: inputList[i].firstName,
              rollNo: inputList[i].roll_no,
              email: inputList[i].email,
              project_id: resp.data.result.insertId,
            })
            .then(async (resp1) => {
              if (i === inputList.length - 1) {
                await toast("Project Created successsfully!", {
                  position: "top-center",
                  type: "success",
                });
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <img src={background} alt="background" style={{ width: "100%", height: "89vh" }} />

      <div className="prj_div">

        <ToastContainer />
        <div className="container1" style={{ opacity: "0.8", backgroundColor: "#fff" }}>
          <h1 id="prj_heading">FYP GROUP DETAILS</h1>

          <table>
            <tr>
              <td>
                <label>Project Title:</label>
                <input
                  type="text"
                  name="projectTitle"
                  placeholder="Title"
                  className="prj_inp"
                  required
                  autoFocus
                  // className="form-control"
                  // value={x.projectTitle}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
              <td>
                <label>Internal Supervisor:</label>

                <input
                  type="text"
                  name="internal"
                  placeholder="Internal Supervisor"
                  className="prj_inp"
                  required
                  // value={x.internal}
                  onChange={(e) => setInternal(e.target.value)}
                />
              </td>
              <td>
                <label>External Supervisor:</label>

                <input
                  type="text"
                  name="external"
                  placeholder="External Supervisor"
                  className="prj_inp"
                  required
                  // value={x.external}
                  onChange={(e) => setExternal(e.target.value)}
                />
              </td>
              <td>
                <label>Batch:</label>

                <input
                  type="text"
                  name="batch"
                  placeholder="Batch"
                  className="prj_inp"
                  required
                  // value={x.external}
                  onChange={(e) => setBatch(e.target.value)}
                />
              </td>
            </tr>
          </table>

          {/* Logic for Dynamically Add input field */}

          {inputList.map((x, i) => {
            return (
              <div className="box">
                <table>
                  <tr>
                    <td>
                      <label>Full Name: </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Full Name"
                        className="prj_inp"
                        required
                        value={x.firstName}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </td>
                    <td>
                      <label>Roll No: </label>
                      <input
                        type="text"
                        name="roll_no"
                        placeholder="Roll No"
                        className="prj_inp"
                        // style={{ width: "22%" }}
                        required
                        value={x.rollno}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </td>
                    <td>
                      <label>Email: </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="prj_inp"
                        style={{ textTransform: "lowercase" }}
                        required
                        value={x.email}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </td>
                    <td style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
                      {inputList.length !== 1 && (
                        <button
                          className="add_rem_btn"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "grey",
                            fontSize: "40px",
                            fontWeight: "bold",
                            marginTop: "15px"
                          }}
                          onClick={() => handleRemoveClick(i)}
                        >
                          -
                        </button>
                      )}

                      {inputList.length - 1 === i && (
                        <button
                          className="add_rem_btn"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "grey",
                            fontSize: "30px",
                            fontWeight: "bold",
                            marginTop: "25px",
                            marginLeft: "10px",
                          }}
                          onClick={handleAddClick}
                        >
                          +
                        </button>
                      )}
                    </td>
                  </tr>
                </table>
                {/* Add and Remove button dynamically */}


              </div>
            );
          })}
          <br></br>
          <button
            type="submit"
            class="btn btn-primary"
            style={{
              width: "100%",
              display: "block",
              fontSize: "20px",
              border: "none",
              backgroundColor: "rgb(43, 43, 148)",
              color: "#fff"
            }}
            onClick={() => addProject()}
          >
            Insert
          </button>
          {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
