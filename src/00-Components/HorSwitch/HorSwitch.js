import React, { useState } from "react";
// styles
import StyledHorSwitchComponent from "./HorSwitchComponent.style";

const HorSwitchComponent = ({
  switchInitialState,
  valueFunction,
  trueIcon,
  falseIcon,
  labelName,
  trueColor,
  falseColor,
}) => {
  const [boolVal, setBoolVal] = useState(switchInitialState);
  const handleClick = () => {
    setBoolVal(!boolVal);
  };

  const iconReturner = (boolVal) => {
    if (boolVal === true) {
      return <div className="icon">{trueIcon}</div>;
    }
    if (boolVal === false) {
      return <div className="icon">{falseIcon}</div>;
    }
  };

  return (
    <StyledHorSwitchComponent
      className="switch"
      trueColor={trueColor}
      falseColor={falseColor}
    >
      <input
        id={labelName}
        type="checkbox"
        checked={boolVal}
        onClick={handleClick}
      />
      <span className="slider round">
        <div className={`circle ${boolVal}`}>{iconReturner(boolVal)}</div>
      </span>
    </StyledHorSwitchComponent>
  );
};

export default HorSwitchComponent;
