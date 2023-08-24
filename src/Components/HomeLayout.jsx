import React from "react";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <div>HomeLayout</div>
      <Outlet />
    </>
  );
}

export default HomeLayout;
