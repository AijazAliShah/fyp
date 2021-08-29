import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useHistory } from "react-router-dom";
import "./Project.css";
// import React, { useState, useEffect } from "react";

function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

function Project() {
  // This use state was already defined in the code in video  so change according to our input fields i.e email etc
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  const [title, setTitle] = useState("");
  const [Internal, setInternal] = useState("");
  const [External, setExternal] = useState("");
  const [project, setProject] = useState({});
  let forceUpdate = useForceUpdate();
  let history = useHistory();

  // const [Full , setTitle] = useState('');
  // const [title, setTitle] = useState('');
  // const [title, setTitle] = useState('');
  let { id } = useParams();

  const getData = async () => {
    await axios
      .get("http://localhost:3001/api/project/one/" + id)
      .then((response) => {
        console.log(response.data.result);
        setProject(response.data.result[0]);
      });
  };
  useEffect(async () => {
    await getData();
  }, []);

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
  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  const editData = (type, ind, data) => {
    console.log(type, ind, data);

    if (type === "title") {
      const temp = project;
      temp.project.title = data;
      setProject(temp);
    } else if (type === "internal") {
      const temp = project;
      temp.project.internal = data;
      setProject(temp);
    } else if (type === "external") {
      const temp = project;
      temp.project.external = data;
      setProject(temp);
    } else if (type === "batch") {
      const temp = project;
      temp.project.batch = data;
      setProject(temp);
    } else if (type === "fullName") {
      const temp = project;
      temp.stds.result[ind].fullName = data;
      setProject(temp);
    } else if (type === "rollNo") {
      const temp = project;
      temp.stds.result[ind].rollNo = data;
      setProject(temp);
    } else if (type === "email") {
      const temp = project;
      temp.stds.result[ind].email = data;
      setProject(temp);
    }
    forceUpdate()
    console.log("project");
    console.log(project);
  };
  const addProject = () => {
    console.log(inputList);
    console.log(title);
    console.log(Internal);
    console.log(External);

    axios
      .post("http://localhost:3001/api/project/edit/"+project.project.project_id, {
        title: project.project.title,
        internal: project.project.internal,
        external: project.project.external,
        batch: project.project.batch,
      })
      .then(async (resp) => {
        console.log(resp.data);
        for (let i = 0; i < project.stds.result.length; i++) {
          await axios
            .post("http://localhost:3001/api/projectStd/edit/"+project.stds.result[i].id, {
              fullName: project.stds.result[i].fullName,
              rollNo: project.stds.result[i].rollNo,
              email: project.stds.result[i].email,
            })
            .then(async (resp1) => {
              if (i === project.stds.result.length - 1) {
                await toast("Project updated successsfully!", {
                  position: "top-center",
                  type: "success",
                });
                history.push('/assignment')
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  return !isEmpty(project) ? (
    <div className="prj_div">
      <ToastContainer />
      <div className="container1">
        <h1 id="prj_heading">EDIT GROUP DETAILS</h1>

        <table>
          <tr>
            <td>
              <label>Project Title</label>
              <input
                type="text"
                name="projectTitle"
                placeholder="Title"
                className="prj_inp"
                required
                autoFocus
                // className="form-control"
                value={project.project.title}
                onChange={(e) => editData("title", 0, e.target.value)}
              />
            </td>
            <td>
              <label>Internal Supervisor</label>

              <input
                type="text"
                name="internal"
                placeholder="Internal Supervisor"
                className="prj_inp"
                required
                value={project.project.internal}
                onChange={(e) => editData("internal", 0, e.target.value)}
              />
            </td>
            <td>
              <label>External Supervisor</label>

              <input
                type="text"
                name="external"
                placeholder="External Supervisor"
                className="prj_inp"
                required
                value={project.project.external}
                onChange={(e) => editData("external", 0, e.target.value)}
              />
            </td>

            <td>
              <label>Batch</label>

              <input
                type="text"
                name="batch"
                placeholder="Batch"
                className="prj_inp"
                required
                value={project.project.batch}
                onChange={(e) => editData("batch", 0, e.target.value)}
              />
            </td>
          </tr>
        </table>

        {/* Logic for Dynamically Add input field */}

        {project.stds.result.map((x, i) => {
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
                      value={x.fullName}
                      onChange={(e) => editData("fullName", i, e.target.value)}
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
                      value={x.rollNo}
                      onChange={(e) => editData("rollNo", i, e.target.value)}
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
                      onChange={(e) => editData("email", i, e.target.value)}
                    />
                  </td>
                </tr>
              </table>
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
          }}
          onClick={() => addProject()}
        >
          Save
        </button>
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
      </div>
    </div>
  ) : null;
}

export default Project;
