import React from "react";
import Proptypes from "prop-types";
const Button = ({ text, onClick, color, align }) => {
  const classNames = [
    "header-btn",
    color === "black" && "main-black-color",
    color === "red" && "main-red-color",
    align === "left " && "align-left",
    align === "right" && "align-right"
  ].join(" ");
  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "Button",
  color: "black"
};
Button.propTypes = {
  text: Proptypes.string.isRequired,
  onClick: Proptypes.func,
  color: Proptypes.oneOf(["black", "red"]),
  align: Proptypes.oneOf(["left", "right"])
};
export default Button;
