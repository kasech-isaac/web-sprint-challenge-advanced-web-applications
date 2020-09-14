import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import BubblePage from"./components/BubblePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute"
import ColorList from "./components/ColorList"

import "./styles.scss";

function App() {
  const [color, setColor] = useState([]);
  return (
    <Router>
      <div className="App">
<nav>
<Link to="/login">Login</Link>
<Link to="/protected">colors</Link>
</nav>
    <Switch>
      <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route exact path="/" component={Login} />
        <ColorList color={color} setColor={setColor}/>
   </Switch>
      </div>
    </Router>
  );
}

export default App;
