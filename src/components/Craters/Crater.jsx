import React from "react";

import "./Crater.css";

const Crater = (props) => {
  return (
    <div className={`crater absolute ${props.class}`} id={props.id}>
      {props.children}
    </div>
  );
};

export default Crater;
