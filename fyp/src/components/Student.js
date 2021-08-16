import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Student.css";
import { AuthContext } from "./helpers/AuthContext";
import logo from "../images/pic5.png";

//import { response } from 'express';

function Student() {
  let { id } = useParams();
  console.log("id")
  console.log(id)
  // let history = useHistory();

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const { setAuthState } = useContext(AuthContext);

  useEffect(() => {
      console.log('jhhhh')
    axios.get(`http://localhost:3001/basicinfo/${id}`).then((response) => {
      //setName(response.data.name);
      // setEmail(response.data.email);
      console.log("response.data");
      console.log(response.data);
      setUser(response.data[0])
    });
  }, []);

  return (
    <div className="container emp-profile" style={{ height: "70%" }}>
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            {/* <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            
                            </div>
                            
                        </div> */}
          </div>

        </div>
        <div className="row">
          <div className="col-md-8">
            <div
              class="card"
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                width: "300px",
                margin: "auto",
                height: "200px",
                textAlign: "center",
                fontFamily: "arial",
              }}
            >
              {/* <img src="#" alt="John" style={{width:"100%"}} /> */}
              <img
                src={logo}
                alt="pic5"
                style={{ height: "100%", width: "85%" }}
              />
              <br></br>
              <br></br>

              <h1>{user.name}</h1>
              <p class="title" atyle={{ color: "grey", fontSize: "18px" }}>
              {user.email}
              </p>
              <p>{user.department}</p>

              <p>
                <button
                  style={{
                    border: "none",
                    outline: "0",
                    display: "inline-block",
                    padding: "8px",
                    color: "white",
                    backgroundColor: "#000",
                    textAlign: "center",
                    cursor: "pointer",
                    width: "100%",
                    fontSize: "18px",
                  }}
                >
                  {user.stdId}
                </button>
              </p>
            </div>

            {/* <hr></hr>
                                        <div className="row">
                                            <div className="col-md-6">
                                                
                                                <label className="lab">User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>NED/1500/2017</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="lab">Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="lab">Email</label>
                                            </div>
                                            <div className="col-md-6">
                                            <p>{email}</p>
                                            </div>
                                        </div>
                                       
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="lab">Department</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>SE</p>
                                            </div>
                                        </div>
                                        <br></br> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Student;
