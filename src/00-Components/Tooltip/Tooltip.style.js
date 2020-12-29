import styled from "styled-components";

const StyledTooltip = styled.div`
  position: relative;
  width: auto;
  .membrane {
    height: auto;
    position: relative;
    white-space: nowrap;
    max-width: ${(props) => props.parentLimitingSize};
  }
  .content {
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    width: auto;
  }
  .nestedTooltip {
    p {
      width: auto;
    }
    position: absolute;
    bottom: 24px;
    background-color: #383838;
    color: #fefefe;
    width: auto;
    z-index: 999;
    font-size: 14px;
    padding: 3px 6px;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.33s linear;
    transition: visibility 0.3s, opacity 0.33s linear;
    &.true {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default StyledTooltip;
