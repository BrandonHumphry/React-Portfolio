import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../components/navigation";
// import ImgMediaCard from '../components/card';
import Thumbnail from "../components/thumbnail";
import Grid from "@material-ui/core/Grid";

const gridContainer = {
    maxWidth: "1250px",
    paddingBottom: "50px",
    margin: "auto"
}

function Portfolio() {
  useEffect(() => {
    document.title = "BH | Portfolio";
  }, []);
  return (
    <div className="App">
      <Navigation></Navigation>
      <Grid item sm={12} container justify="center" style={gridContainer}>
        <Thumbnail
          link="/instacart"
          image="assets/portfolio/instacart.png"
          title="Instacart UI Designs"  
        />
        <Thumbnail
          link="/instacart"
          image="assets/portfolio/instacart.png"
          title="Instacart UI Designs"
        />
        <Thumbnail
          link="/instacart"
          image="assets/portfolio/instacart.png"
          title="Instacart UI Designs"
        />
        <Thumbnail
          link="/instacart"
          image="assets/portfolio/instacart.png"
          title="Instacart UI Designs"
        />
        <Thumbnail
          link="/instacart"
          image="assets/portfolio/instacart.png"
          title="Instacart UI Designs"
        />
        <Thumbnail
          link="/instacart"
          image="assets/portfolio/instacart.png"
          title="Instacart UI Designs"
        />
      </Grid>
    </div>
  );
}

export default Portfolio;

