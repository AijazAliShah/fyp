import React, { Component } from 'react'
import Criteria_table from "./Criteria_table";

export class Mid extends Component {
    
   
    render() {
        
            
           
           
        return (
            <div id="c_table">
              
              <form > 
              <h1 style={{color:"black",color:"#0b1442",textAlign:"center",fontWeight:"bold",fontSize:"50PX"}}>OBE BASED FYP</h1>
              <table >
              <tr><td> <input type="text" placeholder="Project Title" className="mid_inp" required></input></td>
                  <td> <input type="text" placeholder="Project ID" className="mid_inp" required autofocus></input></td>
                  <td><input type="number" placeholder="Batch" className="mid_inp" required></input></td>
                  <td><input type="text" placeholder="Group ID" className="mid_inp" required></input></td>
                  <td><input type="date"className="mid_inp"></input></td>
                  <td><select name="eval_no" id="eval_no">
                      <option >Select Evaluation no</option>
                      <option selected>1st</option>
                      <option>2nd</option>
                      <option>3rd</option>
                      <option>4th</option>
                      </select></td>
                  </tr>
                  
              </table>
              <div id="eval_table">
              <h3 className="main_heading2" style={{textTransform:"uppercase",fontSize:"30px",color:"#0b1442",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Evaluator Details</h3>
          <br></br>
          <table style={{border:"1px solid black"}} className="detail">

              <tr style={{textAlign:"center",textTransform:"uppercase",fontWeight:"bold",
             fontSize:"16px",border:"1px solid black"}}>

               <th>No</th>
               <th>Name</th>
               <th>Designation</th>

              </tr>
               
               <tr>
                 <td>1</td>
                 <td>Umair</td>
                 <td>Developer</td>
                </tr>
              
              <tr>
               <td>2</td>
               <td>Ali</td>
               <td>Manager</td>
              
              </tr>

          </table>
                     <br></br>
                     <br></br>
                     </div>
                     <h3 className="main_heading2" style={{textTransform:"uppercase",fontSize:"30px",color:"#0b1442",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>GROUP ASSESSMENT</h3>
               <Criteria_table c_no="13" PLO="11"/>
               <Criteria_table c_no="14" PLO="11"/>
               <Criteria_table c_no="15" PLO="11"/> 
               <Criteria_table c_no="16" PLO="11"/> 
               <Criteria_table c_no="17" PLO="5"/> 
               
             

             
              {/* <h3 style={{color:"black"}}>Criteria1</h3> */}
             
                  <br></br>
                  <button type="submit" class="btn btn-primary" id="marks_submit_btn">Save and Next </button>
                  </form>
            </div>
        )
    }
}

export default Mid