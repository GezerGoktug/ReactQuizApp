import styled from "styled-components";
import device from "../../constant/responsive";

const StyledQuestion = styled.div`
  & h1 {
    font-size: 32px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  & p {
    font-size: 18px;
    font-weight: 500;
    padding: 15px 0;
    border-bottom: 2px solid gray;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  @media (max-width: ${device.tabletM}) {
    & h1 {
      font-size: 28px;
    }
    & p {
      font-size: 16px;
    }
  }
  @media (max-width: ${device.mobileL}) {
    & h1 {
      font-size: 24px;
    }
    & p {
      font-size: 14px;
    }
  }
`;

export default StyledQuestion