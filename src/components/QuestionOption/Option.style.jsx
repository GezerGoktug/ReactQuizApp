import styled, { css } from "styled-components";
import device from "../../constant/responsive";

const StyledOption = styled.div`
  padding: 15px;
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  gap: 14px;
  font-weight: 500;
  align-items: center;
  border: 2px solid gainsboro;
  display: flex;
  font-size: 20px;
  transition: box-shadow 0.3s ease;
  &.correct {
    background-color: #0bc250;
  }
  &.wrong {
    background-color: #da1b1b;
  }
  ${({ $active }) =>
    $active
      ? css`
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
            rgb(51, 51, 51) 0px 0px 0px 3px;
        `
      : css`
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        `}

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
  @media (max-width: ${device.mobileL}) {
    font-size: 16px;
  }
`;
export default StyledOption;
