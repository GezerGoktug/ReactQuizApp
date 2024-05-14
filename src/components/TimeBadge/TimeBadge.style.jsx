import styled from "styled-components";
import device from "../../constant/responsive";

const Badge = styled.div`
  background-color: #a600ff;
  width: max-content;
  padding: 8px 16px;
  font-size: 20px;
  border-radius: 20px;
  font-weight: 600;
  position: absolute;
  display: flex;
  align-items: center;
  gap: 5px;
  top: 20px;
  right: 40px;
  @media (max-width: ${device.tabletM}) {
    top: 15px;
    right: 20px;
    font-size: 16px;
  }
  @media (max-width: ${device.mobileL}) {
    top: 10px;
    right: 15px;
    font-size: 14px;
  }
`;
export default Badge