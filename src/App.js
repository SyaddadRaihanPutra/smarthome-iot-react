import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Servo from "./pages/Servo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/servo" exact element={<Servo />} />
      </Routes>
    </Router>
  );
}

export default App;
