import React, { useState } from "react";
import "./Project.css";
 
function Project() {
  // This use state was already defined in the code in video  so change according to our input fields i.e email etc

  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };
  return (
    <div className="prj_div">
      <form className="container1">
        <h1 id="prj_heading">FYP PROJECT DETAILS</h1>
     
      <table>
        <tr>
          <td>
      <input
              type="text"
              name="projectTitle"
        placeholder="Title"
        className="prj_inp" required
        autoFocus
        
        // className="form-control"
              // value={x.projectTitle}
              // onChange={e => handleInputChange(e, i)}
            /></td>
            <td>
            <input
            type="text"
              name="internal"
        placeholder="Internal Supervisor"
        className="prj_inp"
        required
              // value={x.internal}
              // onChange={e => handleInputChange(e, i)}
            /></td>
            <td>
            <input
            type="text"
              name="external"
        placeholder="External Supervisor"
        className="prj_inp"
        required
              // value={x.external}
              //  onChange={e => handleInputChange(e, i)}
            />
            </td>
            </tr>
            </table>

          
            {/* Logic for Dynamically Add input field */}

      {inputList.map((x, i) => {
        return (
          <div className="box">
           
            <input
            type="text"
              name="firstName"
        placeholder="Full Name"
        className="prj_inp"
        required
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
            type="text"
              name="roll_no"
        placeholder="Roll No"
        className="prj_inp"
        style={{width:"22%"}}
        required
              value={x.rollno}
              onChange={e => handleInputChange(e, i)}
            />
            <input
            type="email"
              name="email"
        placeholder="Email"
        className="prj_inp"
        style={{textTransform:"lowercase"}}
        required
              value={x.email}
              onChange={e => handleInputChange(e, i)}
            />
            
            
           {/* Add and Remove button dynamically */}
              {inputList.length !== 1 && <button className="add_rem_btn" style={{backgroundColor:"transparent",
              border:"none",color:"grey",fontSize:"40px",fontWeight:"bold"}}
                
                onClick={() => handleRemoveClick(i)}>-</button>}
              {inputList.length - 1 === i && <button className="add_rem_btn" style={{backgroundColor:"transparent",
              border:"none",color:"grey",fontSize:"30px",fontWeight:"bold"}}  onClick={handleAddClick}>+</button>}
            
          </div>
        );
      })}
      <br></br>
      <button type="submit" class="btn btn-primary" style={{width:"100%",display:"block",fontSize:"20px",border:"none",backgroundColor:"rgb(43, 43, 148)"}} >Insert</button>
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
      </form>
    </div>
    
  );}

export default Project;