import styled from "styled-components";
import device from "../../constant/responsive";

const StyledButton = styled.button`
  background-color: transparent;
  white-space: nowrap;
  width: ${({ $w }) => $w || "max-content"};
  margin: 20px ${({ $me }) => $me || 0} 0 ${({ $ms }) => $ms || 0};
  display: block;
  border: 2px solid ${({ color }) => color || "var(--primary)"};
  color: ${({ color }) => color || "var(--primary)"};
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  padding: 10px 20px;
  position: relative;
  z-index: 5;
  transition: all 0.3s ease;
  &:after {
    content: "";
    transition: all 0.3s ease;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: ${({ color }) => color || "var(--primary)"};
    width: 100%;
    height: 0%;
  }
  &:hover {
    color: aliceblue;
  }
  &:hover:after {
    height: 100%;
    top: auto;
  }
  @media (max-width: ${device.tabletS}) {
    font-size: 14px;
  }
`;
export default StyledButton;
