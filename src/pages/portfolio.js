import React, { useEffect } from "react";
import Navigation from "../components/navigation";
import {Link} from "react-router-dom"

function Portfolio() {
  useEffect(() => {
    document.title = "BH | Portfolio";
  }, []);
  return (
    <div className="App">
      <Navigation></Navigation>
      {/* area for sub nav for Design and Development: links to routes for different Grid components */}
      <Link to="/design">Design</Link>
      <Link to="/development">Development</Link>
    </div>
  );
}

export default Portfolio;

