import React, { Component } from 'react';

import Dept  from "./Dept";
import Login from "./Login";
import './Front_page.css';
import Profile from "./Student";
import Rubric from "./Rubric";
import Project  from "./Project";
import Upload from "./Upload";
import Create_acc from "./Create_acc";
import Edit_profile from "./Edit_profile";
import Navbar from "./Navbar";
import View_List from "./View_List";
import Info from "./Info";
import Announcement from "./Announcement";
import Mid from "./Mid";
import Signup from "./Signup";
import FileUpload from "./FileUpload";
import Forgetpassword from "./Forgetpassword";
import Forgetpassemail from "./Forgetpassemail";
import ProgressReport from "./ProgressReport";


import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';





function Front_page() {

    const [authState, setAuthState] = useState(false);

    useEffect(() => {axios.get("http://localhost:3001/auth/auth", {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          })
          .then((response) => {
            if (response.data.error) {
              setAuthState(false);
            } else {
              setAuthState(true);
            }
          });
      }, []);


  
return(
            
            
 <AuthContext.Provider value={{ authState, setAuthState }}>

<Router>
<Navbar />
{/* <Sidebar /> */}
<Switch>
   <Route exact path='/' component={Login} />
  <Route path='/project' exact component={Project} />
  <Route path='/profile/:id' component={Profile} />
  <Route path='/upload' component={Upload} />
  <Route path='/signup' component={Signup} />
  <Route path='/signup1' component={Signup} />
  <Route path='/uploads' component={FileUpload} />
  <Route path='/forgetpassword' component={Forgetpassword} />
  <Route path='/forgetpassemail/:email' component={Forgetpassemail} />
  <Route path='/progressreport' component={ProgressReport} />


  <Route path='/edit_profile' component={Edit_profile} />
  <Route path='/assignment' component={View_List} />
  <Route path='/rubric' component={Mid} />
  <Route path='/rubric1' component={Rubric} />
  <Route path='/info' component={Info} />
  <Route path='/announcement' component={Announcement} />
  <Route path='/changepassword' component={Dept} />
  


  
  {/* <Route path='/login' exact component={Login} />
        <Route path='/Profile' exact component={Student} />
        <Route path='/Edit_profile' exact component={Edit_profile} />
        <Route path='/Create_acc' exact component={Create_acc} />
        <Route path='/change_pwd' exact component={Dept} />
        <Route path='/Upload' exact component={Upload} /> */}
</Switch>
</Router>
</AuthContext.Provider>

           
            
        );
    
}
export default Front_page;