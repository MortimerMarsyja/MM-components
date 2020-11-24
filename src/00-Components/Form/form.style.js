import styled from "styled-components";

const StyledForm = styled.div`
  width: 300px;
  .form-component {
    background-color: grey;
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
