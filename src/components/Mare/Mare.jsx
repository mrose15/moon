import React from "react";

import "./Mare.css";

const Mare = (props) => {
  return (
    <div className={`mare absolute ${props.class}`} id={props.id}>
      {props.children}
    </div>
  );
};

export default Mare;
