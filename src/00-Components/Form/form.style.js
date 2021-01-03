import styled from "styled-components";
import { greyColors } from "../../07-Styles/colorPalette";

const StyledForm = styled.div`
  width: 300px;
  .form-component {
    background-color: ${greyColors[500]};
    border-radius: 6px;
    padding: 12px;
    &_input-container {
      display: flex;
      justify-content: flex-end;
    }
    &-inputButton {
      margin-top: 12px;
      padding: 6px 12px;
      border-radius: 3px;
      border: none;
    }
  }
`;

export default StyledForm;
