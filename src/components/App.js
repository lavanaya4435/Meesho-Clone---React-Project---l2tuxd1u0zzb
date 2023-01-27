// import React from 'react'
// import '../styles/App.css';
// const App = () => {


//   return (
//     <div id="main">
//     </div>
//   )
// }


// export default App;
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import "./App.css";
// import { BrowserRouter as Router, Route, Link, Routes ,Switch } from 'react-router-dom';
import {  Switch, Route } from 'react-router-dom';
import Products from "./components/Products";
import Product from "./components/Product";
import Login from "./components/Login";
 

const App = () => {
  return (
    <>
      <Navbar />
      
  
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/products"><Products /></Route>
        <Route path="/products/:id"><Product /></Route>
        <Route path="/login"><Login /></Route>
        <Product />
      </Switch>
       
      
       
      
    </>
  );
};

export default App;
