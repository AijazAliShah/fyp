import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import emailExistence from "email-existence";
import { emailheck } from "email-check";

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
  let { email } = useParams();
  console.log(email)
  
  console.log(Buffer.from(email, 'base64').toString('ascii'))
  const onSubmit = (data) => {
      console.log(data)
    const newData = data;
    newData.email = Buffer.from(email, 'base64').toString('ascii');
    if (newData.password === newData.cpassword) {
      axios.post("http://localhost:3001/api/change/password", newData).then((resp) => {
        console.log(resp.data);
        if (resp.data.auth) {
          history.push("/");
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
    <div>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className="container">
          <h1 id="signUp">Forget Password</h1>

          <label className="lab">New Password: </label>
          <ErrorMessage
            className="error"
            name="New Password"
            component="span"
          />
          <br></br>
          <Field
            style={{ width: "98%" }}
            autocomplete="off"
            id="inputCreatePost"
            name="password"
            type="Password"
            placeholder="New Password"
          />

          <br></br>
          <br></br>
          <label className="lab">Confirm Password: </label>
          <ErrorMessage
            className="error"
            name="Confirm Password"
            component="span"
          />
          <br></br>
          <Field
            style={{ width: "98%" }}
            autocomplete="off"
            id="inputCreatePost"
            name="cpassword"
            type="Password"
            placeholder="Confirm Password"
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
            Confirm
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
