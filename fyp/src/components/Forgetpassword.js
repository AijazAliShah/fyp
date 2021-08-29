import React, {useState} from "react";
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
  const [type, setType] = useState('student');
  const [stdId, setStdId] = useState('');
  const [department, setDepartment] = useState('');

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
    console.log('data')
    console.log(data)

        const email = data.email;
        axios.get('http://localhost:3001/forgot/password/'+email)
        .then(resp => {
          toast("Email is sent to your email address!", {
            position: "top-center",
            type: "success",
          });
        })
        .catch(err => {
          toast("Something went wrong!", {
            position: "top-center",
            type: "error",
          });
        })
  };
  return (
    <div >
      <img src={background} alt="background" style={{width:"100%", height:"89vh"}}/>
      <ToastContainer />
      <div className="container" style={{opacity:"0.8", backgroundColor:"#fff"}}>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className="">
          <h1 id="signUp">Forgot Password</h1>
          <br></br>
         
         
         <div class="form-group">
          <label className="lab" style={{fontWeight:"bold",color:"#2b2b94",display:"flex", justifyContent:"left"}}>Email: </label>
          <br></br>

          <ErrorMessage className="error" name="email" component="span" />
          <Field
            style={{ width: "98%",
            border:"none",
            borderBottom:"1px solid #2b2b94",
            outline:"none"

           }}
           class="form-control"
            autocomplete="off"
            id="inputCreatePost"
            name="email"
            type='email'
            placeholder="Enter your email"
          />
          
         <br></br>
         <br></br>
         </div>
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
