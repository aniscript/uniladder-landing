import React from "react";
import { FaSync } from "react-icons/fa";

export default (props) => (
  <div className={`fadeIn ${props.spinning}`}>
    <FaSync size={props.size} />
  </div>
);
