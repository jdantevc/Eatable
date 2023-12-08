import styled from "@emotion/styled";

export const Container = styled.div`
  text-align: center;
  background-color: #F6F6F9;
  color: #333333;
  margin: 0;
`

export const ProductContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Picture = styled.img`
  max-width: 60%;
  min-width: 241px;
  max-width: 60%;
  min-height: 241px; 
  border-radius: 50%; 
  box-shadow: 0px 12px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
`;

export const ProductDetails = styled.p`
  font-weight: bold;
  font-size: 28px;
  color: #333333;
  display: flex;
  flex-direction: row;
  margin: 0.4rem;
  justify-content: center;
`
export const ProductData = styled.div`
  min-width: 75%;
  margin: 2rem;
  font-size: 16px;
  text-align: justify;
`;