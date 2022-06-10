import React from "react";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';

import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import SignUP from "./components/Signup";
import Contact from "./components/Contact";
import Login from "./components/Login";
import About from "./components/About";


const App = () => {
  return (<div>
    <Navbar />
    <Switch>
      <Route exact path="/home"> <Home /></Route>
      <Route path="/about"> <About /></Route>
      <Route path="/contact"> <Contact /></Route>
      <Route path="/login"> <Login /></Route>
      <Route path="/signup"> <SignUP /></Route>
    </Switch>
  </div>
  );
}

export default App;