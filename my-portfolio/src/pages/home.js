import React, { useEffect } from "react";
import "./home.css";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "BH | Home";
  }, []);
  return (
    <div>
      <div id="homeImage"></div>
      <div id="aboutMe">
        <div>blocking space</div>
      </div>
      <div id="endImage">
        <div>blocking more space</div>
        <Button variant="contained" color="primary"><Link to="/portfolio">Portfolio</Link></Button> 
        <Button variant="contained" color="primary"><Link to="/contact">Contact</Link></Button> 
      </div>
    </div>
  );
}

export default Home;
