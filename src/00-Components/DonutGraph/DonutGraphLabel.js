import React from "react";
// components
import Tooltip from "../Tooltip";

const DonutGraphLabel = (item) => {
  return (
    <div className="label-wrapper">
      <svg height="20px">
        <circle
          className="label-color"
          cx="10"
          cy="10"
          r="10"
          fill={item.color}
        />
      </svg>
      <Tooltip
        className="label"
        text={item.item.label}
        tooltipText={item.item.label}
        parentLimitingSize="120px"
      />
      <p>{item.item.value}%</p>
    </div>
  );
};

export default DonutGraphLabel;
