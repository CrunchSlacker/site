import React from "react";
import Navbar from "../../basics/navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div style={{display: "flex", width: "100%", flexDirection: "column", alignItems: "center", marginLeft: "160px"}}>
        <h1 className="title">Login</h1>
        {/* Login Page */}
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>login</button>
                    <p className="message">Not registered? <a href="/">Create an account</a></p>
                </form>
            </div>
        </div>
      </div>
    </>
  );
}
