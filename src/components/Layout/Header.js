import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>
          ReactMeals
          <button>
            Your Cart <span>0</span>
          </button>
        </h1>
      </header>
      <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt="welcome food"></img>
    </React.Fragment>
  );
};

export default Header;
