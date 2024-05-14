import styled from "styled-components";
import device from "../../constant/responsive";
import { motion } from "framer-motion";

const CardStyle = styled(motion.div)`
  padding: 20px;
  background-color: aliceblue;
  border: 1px solid gray;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  @media (max-width: ${device.tabletM}) {
    padding: 15px;
  }
  @media (max-width: ${device.mobileL}) {
    padding: 10px;
  }
`;

export default CardStyle;
