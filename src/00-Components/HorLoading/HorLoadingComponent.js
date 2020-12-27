import React from "react";
//styles
import StyledLoadingComponent from './loadingComponent.style';

const LoadingIcon=({size,icon,color="#000"})=>{
  return (
    <StyledLoadingComponent
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill={color}
    >
      {icon}
    </StyledLoadingComponent>
  );
}

export default LoadingIcon;