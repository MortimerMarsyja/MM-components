import styled from "styled-components";
import { blueColor } from "../../07-Styles/colorPalette";

const StyledHorSwitchComponent = styled.div`
  .switch-container {
    &:hover {
      cursor: pointer;
    }
    background-color: ${(props) => props.trueColor};
    width: 50px;
    height: 18px;
    border-radius: 50px;
    position: relative;
    transition: 0.3s;
    &.true {
      transition: 0.3s;
      background-color: ${(props) => props.falseColor};
    }
    .switcher {
      width: 25px;
      height: 25px;
      background-color: #a2a2a2;
      position: absolute;
      border-radius: 50%;
      top: -3px;
      transition: 0.3s;
      &.true {
        background: ${blueColor};
        left: 50%;
        transition: 0.3s;
      }
    }
  }

  .switch-container {
    .icon {
      position: absolute;
      height: 30px;
      left: 27px;
      transition: 0.3s;
      &.true {
        left: 3px;
        transition: 0.3s;
      }
    }
  }
`;

export default StyledHorSwitchComponent;
