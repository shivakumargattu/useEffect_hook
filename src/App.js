import logo from './logo.svg';
import './App.css';

import { useState,useEffect } from 'react';

function App() {
   
  const [data,setdata]=useState([]);

  useEffect (()=>{
    const getData= async()=>{

      const response=await fetch("https://jsonplaceholder.typicode.com/users")
      console.log(response.json())
     
    
      
    }
 getData()
  },[])

  return (
    <div className="App">
       <h1>feacting data from API</h1>

       <table>
        <thead>
        <tr>
        <th>Empolyee Name</th>
        <th>Email</th>
        <th>Compayne</th>
        <th>web site</th>
        </tr>
        </thead>
        <tbody>
          <tr>
          <td>shiva</td>
          <td>shiva@gmail.com</td>
          <td>TCL</td>
          <td>prorfolio</td>

        </tr>
        
        </tbody>
        
       </table>
    </div>
  );
}

export default App;
