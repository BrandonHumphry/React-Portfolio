import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/home'
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import DevelopmentGrid from './components/developmentgrid';
import DesignGrid from './components/designgrid';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* portfolio page and routes */}
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/development" component={DesignGrid} />
          <Route exact path="/design" component={DevelopmentGrid} />
          {/* add individual page routes below? */}
          {/* <Route exact path="/WholeFoods" component={WholeFoods} /> */}
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
