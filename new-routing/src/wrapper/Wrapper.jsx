import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Wrapper = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Wrapper;
