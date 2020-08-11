import React from "react";
import { Link } from "react-router-dom";
// import './App.css';

const thumbnailStyles = {
    padding: "10px 5px 5px 5px",
    // margin: 0 auto,
    minWidth: 320,
    // maxHeight: "400px",
    // display: "inline-block",
}

function Thumbnail(props) {
  return (
    <div className="project" style={thumbnailStyles}>
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Image" />
        </div>
        <div className="project-title">{props.title}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
