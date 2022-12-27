import React from "react";
import Record from "./record.json";
import "./Giveaway.css";
import { NavLink } from "react-router-dom";
const Giveaway = () => {
  return (
    <div className="contener">
    <div className="Giveaway">
    <div className="head">
      <h1>What all pets do we have?</h1>
</div>
       
        <div className="navbar">
     
     <NavLink to="./" className="navlink" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
        DOGS
      </NavLink>
     

      <NavLink to="./" className="navlink" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
        CATS
      </NavLink>
     <div>
     </div> <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Age(months)</th>
          </tr>
        </thead>
       
        {Record.map((item) => (
          <tr key={item.id}>
            <td>{item.Name}</td>
            <td>{item.Breed}</td>
            <td>{item.age}</td>

          </tr>
        ))}
       
      </table>
      </div>
    </div>
    </div>
  );
};

export default Giveaway;
