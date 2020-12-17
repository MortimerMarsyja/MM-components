//Deps
import React, { useState } from "react";
//Components
import Logo from "../../00-Components/Logo";
import HorSwitchComponent from "../../00-Components/HorSwitchComponent";
import Tooltip from "../../00-Components/Tooltip";

const MainPage = () => {
  const [boolValue, setBoolValue] = useState();
  return (
    <>
      <Logo />
      <h1>
        Hor Form Component V<sub>1</sub>
      </h1>
      <Tooltip
        text="Jorge luís"
        parentLimitingSize={"60px"}
        tooltipText="Jorge Luís"
      />
      {boolValue && <p>{boolValue}</p>}
    </>
  );
};

export default MainPage;
