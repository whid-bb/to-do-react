import React from "react";
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TodoContainer from "./functionBased/components/TodoContainer";
import "./functionBased/App.css";
import NotMatch from "./functionBased/pages/NotMatch";
import Navbar from "./functionBased/components/Navbar";
import About from "./functionBased/components/About";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
