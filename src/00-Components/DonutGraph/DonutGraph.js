// deps
import React, { useState } from "react";
// components
import SegmentComponent from "./SegmentComponent";
import DonutGraphLabel from "./DonutGraphLabel";
import StyledDonutGraph from "./donutGraph.style";

const DonutGraph = ({ colors, values, icons, initialOffset }, ...props) => {
  const [label, setLabel] = useState();
  let valueSum = 0;

  const getOffset = function (value) {
    let thisOffset;
    if (valueSum === 0) {
      thisOffset = initialOffset;
    } else {
      thisOffset = 100 - valueSum + initialOffset;
    }
    valueSum += value;
    return thisOffset;
  };

  const handleGetLable = (labelInfo) => {
    setLabel(labelInfo);
  };

  return (
    <StyledDonutGraph>
      <svg width="80px" height="100%" viewBox="0 0 42 42" className="donut">
        <circle
          className="donut-ring"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#d2d3d4"
          strokeWidth="8"
        ></circle>
        {values.map((segment, idx) => {
          const calculatedOffset = getOffset(segment.value);
          return (
            <SegmentComponent
              key={idx}
              index={idx}
              color={colors[idx]}
              offset={calculatedOffset}
              labelGetterFunc={handleGetLable}
              segmentData={segment}
            />
          );
        })}
        <circle
          className="donut-hole"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
        ></circle>
      </svg>
      {label && (
        <DonutGraphLabel item={label.segmentData} color={colors[label.index]} />
      )}
    </StyledDonutGraph>
  );
};

export default DonutGraph;
