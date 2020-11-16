import React from "react";

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
      <p className="label">{item.item.label}</p>
      <p>{item.item.value}%</p>
    </div>
  );
};

export default DonutGraphLabel;
