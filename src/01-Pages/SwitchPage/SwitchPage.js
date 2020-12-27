import React, { useState } from "react";
// component
import HorSwitchComponent from "../../00-Components/HorSwitch";
// styles
import StyledSwitchPage from "./StyledMainPage.style";

const SwitchPage = () => {
  const [boolValue, setBoolValue] = useState();
  return (
    <StyledSwitchPage>
      <h2>Switch Component</h2>
      <HorSwitchComponent
        switchInitialState={true}
        valueFunction={() => setBoolValue(!boolValue)}
        trueIcon={"🐰"}
        falseIcon={"🦊"}
        trueColor={"#ff0006"}
        falseColor={"#ffdde9"}
      />
    </StyledSwitchPage>
  );
};

export default SwitchPage;
