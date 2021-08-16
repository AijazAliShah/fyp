import React, { useState } from "react";
import { FaCentercode } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Project.css";

function AddLecturer() {
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
    <div className="container">
      <h3 style={{ color:"blue",textAlign:"center" }}>NEW LECTURER PROFILE</h3>
      <form>
      <tr >
        <td colspan='2'>
      <input  type="text"
              name="Lecturer ID"
              placeholder="Lecturer ID"
            /></td>
            </tr>

            <tr >
        <td colspan='2'>
        <input  type="text"
              name="Name"
              placeholder="Name"
            /></td>
            </tr>

            <tr >
        <td colspan='2'>
        <input  type="text"
              name="Email"
              placeholder="Email"
            /></td>
            </tr>

            <tr >
        <td colspan='2'>
        <input  type="text"
              name="Password"
              placeholder="Password"
            /></td>
            </tr>
            
            <tr>
            <td><input
            type="text"
              name="Department"
              placeholder="Department"
            //   value={x.firstName}
            //   onChange={e => handleInputChange(e, i)}
            /></td>
            <td>
            <input
            type="text"
              name="Area of Expertise"
              placeholder="Area of Expertise"
            //   value={x.firstName}
            //   onChange={e => handleInputChange(e, i)}
            />
            </td>
            </tr>
            </form>
    
           
     
      <button type="submit" className="btn btn-primary"  id="Create" >Create Account</button>
      
      
    </div>
  );
}

export default AddLecturer;
