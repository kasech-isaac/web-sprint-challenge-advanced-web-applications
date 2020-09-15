import React, { useState } from "react";
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";
import ColorList from "./components/ColorList";
import addColor from "./components/addColor"

function App() {
  return (
    <Router>
      <div className="App">
<nav>
 <div className="link">
      <Link to="/login">Login</Link>
        <Link to="/protected">Color List</Link>
        <Link to="/addcolor">Add Color</Link>
  </div>

        </nav>
         {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <PrivateRoute exact path="/protected" component={BubblePage}/>
          <Route path="/login" component={Login}/>
          <Route path="/addcolor" component={addColor} />
          <Route component={Login}/>
       
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
