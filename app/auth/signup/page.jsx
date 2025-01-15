import React from "react";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Signup from "./signupform";

export default function SignupPage() {
  return (
    <>
      <div className="loginPage">
        <div className="loginHeader">
          <FontAwesomeIcon className="shoppingIcon" width={90} icon={faBagShopping} color="orange" />
          <h1>Hemen Kayıt Ol!</h1>
          <p>Fırsatları yakala</p>
        </div>
        <div>
          <Signup />
        </div>
      </div>
    </>
  );
}
