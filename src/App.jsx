import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import LandingPages from "./pages/LandingPages";
import { Home } from "./pages/Home";
import { Room } from "./pages/test/Room";
import Task from "./pages/test/Task";

const App = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<LandingPages />} />
    <Route path="/test" element={<Room />} />
    <Route path="/task" element={<Task/>} />

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
