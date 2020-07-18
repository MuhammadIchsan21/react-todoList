/** @jsx jsx*/

// import React from "react";
import { jsx } from "@emotion/core";
import Proptypes from "prop-types";
import { useTheme } from "emotion-theming";
// import cx from "classnames";
// import styles from "./button.module.css";
import * as styles from "./button.styles";
const Button = ({ text, onClick, color, align }) => {
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "main-black-color",
  //   color === "red" && "main-red-color",
  //   align === "left " && "align-left",
  //   align === "right" && "align-right"
  // ].join(" ");

  //Css Module
  // const classNames = cx(styles.headerBtn, {
  //   [styles.mainBlackColor]: color === "black",
  //   [styles.mainRedColor]: color === "red",
  //   [styles.alingLeft]: align === "left",
  //   [styles.alignRight]: align === "right"
  // });
  const theme = useTheme();
  return (
    //CSS Modules
    // <button className={classNames} onClick={onClick}>
    //   {text}
    // </button>
    <button css={styles.button({ align, color, theme })} onClick={onClick}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};
Button.propTypes = {
  text: Proptypes.string.isRequired,
  onClick: Proptypes.func,
  color: Proptypes.oneOf(["black", "red"]),
  align: Proptypes.oneOf(["left", "right"])
};
export default Button;
