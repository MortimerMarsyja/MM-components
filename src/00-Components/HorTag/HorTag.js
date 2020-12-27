import React from "react";
import StyledHorTag from "./StyledHorTag.style";

const HorTag = ({ value, bgColor, closeFunction }) => {
  return (
    <StyledHorTag bgColor={bgColor}>
      <span>{value}</span>
      <span onClick={closeFunction} className="close">
        &times;
      </span>
    </StyledHorTag>
  );
};

export default HorTag;
