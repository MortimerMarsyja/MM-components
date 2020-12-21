// Deps
import React, { useEffect, useState } from "react";
// Utils
import measureElement from "../../08-utils/measures";
// Components
import NestedTooltipComponent from "./NestedTooltipComponent";
import StyledTooltip from "./Tooltip.style";

const checkSize = (setIsOverFlown) => {
  const membraneWidth = document.getElementById("membrane").clientWidth;
  const contentWidth = measureElement(
    document.getElementById("content").clientWidth
  ).width;
  if (membraneWidth < contentWidth) {
    setIsOverFlown(true);
  }
};

const Tooltip = ({ text, parentLimitingSize, tooltipText }) => {
  const [isOverFlown, setIsOverFlown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const mouseEnterHandler = () => {
    setIsHovered(true);
  };
  useEffect(() => {
    checkSize(setIsOverFlown);
  }, []);
  return (
    <StyledTooltip parentLimitingSize={parentLimitingSize}>
      <div id={"membrane"} className="membrane">
        <div
          id="content"
          className="content"
          onMouseEnter={() => mouseEnterHandler()}
          onMouseLeave={() => setIsHovered(false)}
        >
          {text}
        </div>
      </div>
      <NestedTooltipComponent
        tooltipText={tooltipText}
        nestedClass={`${isOverFlown && isHovered ? "true" : ""}`}
      />
    </StyledTooltip>
  );
};

export default Tooltip;
