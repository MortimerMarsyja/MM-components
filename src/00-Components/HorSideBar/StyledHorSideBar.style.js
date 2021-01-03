import styled from "styled-components";
import { greyColors } from "../../07-Styles/colorPalette";

const StyledHorSideBar = styled("ul")`
  background: ${greyColors[700]};
  width: 200px;
  flex-wrap: wrap;
  height: 100%;
  min-height: 100%;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  li {
    a {
      color: #bdbdbd;
      &:active {
        color: #fff;
      }
      &:hover {
        color: #fff;
      }
    }
    margin: 15px 15px;
  }
`;

export default StyledHorSideBar;
