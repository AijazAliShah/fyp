import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Student.css";
import { AuthContext } from "./helpers/AuthContext";
import logo from "../images/images.png";
import background from "./img.png";
import { reactLocalStorage } from "reactjs-localstorage";


//import { response } from 'express';

function Student() {
  let { id } = useParams();
  console.log("id")
  console.log(id)
  // let history = useHistory();

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const { setAuthState } = useContext(AuthContext);
  const isNav1 = reactLocalStorage.getObject("accessToken");
  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }
  useEffect(() => {
      console.log('jhhhh')
    axios.get(`http://localhost:3001/basicinfo/${id}`).then((response) => {
      //setName(response.data.name);
      // setEmail(response.data.email);
      console.log("response.data");
      console.log(response.data);
      setUser(response.data[0])
      if(isEmpty(isNav1)){
        window.location.href = '/'
      }
    });

  }, []);

  return (
    <div>
    <img src={background} alt="background" style={{width:"100%", height:"85vh"}}/>

    <div className="container emp-profile" style={{ height: "70%", marginTop:"4%" }}>

      <form method="post">
       
        <div className="row">
          <div className="col-md-8">
            <div
              class="card"
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                width: "100px",
                // margin: "auto",
                // borderRadius:"100%",
                height: "100px",
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
              <div className="row" style={{display:"flex",color:"#575757", flexDirection:"row", width:"250%",}}>
                <div className="col-md-6" style={{width:"150"}}><h3>Name:</h3></div>
                <div className="col-md-6" style={{width:"50%" , marginLeft:"50%"}}>  <h3>{user.name}</h3></div>
             
              </div>

              <br></br>
              <br></br>
              
              
              <div className="row" style={{display:"flex",color:"#575757", flexDirection:"row", width:"250%",}}>
              <div className="col-md-6" style={{width:"150"}}><h3>Email:</h3></div>
              <div className="col-md-6" style={{width:"50", marginLeft:"50%"}}>{user.email}</div>
              
              </div>
              <br></br>
              <br></br>
              
              <div className="row" style={{display:"flex",color:"#575757", flexDirection:"row", width:"250%",}}>
              <div className="col-md-6" style={{width:"150"}}><h3>Department:</h3></div>
              <div className="col-md-6" style={{width:"50" , marginLeft:"50%"}}><h3>{user.department}</h3></div>
              <p></p>
              </div>
              <br></br>
              <br></br>

              <p>
                <button
                  style={{
                    border: "none",
                    outline: "0",
                    display: "inline-block",
                    padding: "8px",
                    color: "white",
                    borderRadius:"2rem",
                    backgroundColor: "#575757",
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
    </div>
  );
}

export default Student;
