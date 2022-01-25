import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page">
      <h1>404 Error</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
