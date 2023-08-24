import React from "react";
import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <>
      <div>LoginLayout</div>
      <Outlet />
    </>
  );
}

export default LoginLayout;
