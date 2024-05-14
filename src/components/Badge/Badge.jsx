import StyledBadge from "./Badge.style";

//! Yanlış,doğru,boş cevap sayılarını tutacak bilgilerin duracağı badge

const Badge = ({ backcolor, children }) => {
  return <StyledBadge $backcolor={backcolor}>{children}</StyledBadge>;
};

export default Badge;
