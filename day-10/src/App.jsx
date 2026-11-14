import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Router/Home"
import About from "./Router/About"
import Contact from "./Router/Contact"
import EmployeeDetails from "./Router/EmployeeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/employee/:id1" element={<EmployeeDetails/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// http://localhost:5174/employee/101   