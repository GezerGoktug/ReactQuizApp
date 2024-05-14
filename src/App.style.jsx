import styled, { createGlobalStyle } from "styled-components";
import device from "./constant/responsive";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
}
:root{
  --primary:#a600ff;
  --secondary:#33C1BE;
}
html::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
	border-radius: 10px;
}

html::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

html::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-image: -webkit-gradient(linear,
									   left bottom,
									   left top,
									   color-stop(0.44, rgb(122,153,217)),
									   color-stop(0.72, rgb(73,125,189)),
									   color-stop(0.86, rgb(28,58,148)));
}

`;

export const Wrapper = styled.div`
  background: rgb(247, 84, 172);
  background: linear-gradient(
    0deg,
    rgba(247, 84, 172, 1) 0%,
    rgba(142, 0, 131, 1) 61%
  );
  min-height: 100vh;
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: ${device.laptop}) {
    width: 75%;
  }
  @media (max-width: ${device.tabletM}) {
    width: 80%;
  }
  @media (max-width: ${device.tabletS}) {
    width: 85%;
  }
  @media (max-width: ${device.mobileL}) {
    width: 90%;
  }
  @media (max-width: ${device.mobileS}) {
    width: 95%;
  }
`;
