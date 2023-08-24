import React from "react";
import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <>
      <header>
        <nav className="signIn-nav">
            <div className="logo-box"></div>
            <h1 className="logo-title">Cinemax</h1>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default LoginLayout;
