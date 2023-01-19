import React from "react";

import "../styles/Topbar.css";

const Topbar = () => {
  return (
    <div className="container bg-primary mt-4 bg-dark me-auto">
      <nav class="navbar navbar-expand-sm shadow-lg p-3 mb-5 top-border">
        <p class="ms-3 mt-3 text-white">HOME</p>
      </nav>
    </div>
  );
};

export default Topbar;
