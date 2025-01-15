"use client";
import "./auth.css";
import React, { useState } from "react";
import LoginPage from "./login/page";
import SignupPage from "./signup/signupform";

const AuthLayout = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth">
      {isLogin ? (
        <div onClick={() => setIsLogin(false)}>
          <LoginPage />
        </div>
      ) : (
        <div onClick={() => setIsLogin(true)}>
          <SignupPage />
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
