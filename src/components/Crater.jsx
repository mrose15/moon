import React from "react";

import "./Crater.css";

const Crater = (props) => {
  return <div className={`crater ${props.class}`} id={props.id}></div>;
};

export default Crater;
