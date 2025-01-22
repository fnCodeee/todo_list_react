import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/register";
import Login from "./pages/login";
import LandingPages from "./pages/LandingPages";
import { Home } from "./pages/Home";

const App = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<LandingPages />} />
    <Route path="/auth">
     <Route path="login" element={<Login />} />
     <Route path="register" element={<Register />} />
    </Route>
    <Route path="/pages">
        <Route path="home" element={<Home />}></Route>
    </Route>
   </Routes>
  </Router>
 );
};

export default App;
