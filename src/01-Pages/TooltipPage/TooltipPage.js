import React from "react";
// styles
import StyledTooltipPage from "./StyledTooltipPage.style";
// components
import Tooltip from "../../00-Components/Tooltip";

const TooltipPage = () => {
  return (
    <StyledTooltipPage>
      <h2>Tooltip Component</h2>
      <Tooltip
        text="Jorge luís"
        parentLimitingSize={"60px"}
        tooltipText="Jorge Luís"
      />
    </StyledTooltipPage>
  );
};

export default TooltipPage;
