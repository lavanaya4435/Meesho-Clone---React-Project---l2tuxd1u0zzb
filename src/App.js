// import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
// // import "./App.css";
// // import { BrowserRouter as Router, Route, Link, Routes ,Switch } from 'react-router-dom';
// // import {  Switch, Route,Routes } from 'react-router-dom';
import Products from "./components/Products";
import Product from "./components/Product";
import Login from "./components/Login";

// // import { Route } from "react-router";
// import { Route } from "react-router-dom";
// import routes from "./components/AllRoutes";


// const App = () => {
//   return (
//     <>
//       {routes.map((route, index) => (
//         <Route
//           key={index}
//           path={route.path}
//           exact
//           component={route.component}
//         />
//       ))}
//     </>
//   );
// };

// export default App;
 

// // const App = () => {
// //   return (
// //     <>
// //       <Navbar />
      
  
// //       <Routes>
// //         <Route path="/home"> <Home /></Route>
// //         <Route path="/products"><Products /></Route>
// //         {/* <Route path="/product/:id"><Product /></Route> */}
// //         <Route path="product/:id" element={<Product />} />
// //         <Route path="/login"><Login /></Route>
// //         <Product />
// //       </Routes>
       
      
       
      
// //     </>
// //   );
// // };

// // export default App;




import React from "react";
import { Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/products",
    component: Products
  },
  {
    path: "/product/:id",
    component: Product
  },
  {
    path: "/cart",
    component:  Cart
 },
  {
    path: "/login",
    component: Login
  }
];

const App = () => {
  return (
    <>
       <Navbar />

      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact
          component={route.component}
        />
      ))}
    </>
  );
};

export default App;
