import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import emailExistence from "email-existence";
import { emailheck } from "email-check";
import background from "./img.png";


import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
const Verifier = require("email-verifier");

function Registration() {
  const [type, setType] = useState("student");
  const [stdId, setStdId] = useState("");
  const [department, setDepartment] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  let history = useHistory();
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(15).required(),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    console.log(data);
    const newData = data;
    if (newData.password === newData.ccpassword) {
      axios
        .post("http://localhost:3001/api/reset/password", newData)
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.auth) {
            toast('Password successfully changed', {
              position: "top-center",
              type: "success",
            });
          } else {
            toast(resp.data.message, {
              position: "top-center",
              type: "error",
            });
          }
        });
    } else {
      toast("Password does not match!", {
        position: "top-center",
        type: "error",
      });
    }
  };

  return (
    <div style={{ backgroundColor:"#fff"}}>
      <img src={background} alt="background" style={{width:"100%", height:"89vh"}}/>

      <ToastContainer />
      <div className="container" style={{opacity:"0.8", backgroundColor:"#fff" , marginTop:"2%"}}>

      <Formik initialValues={initialValues} onSubmit={onSubmit} >
        <Form className="" >
          <h1 id="signUp">Change Password</h1>

          <label className="lab" style={{fontWeight:"bold",color:"#2b2b94",display:"flex", justifyContent:"left"}}>Email: </label>
          <ErrorMessage className="error" name="email" component="span" />
          <br></br>
          <Field
            style={{ width: "98%",
            border:"none",
            borderBottom:"1px solid #2b2b94",
            outline:"none"

          }}
            autocomplete="off"
            id="inputCreatePost"
            name="email"
            type="email"
            placeholder="Enter your email"
          />

          <br></br>
          <br></br>

          <label className="lab" style={{fontWeight:"bold",color:"#2b2b94",display:"flex", justifyContent:"left"}}>Current Password: </label>
          <ErrorMessage className="error" name="password" component="span" />
          <br></br>
          <Field
            style={{ width: "98%",
            border:"none",
            borderBottom:"1px solid #2b2b94",
            outline:"none"

          }}
            autocomplete="off"
            id="inputCreatePost"
            name="cpassword"
            type="password"
            placeholder="Current Password"
          />

          <br></br>
          <br></br>

          <label className="lab" style={{fontWeight:"bold",color:"#2b2b94",display:"flex", justifyContent:"left"}}>New Password: </label>
          <ErrorMessage className="error" name="password" component="span" />
          <br></br>
          <Field
            style={{ width: "98%",
            border:"none",
            borderBottom:"1px solid #2b2b94",
            outline:"none"

          }}
            autocomplete="off"
            id="inputCreatePost"
            name="password"
            type="password"
            placeholder="New Password"
          />

          <br></br>
          <br></br>

          <label className="lab" style={{fontWeight:"bold",color:"#2b2b94",display:"flex", justifyContent:"left"}}>Re-Enter New Password: </label>
          <ErrorMessage className="error" name="password" component="span" />
          <br></br>
          <Field
            style={{ width: "98%",
            border:"none",
            borderBottom:"1px solid #2b2b94",
            outline:"none"

          }}
            autocomplete="off"
            id="inputCreatePost"
            name="ccpassword"
            type="password"
            placeholder="Re-Enter New Password"
          />
          <br></br>
          <br></br>
          <button
            type="submit"
            className="btn btn primary"
            style={{
              padding: "14px 40px",
              width: "100%",
              backgroundColor: "rgb(43, 43, 148)",
              border: "none",
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {" "}
            Send
          </button>
        </Form>
      </Formik>
      </div>
    </div>
  );
}

export default Registration;
