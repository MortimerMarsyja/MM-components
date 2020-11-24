import styled from "styled-components";
import { blueColor, whiteColor } from "../../07-Styles/colorPalette";

const HorStyledButton = styled.button`
  height: 30px;
  width: 80px;
  border-radius: 6px;
  padding: 6px;
  background-color: ${blueColor};
  color: ${whiteColor};
  line-height: 9px;
  border: none;
  margin-top: 12px;
  margin-bottom: 2px;
  &:active,
  focus {
    outline: none;
  }
  &:disabled {
    background-color: #909090;
    color: #707070;
    cursor: not-allowed !important;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default HorStyledButton;
