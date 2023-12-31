import styled from '@emotion/styled';

const FooterButton = styled.button`
  width: 80%;
  height: 70px;
  border-radius: 30px;
  position: sticky;
  bottom: 0.25rem;
  background-color: #FA4A0C;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const Footer = ({ text, onClick, disabled, type }) => {
  return (
    <FooterButton type={type} onClick={onClick} disabled={disabled}>
      {text}
    </FooterButton>
  );
}

export default Footer;