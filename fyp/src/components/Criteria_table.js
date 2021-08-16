import React from 'react'
import "./Mid.css";
function Criteria_table(props) {
    
     
    function handleSubmit() {
       // e.preventDefault();
        let eval1 =document.getElementById('eval1'+ props.c_no);
        let  eval2 = document.getElementById('eval2'+ props.c_no);
        let  eval3 = document.getElementById('eval3'+ props.c_no);
       let  total_sum = document.getElementById('criteria'+ props.c_no);
       let total= parseInt(eval1.value)+parseInt(eval2.value)+parseInt(eval3.value);
       total_sum.value=total;
       
       console.log(props.c_no,props.PLO);
    //    alert('hi');

   }
    return (
        <div id="c_table">
             <table style={{border:"none",padding:"10px"}} id="mark_table"> 
                  <tr style={{color:"black",fontWeight:"bold",fontSize:"20px"}}>
                    <th style={{}}>Criteria {props.c_no}</th>
                  <th style={{}}>Evaluator 1</th>
                  <th style={{}}>Evaluator 2</th>
                  <th style={{}}>Evaluator 3</th>
                  </tr>
                 
           <tr style={{color:"black"}}>
               <td style={{color:"black",fontWeight:"bold",fontSize:"18px"}}>Marks</td>
               {/* Dropbox for evaluator1 */}
               <td><select name={'eval1' + props.c_no } id={'eval1' + props.c_no } onChange={handleSubmit}>
        
     <option >1</option>
    <option >2</option>
     <option >3</option>
    <option >4</option>
    <option >5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
           </select></td>
            {/* Dropbox for evaluator2 */}
           <td><select name={'eval2' + props.c_no } id={'eval2' + props.c_no } onChange={handleSubmit}>
        
     <option >1</option>
    <option >2</option>
     <option >3</option>
    <option >4</option>
    <option >5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
           </select></td>
            {/* Dropbox for evaluator3 */}
           <td><select name={'eval3' + props.c_no } id={'eval3' + props.c_no } onChange={handleSubmit}>
        
     <option >1</option>
    <option >2</option>
     <option >3</option>
    <option >4</option>
    <option >5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
           </select></td>
           </tr>
           <tr style={{color:"black"}}>
               <td style={{color:"black",fontWeight:"bold",fontSize:"18px"}}>Remarks</td>
               <td><textarea placeholder="Enter Remarks"></textarea></td>
               <td><textarea placeholder="Enter Remarks"></textarea></td>
               <td><textarea placeholder="Enter Remarks"></textarea></td>
           </tr>
          
           <tr>
           <td style={{color:"black",fontWeight:"bold",fontSize:"18px"}}>Total:</td>
           {/* Total Sum  */}
               <td colSpan="3" style={{textAlign:"left"}} ><input type="text" style={{fontSize:"25px",border:"none",fontWeight:"BOLD"}} name={'criteria' + props.c_no } id={'criteria' + props.c_no }></input></td></tr>
        
           
                   
                  </table>  
                  <br></br>
        </div>
    )
}

export default Criteria_table