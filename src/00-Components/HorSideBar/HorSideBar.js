import React from "react";
//styles
import StyledHorSideBar from "./StyledHorSideBar.style";

const HorSideBar = ({ urlList }) => {
  return (
    <StyledHorSideBar>
      {urlList.map((url) => (
        <li>
          <a href={url.url}>{url.name}</a>
        </li>
      ))}
    </StyledHorSideBar>
  );
};

export default HorSideBar;
