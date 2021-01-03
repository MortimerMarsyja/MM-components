import React from "react";
// components
import Tooltip from "../Tooltip";

const DonutGraphLabel = ({ label, color, icon }) => {
  return (
    <div className="label-wrapper">
      <span>{icon}</span>
      <svg height="32px">
        <circle
          className="label-color"
          cx="10"
          cy="15"
          r="8"
          fill={color}
          stroke="#d2d3d4"
          strokeWidth="3px"
        />
      </svg>
      <Tooltip
        className="label"
        text={label.label}
        tooltipText={label.label}
        parentLimitingSize="120px"
      />
      <p>{label.value}%</p>
    </div>
  );
};

export default DonutGraphLabel;
