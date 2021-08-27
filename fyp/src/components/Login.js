import React, { useState, useContext } from "react";
import axios from "axios";
import background from "./img.png";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./helpers/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import {reactLocalStorage} from 'reactjs-localstorage';
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    console.log(email, password);

    const data = { email: email, password: password };
    axios.post("http://localhost:3001/api/login", data).then((response) => {
      if (response.data.error) {
        toast(response.data.error, {
          position: "top-center",
          type: "error",
        });
      } else {
        console.log(response.data);
        if (response.data.token) {
          reactLocalStorage.setObject('accessToken',  response.data);

          setAuthState({
            email: response.data.email,
            id: response.data.id,
            status: true,
          });
          history.push("/profile/"+response.data.result[0].id);
        } else {
          toast(response.data.message, {
            position: "top-center",
            type: "error",
          });
        }
      }
    });
  };

  return (
    <div >
      <img src={background} alt="background" style={{width:"100%", height:"100vh"}}/>
      <ToastContainer />
      <div className="container" style={{opacity:"0.8", backgroundColor:"#fff"}}>

        <div class="form-group"  >
          <h1 id="Login">Log In</h1>
          <br></br>
          <label for="exampleInputEmail1" className="lab" style={{fontWeight:"bold",color:"#2b2b94",display:"flex", justifyContent:"left"}}>
            Email address
          </label>
          <br></br>
          <input
          style={{ width: "98%" ,
          border:"none",
          borderBottom:"1px solid #2b2b94",
          outline:"none"
        }}
         
         
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <br></br>
          
        <div class="form-group">
          <label for="exampleInputPassword1" className="lab" style={{fontWeight:"bold",color:"#2b2b94",display:"flex", justifyContent:"left"}}>
            Password
          </label>
         
          <br></br>
          <input
          style={{ width: "98%" ,
                border:"none",
               borderBottom:"1px solid #2b2b94" ,
               outline:"none"

              }}
            name="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <br></br>
        <button
          onClick={login}
          class="btn btn primary"
          type="submit"
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
          Login{" "}
        </button>

        <a href="/forgotpassword"> Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
