import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component{
     
    render(){
        var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() { 
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
       
        return(
//            
<div className="sidenav">
  <Link to="/Profile" href="Profile">Profile</Link>
  <a href="#services">Project</a>
  <Link to="/Upload" href="#clients">Upload Records</Link>
  <a href="#contact">Assignment</a>
  <a href="#contact">Grades</a>
  <Link to="/rubric" href="#rubric">Rubrics</Link> 
  
  <button className="dropdown-btn">Maintenance
    <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-container">
    <a href="#">Department</a>
    <a href="#">Supervisor</a>
    <a href="#">Project </a>
  </div>
  <Link to="/Logout" href="#logout">Logout</Link>
</div>
        )
    }
}
export default Sidebar;