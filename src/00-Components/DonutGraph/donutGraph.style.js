import styled from "styled-components";

const StyledDonutGraph = styled.div`
  .label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  .hovered {
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    z-index: 1000;
  }
`;

export default StyledDonutGraph;
