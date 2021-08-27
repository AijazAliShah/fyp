import React, { Component } from "react";

import Dept from "./Dept";
import Login from "./Login";
import "./Front_page.css";
import Profile from "./Student";
import Rubric from "./Rubric";
import Project from "./Project";
import Upload from "./Upload";
import Create_acc from "./Create_acc";
import Edit_profile from "./Edit_profile";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import View_List from "./View_List";
import Info from "./Info";
import Announcement from "./Announcement";
import Mid from "./Mid";
import Signup from "./Signup";
import FileUpload from "./FileUpload";
import Forgetpassword from "./Forgetpassword";
import Forgetpassemail from "./Forgetpassemail";
import ProgressReport from "./ProgressReport";
import Edit from "./Edit";
import Rubric2 from "./Rubric2";
import Rubric3 from "./Rubric3";
import Rubric4 from "./Rubric4";
import Result from "./Result";
import Detail from "./Detail";
import showGrades from "./showGrades";
import Evaluation1 from "./Evaluation1";
import Evaluation2 from "./Evaluation2";
import Evaluation3 from "./Evaluation3";
import Evaluation4 from "./Evaluation4";
import InsertMakrs from "./insertMakrs";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import PrivateRoute from "./services/PrivateRoute";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Front_page() {
  const [authState, setAuthState] = useState(false);
  const [isNav, setIsNav] = useState({})
  useEffect(() => {
    const isNav1 = reactLocalStorage.getObject("accessToken");
    setIsNav(isNav1)
    axios
      .get("http://localhost:3001/auth/auth", {
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

  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <Navbar />
        {/* <Navbar1 /> */}
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/">
          {!isEmpty(isNav) ?  <Redirect to={"/profile/"+isNav.result[0].id} /> : <Login />}
          
        </Route>
          <PrivateRoute
            authEd={isNav}
            exact
            path="/project"
            component={Project}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/profile/:id"
            component={Profile}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/upload"
            component={Upload}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/uploads"
            component={FileUpload}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/progressreport"
            component={ProgressReport}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/edit/:id"
            component={Edit}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/edit_profile"
            component={Edit_profile}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/edit_profile"
            component={Edit_profile}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/assignment"
            component={View_List}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/rubric"
            component={Mid}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/rubric1"
            component={Rubric}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/info"
            component={Info}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/announcement"
            component={Announcement}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/forgetpassword"
            component={Forgetpassword}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/changepassword"
            component={Dept}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/rubric2/:id/:evel"
            component={Rubric2}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/rubric3/:id/:evel"
            component={Rubric3}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/rubric4/:id/:evel"
            component={Rubric4}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/result/:id"
            component={Result}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/detail/:id"
            component={Detail}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/showGrades"
            component={showGrades}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/evaluation1"
            component={Evaluation1}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/evaluation2"
            component={Evaluation2}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/evaluation3"
            component={Evaluation3}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/evaluation4"
            component={Evaluation4}
          />
          <PrivateRoute
            authEd={isNav}
            exact
            path="/insertMakrs"
            component={InsertMakrs}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/signup1" component={Signup} />
          <Route path="/forgetpassemail/:email" component={Forgetpassemail} />




          {/* <Route path='/login'4exact component={Login}4/4
        <Route path='/Profile' exact component={Student} />
        <Route path='/Edit_profile' exact component={Edit_profile} />
        <Route path='/Create_acc' exact component={Create_acc} />
        <Route path='/change_pwd' exact component={Dept} />
        <Route path='/Upload' exact component={Upload} /> 
  */}
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}
export default Front_page;
