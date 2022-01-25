import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const PageLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PageLayouts;
