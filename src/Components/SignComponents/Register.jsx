import React from "react";

function Register() {
  return (
    <>
      <div className="sign-container">
        <h1 className="sign-title">Register</h1>
        <form action="">
          <div className="label-container">
            <label htmlFor="emal">Email Adress</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Adress"
            />
          </div>

          <div className="label-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="sign-btn-container">
            <button className="filled-btn">Register</button>
            <button className="outline-btn">Sign In</button>
            <a className="link-anonymous" href="/">
              Sign in as anonymous
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
