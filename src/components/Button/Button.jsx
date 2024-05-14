import StyledButton from "./Button.style";

//? w=width, color=background-color, me=margin-end, ms=margin-start

const Button = ({ children, me, ms, color, w, onClick }) => {
  return (
    <StyledButton onClick={onClick} $w={w} color={color} $me={me} $ms={ms}>
      {children}
    </StyledButton>
  );
};

export default Button;
