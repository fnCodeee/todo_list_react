import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/register";
import Login from "./pages/Login";

const App = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/auth">
     <Route path="login" element={<Login />} />
     <Route path="register" element={<Register />} />
    </Route>
   </Routes>
  </Router>
 );
};

export default App;
