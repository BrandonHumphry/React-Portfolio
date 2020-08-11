import React from 'react';
import { Link } from "react-router-dom";
// import './App.css';
// import { makeStyles } from '@material-ui/core/styles';

function Navigation (){

    return (
        <div className="navigation">
        
          {/* <img src={logo} className="logo-image" alt="Logo Image" /> */}
          <div className="navigation-sub">                                     
            {/* Set up the Links */}
            <Link to="/" className="item">About</Link>
            <Link to="/portfolio" className="item">Portfolio</Link>
            <Link to="/contact" className="item">Contact</Link>
          </div>
   
        </div>
      );
}

export default Navigation;
