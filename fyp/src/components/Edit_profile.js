import React, { Component } from 'react'
import  "./Create_acc.css";
//import "./Edit_profile.css";

export class Edit_profile extends Component {
    render() {
        return (
            <div>
                <form className="container">
  
      <h1 id="signUp">Profile</h1>
      <br></br>
      <div class="row">
      <div class="col">
    <label for="exampleInputEmail1" className="lab">Email address</label>
    <input type="email" class="form-control-plaintext" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    
  </div>
  <div class="col">
    <label for="exampleInputPassword1"  className="lab">User ID</label>
    <input type="text" class="form-control-plaintext" id="exampleInputPassword1" placeholder="User ID"/>
  </div>
  </div>
  <br></br>
  <div class="form-group">
    <label for="exampleInputPassword1" className="lab">Department</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Department"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="lab">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  {/* <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Save Changes</button>
</form>
                
            </div>
        )
    }
}

export default Edit_profile;
