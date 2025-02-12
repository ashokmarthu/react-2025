import React from "react";
import LOGO from "../assets/quiz-logo.png";
const Header = () => {
  return (
    <header>
      <img src={LOGO} alt="header-logo" />
      <h1>REACT QUIZZ</h1>
    </header>
  );
};

export default Header;
