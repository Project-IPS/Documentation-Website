import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./Sidebar.css"
import {Link} from "react-router-dom";

export default props => {
  return (
    <Menu style={{height:"100%"}}>
      <b className="menu-item" style={{color:"yellow"}}> Project IPS Docs</b>
      <Link className="menu-item" to="/documentation">
        Overview
      </Link>
      <b className="menu-item" style={{color:"yellow"}}> Algorithms</b>
      <Link className="menu-item" to="/documentation/android">
        Overview
      </Link>
      <Link className="menu-item" to="/documentation/android">
        Kalman Filter
      </Link>
      <b className="menu-item" style={{color:"yellow"}}> Android Reference</b>
      <Link className="menu-item" to="/documentation/android">
        Overview
      </Link>
      <Link className="menu-item" to="/documentation/android">
        package 1
      </Link>
      <Link className="menu-item" to="/documentation/android">
       package 2
      </Link>
      <b className="menu-item" style={{color:"yellow"}}> C++ Reference</b>
      <Link className="menu-item" to="/documentation/android">
        Overview
      </Link>
      <Link className="menu-item" to="/documentation/android">
        file 1
      </Link>
      <Link className="menu-item" to="/documentation/android">
       file 2
      </Link>

      
    </Menu>
  );
};