import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2 className="products__title">Products</h2>
      <Outlet />
    </>
  );
};

export default Home;
