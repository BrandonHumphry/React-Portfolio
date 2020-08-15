import React from "react";
import Grid from "@material-ui/core/Grid";
import Thumbnail from "./thumbnail"
import {NavLink} from "react-router-dom"

const gridContainer = {
  maxWidth: "1250px",
  paddingBottom: "50px",
  margin: "auto"
}

function DevelopmentGrid() {
return (
    <div><NavLink to="/design">Design</NavLink>
    <NavLink to="/development">Development</NavLink>
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
      </Grid>
      </div>
)
}

export default DevelopmentGrid