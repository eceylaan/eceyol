import React from "react";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginForm from "./loginform";

export default function LoginPage() {
  return (
    <>
      <div className="loginPage">
        <div className="loginHeader">
          <FontAwesomeIcon className="shoppingIcon" width={90} icon={faBagShopping} color="orange" />
          <h1>Hoşgeldin!</h1>
          <p>Alışverişe başlamak için hesabınıza giriş yapın</p>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
