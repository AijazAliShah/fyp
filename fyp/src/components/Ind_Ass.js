import React from 'react'

function Ind_Ass() {
    return (
        <div>
             {/* Individual Assesment */}
             <br></br>
           <h3 className="main_heading2">Individual Assesment</h3>
                           
            <h3>Student Rool No</h3>               
        <table style={{border:"1px solid black"}} className="detail">
    
          <tr style={{textAlign:"center",textTransform:"uppercase",fontWeight:"bold",
           fontSize:"18px",border:"1px solid black"}}>
  
          <td>Criteria 1</td>
         <td>PLO</td>
         <td>Weighing Factor</td>
         <td style={{width:"40%"}}>Guidelines</td>
  
          </tr>
                    
           <tr>
           <td>How clearly has the student identified issues & explained project?</td>
           <td>PLO-4 Investigation</td>
           <td>1-10</td>
           <td rowSpan="5">How clearly student identifies and summarizes main issues and successfully explains 
          why/how they are problems or questions; and identifies embedded or implicit issues, addressing  
          their relationships   to each other?</td>
                    
          </tr>
      
          <tr style={{textAlign:"center",textTransform:"uppercase",fontWeight:"bold",
           fontSize:"18px",border:"1px solid black"}}>
        <td>Evaluator</td>
        <td>Factor Awarded</td>
        <td>Remarks</td>
      </tr>
      <tr>
        <td>1</td>
        <td>
          <select name="fact" id="fact">
          <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
           </select>
        </td>
        <td><textarea>Excellent</textarea></td>
      </tr>
      <tr>
        <td>2</td>
        <td> <select name="fact" id="fact">
        <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
           </select></td>
        <td><textarea>Excellent</textarea></td>
      </tr>
      <tr>
        <td>3</td>
        <td> <select name="fact" id="fact">
        <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
           </select></td>
        <td><textarea>Excellent</textarea></td>
      </tr>
   
          </table>
        </div>
    )
}

export default Ind_Ass