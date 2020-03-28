import React from "react";

import "./styles.css";

export default ({ title, children }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h3>{children}</h3>
    </header>
  );
};
