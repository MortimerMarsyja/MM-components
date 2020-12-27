//Deps
import React from "react";
//Components
import Tooltip from "../../00-Components/Tooltip";
//styles
import StyledMainPage from "./StyledMainPage.style";

const MainPage = () => {
  return (
    <StyledMainPage>
      <h1>
        Hor Main Page V<sub>1</sub>
      </h1>
      <Tooltip
        text="Jorge luís"
        parentLimitingSize={"60px"}
        tooltipText="Jorge Luís"
      />
    </StyledMainPage>
  );
};

export default MainPage;
