import { css } from "@emotion/core";

export const button = ({ color, align, theme }) => {
  let textColor;
  const {
    color: { primary }
  } = theme;

  switch (color) {
    case "black":
      textColor = primary.black;
      break;
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor = primary.black;
  }
  return css`
    width: 24%;
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    color: ${textColor};
    padding: 16px;
    background: unset;
    border: unset;
    outline: unset;
    cursor: pointer;
    text-align: ${align};
  `;
};
