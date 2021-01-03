import React, { useState } from "react";

const SegmentComponent = ({
  segmentData,
  offset,
  color,
  labelGetterFunc,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleOnMouseEnter = () => {
    labelGetterFunc({ segmentData, index });
    setIsHovered(true);
  };
  return (
    <>
      <circle
        className={`${segmentData.label}-segment ${isHovered ? "hovered" : ""}`}
        cx="21"
        cy="21"
        r={"15.91549430918954px"}
        fill="transparent"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={`${segmentData.value} ${100 - segmentData.value}`}
        strokeDashoffset={offset}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      />
    </>
  );
};

export default SegmentComponent;
