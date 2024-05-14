import styled from "styled-components";
import device from "../../constant/responsive";

export const StyledResultQuizContent = styled.div`
  & img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
  & h1 {
    font-size: 30px;
    text-align: center;
    margin: 30px 0;
  }
  @media (max-width: ${device.tabletL}) {
    & h1 {
      font-size: 20px;
    }
    & img {
      height: 200px;
    }
  }
`;
export const StyledTable = styled.div`
  overflow: auto;
  width: 100%;
  & table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 90%;
    margin: 30px auto;
  }
  & td,
  & th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px 14px;
  }
  @media (max-width: ${device.tabletL}) {
    & table {
      width: 100%;
    }
    & td,
    & th {
      padding: 6px 12px;
    }
  }
`;
export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;
export const TableRow = styled.tr`
  background-color: ${({ $backColor }) => $backColor || "aliceblue"};
`;
