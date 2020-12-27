import styled from "styled-components";

const StyledHorTag = styled.div`
  width: auto;
  height: 30px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50px;
  line-height: 30px;
  padding-right: 9px;
  display: inline-block;
  align-items: center;
  span {
    margin-left: 9px;
  }
  .close {
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

export default StyledHorTag;
