import styled from "styled-components";
import { boxShadow } from "../../07-Styles/colorPalette";

const HorStyledHeader = styled("div")`
  margin: 0;
  width: 100vw;
  height: 40px;
  box-shadow: ${boxShadow};
  .header-logo {
    margin-top: 0;
    margin-left: 10px;
  }
`;

export default HorStyledHeader;
