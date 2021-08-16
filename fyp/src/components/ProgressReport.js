import React, { Component } from 'react'
import Criteria_table from "./Criteria_table";

export class Mid extends Component {
    
   
    render() {
        
            
           
           
        return (
            <div id="c_table">
              
              <form > 
             
             
              <div id="eval_table">
              <h3 className="main_heading2" style={{textTransform:"uppercase",fontSize:"30px",color:"#0b1442",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Progress Report</h3>
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
               
               
             

             
              {/* <h3 style={{color:"black"}}>Criteria1</h3> */}
             
                  <br></br>
                  <button type="submit" class="btn btn-primary" id="marks_submit_btn">Download </button>
                  </form>
            </div>
        )
    }
}

export default Mid