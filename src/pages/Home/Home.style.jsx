import styled from "styled-components";
import device from "../../constant/responsive";

 const QuizStartContent = styled.div`
  & img {
    object-fit: contain;
    height: 200px;
    width: 100%;
  }
  & h1 {
    font-size: 30px;
    text-align: center;
    margin: 20px 0;
  }
  & p {
    font-weight: 600;
    padding: 0 30px;
    text-align: left;
    margin-bottom: 12px;
  }
  & table {
    border-spacing: 0;
    min-width: 70%;
    margin: 0 auto;
    text-align: center;

    color: #000000;
  }

  & table td,
  table th {
    border-bottom: 1px solid gray;
    width: max-content;
    padding: 12px;
  }
  & table th {
    border-bottom: 2px solid gray;
  }
  @media (max-width: ${device.tabletL}) {
    & img {
      height: 100px;
    }
  }
  @media (max-width: ${device.tabletM}) {
    & table {
      min-width: 80%;
    }
  }
  @media (max-width: ${device.tabletS}) {
    & p {
      padding: 0 15px;
    }
    & table {
      min-width: 90%;
    }
  }
  @media (max-width: ${device.mobileL}) {
    & p {
      padding: 0 5px;
    }
    & table {
      min-width: 100%;
    }
    & table td,
    table th {
      padding: 10px 6px;
    }
  }
`;
export default QuizStartContent