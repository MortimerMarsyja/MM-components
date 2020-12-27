import React from "react";
// component
import HorTag from "../../00-Components/HorTag";
// styles
import StyledTagPage from "./StyledTagPage.style";

const TagPage = () => {
  return (
    <StyledTagPage>
      <h2>Tag Component</h2>
      <HorTag value="This" bgColor="#ff0006" />
      <HorTag value="Are" bgColor="#ff0006" />
      <HorTag value="Some" bgColor="#ff0006" />
      <HorTag value="Tags" bgColor="#ff0006" />
      <HorTag value="🎮" bgColor="#ff0006" />
    </StyledTagPage>
  );
};

export default TagPage;
