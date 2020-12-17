import React, { useState } from "react";
// styles
import StyledHorSwitchComponent from "./HorSwitchComponent.style";

const HorSwitchComponent = ({
  switchInitialState,
  valueFunction,
  trueIcon,
  falseIcon,
  trueColor,
  falseColor,
}) => {
  const [boolVal, setBoolVal] = useState(switchInitialState);
  const handleClick = () => {
    setBoolVal(!boolVal);
    valueFunction(boolVal);
  };

  const iconReturner = (boolVal) => {
    if (boolVal === true) {
      return <div>{trueIcon}</div>;
    }
    if (boolVal === false) {
      return <div>{falseIcon}</div>;
    }
  };
  return (
    <StyledHorSwitchComponent trueColor={trueColor} falseColor={falseColor}>
      <div className={`switch-container ${boolVal}`} onClick={handleClick}>
        <span className={`icon ${boolVal}`}>{iconReturner(boolVal)}</span>
        <span className={`switcher ${boolVal}`} />
      </div>
    </StyledHorSwitchComponent>
  );
};

export default HorSwitchComponent;
