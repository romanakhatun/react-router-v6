import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <Link to="/rooms">Book Rooms</Link>
    </div>
  );
};

export default Home;
