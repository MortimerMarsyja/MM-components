import React from "react";

const NestedTooltipComponent = ({ tooltipText, nestedClass }) => {
  return (
    <span className={`nestedTooltip ${nestedClass}`}>
      <p>{tooltipText}</p>
    </span>
  );
};

export default NestedTooltipComponent;
