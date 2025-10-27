import React from "react";
import ClassCounter from "../components/ClassCounter";
import FunctionCounter from "../components/FunctionCounter";

const Home = () => {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <ClassCounter />
      <FunctionCounter />
    </div>
  );
};

export default Home;