//Not for use
import React, { Component } from 'react'
import {AdminMenu} from "./Admin_Menu";
import {Link} from 'react-router-dom';
//import './test1.css';

class AdminBar extends Component{
     
    render(){
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }     
        return(
//             <div className="topnav" id="myTopnav">
//   <a href="#home" className="active">Profile</a>
//   <a href="#news">Create</a>
//   <a href="#contact">Delete</a>
//   <a href="#about">Data View</a>
//   <a href="javascript:void(0);" className="icon" onclick="myFunction()">
//     <i className="fa fa-bars"></i>
//   </a>
// </div>


<div className="topnav" id="myTopnav">
  <a href="#home" className="active1">Profile</a>
  {/* <a href="#news">View</a> */}
  <a href="#contact">Update</a>
  <div className="dropdown">
    <button className="dropbtn">Create
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Department</a>
      <a href="#">Student</a>
      <a href="#">Project Title</a>
    </div>
  </div>
  {/* <a href="#about">About</a> */}
  <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a>
</div>
        )
    }
}
export default AdminBar;
