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
    const newData=data;
    newData.type = type;
    console.log(newData)

    let verifier = new Verifier("at_xJjIdD2OvobwDlluODyoaZMaY6vJu");
    try{
    verifier.verify(data.email, (err, data1) => {
      if (err) throw err;
      console.log(data1.smtpCheck);
      if (data1.smtpCheck === 'true') {
        axios.post("http://localhost:3001/api/register", newData).then((resp) => {
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
        toast("Email does not exist!", {
          position: "top-center",
          type: "error",
        });
      }
    
    });
  }catch(error){
    toast("Email does not exist!", {
      position: "top-center",
      type: "error",
    });
  }
  };
  return (
    <div>
      <img src={background} alt="background" style={{width:"100%", height:"100vh"}}/>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="container" style={{opacity:"0.8", backgroundColor:"#fff", height:"auto", marginTop:"5%"}}>
          <h1 id="signUp">          Create Account</h1>
          <br></br>
          <label className="lab" style={{fontWeight:"bold",color:"#2b2b94",display:"flex", justifyContent:"left"}} >Username: </label>
          <ErrorMessage className="error" name="name" component="span" />
          <br></br>
          <Field
            style={{ width: "98%" ,
            border:"none",
            borderBottom:"1px solid #2b2b94",
            outline:"none"

          }}
            autocomplete="off"
            id="inputCreatePost"
            name="name"
            type='text'
            placeholder="Enter your username"
          />
          <br></br>
          <br></br>
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
            type='email'
            placeholder="Enter your email"
          />
          <br></br>
          <br></br>
          <label className="lab" style={{fontWeight:"bold",color:"#2b2b94",display:"flex", justifyContent:"left"}}>Password: </label>
          <ErrorMessage className="error" name="password" component="span" />
          <br></br>
          <Field
            style={{ width: "98%",
            border:"none",
            borderBottom:"1px solid #2b2b94",
            outline:"none"

          }}
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Enter Your Password"
          />

          <br></br>
          <br></br>
          <label className="lab" style={{fontWeight:"bold",color:"#2b2b94",display:"flex", justifyContent:"left"}}>Dropdown: </label>
          <br></br>
         
          <select name="cars" id="cars" style={{width:"98%"}} onChange={(event) => setType(event.target.value)}>
            <option value="student">Student</option>
            <option value="supervisor">Supervisor</option>
            <option value="coordinator">coordinator</option>
          </select>
          <br></br>
          <br></br>
          {type === 'student' ? (
          <div>
            
          <Field
            style={{ width: "98%",
            border:"none",
            borderBottom:"1px solid #2b2b94",
            outline:"none"

          }}
            autocomplete="off"
            type="text"
            id="inputCreatePost"
            name="stdId"
            placeholder="Student ID"
          />
           <br></br>
          <br></br>
            <Field
            style={{ width: "98%",
            border:"none",
            borderBottom:"1px solid #2b2b94",
            outline:"none"

           }}
            autocomplete="off"
            type="text"
            id="inputCreatePost"
            name="department"
            placeholder="Department"
          />
          </div>): null}
          <br></br> <br></br>
          <button
            type="submit"
            class="btn btn primary"
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
          Create Account
          </button>
          {/* <a href="/">Login?</a> */}
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
