import React from "react";

function Login() {
  return (
    <>
      <div className="sign-container">
        <h1 className="sign-title">Sign In</h1>
        <form action="">
          <div className="label-container">
            <label htmlFor="emal">Email Adress</label>
            <input type="email" name="email" id="email" placeholder="Email Adress" />
          </div>

          <div className="label-container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" />
          </div>
          <div className="sign-btn-container">
            <button className="filled-btn">Sign In</button>
            <button className="outline-btn">Register</button>
            <a className="link-anonymous" href="/">Sign in as anonymous</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
