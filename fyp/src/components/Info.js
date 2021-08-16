import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import "./Info.css";


function Info(){

 

  const [dataList, setDataList] = useState([]);


  useEffect(()=> {
    Axios.get("http://localhost:3001/api/info").then((response)=> {
    setDataList(response.data);
    });
  
  }, []);

//export class Info extends Component {
   // render() {
        return (
            
            
            <div id="table-div1">
              <br></br>
              {/* <br></br> */}
                <h3 className="info_heading">Timeline and Deliverables</h3>
                <Table striped bordered hover size="sm">
<thead id="inf_thead">
<tr>
  
  <th>Activity</th>
  <th>Tentative Dates</th>
  <th>Responsibility</th>
  <th>Deliverables</th>
  

</tr>
</thead>
<tbody>
  
{dataList.map((val)=> {
      return ( 
    <tr>
      <td>{val.Activity}</td>
      <td>{val.Tentative_date}</td>
      <td>{val.Responsibility}</td>
      <td>{val.Deliverables}</td>
   
    </tr>);
     })}

</tbody>
</Table>
<br></br>
<h3 className="info_heading">Downloadable Forms/Templates</h3>
<Table>
    
        <tr>
            <td>FYP Proposal</td>
            <td>Download</td>
        </tr>
        <tr>
            <td>FYP Progress Report</td>
            <td>Download</td>
        </tr>
        <tr>
            <td>FYP Progress Tracker</td>
            <td>Download</td>
        </tr>
    
    
    
</Table>
            
        </div>
        
        )
    }

export default Info ;
