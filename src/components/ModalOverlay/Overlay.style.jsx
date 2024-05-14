import styled from "styled-components";
import device from "../../constant/responsive";

const StyledBackDrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000064;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 10;
  & .card {
    margin-top: 30px;
    width: 45%;
  }
  @media (max-width: ${device.laptop}) {
    & .card {
      width: 60%;
    }
  }
  @media (max-width: ${device.tabletM}) {
    & .card {
      width: 70%;
    }
  }
  @media (max-width: ${device.tabletS}) {
    & .card {
      width: 80%;
    }
  }
  @media (max-width: ${device.mobileL}) {
    & .card {
      width: 85%;
    }
  }
  @media (max-width: ${device.mobileM}) {
    & .card {
      width: 90%;
    }
  }
  @media (max-width: ${device.mobileS}) {
    & .card {
      width: 95%;
    }
  }
`;

export default StyledBackDrop;
