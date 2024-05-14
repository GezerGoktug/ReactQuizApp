import styled from "styled-components";

const StyledBadge = styled.span`
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ $backcolor }) => $backcolor || "#229DD7"};
  color: aliceblue;
`;
export default StyledBadge;
