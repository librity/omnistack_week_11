import React from "react";

const Header = ({ title, children }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h3>{children}</h3>
    </header>
  );
};

export default Header;
