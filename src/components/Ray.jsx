import React from "react";

import "./Ray.css";

const Ray = (props) => {
  return <div className={`ray absolute ${props.class}`} id={props.id}></div>;
};

export default Ray;
