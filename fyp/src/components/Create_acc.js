import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Login.css";

function Create_acc() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(15).required(),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // onSubmit={onSubmit}
        onSubmit={async (values) => {
          onSubmit(values);
          // await new Promise((resolve) => setTimeout(resolve, 500));
          // alert(JSON.stringify(values, null, 2));
        }}
        // validationSchema={validationSchema}
      >
        <Form>
          <div class="form-group">
            <h1 id="signUp">Sign Up</h1>
            <br></br>

            <label for="exampleInputEmail1" className="lab">
              Username
            </label>
            <Field
              name="name"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter username"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" className="lab">
              Email address
            </label>
            <Field
              name="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" className="lab">
              Password
            </label>
            <Field
              name="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>

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
            Sign Up
          </button>
          <a href="/logout">Login?</a>
        </Form>
      </Formik>
      {/* <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="container">
         
        </Form>
      </Formik> */}
    </div>
  );
}

export default Create_acc;
