import CardStyle from "./Card.style";

const Card = ({ children }) => {
  return (
    <CardStyle
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className="card"
    >
      {children}
    </CardStyle>
  );
};

export default Card;
