import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from "./pages/Home";
import Sidebar from './components/Sidebar';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {

    return(
        <div className="d-flex justify-content-between bg-dark">
        <BrowserRouter>
        <Sidebar />
        <Routes>
            <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
