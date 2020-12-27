import styled from "styled-components";

const StyledHorSwitchComponent = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider.round {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.trueColor};
    border-radius: 50px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .circle {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.33s;
  }

  input:checked + .slider {
    background-color: ${(props) => props.falseColor};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  .circle {
    border-radius: 50%;
    .icon {
      text-align: center;
      margin-left: 4px;
    }
    &.true {
      transform: translateX(26px);
    }
  }
`;

export default StyledHorSwitchComponent;
