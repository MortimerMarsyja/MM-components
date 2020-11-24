import React from "react";
import HorStyledButton from "./horButton.style";

const HorButton = ({ body, onClick, disabled, type }) => {
  return (
    <HorStyledButton disabled={disabled} onClick={onClick} type={type}>
      {body}
    </HorStyledButton>
  );
};

export default HorButton;
