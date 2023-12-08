import styled from "@emotion/styled";

export const ProductCard = styled.div`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	border-radius: 30px;
  height: 220px;
  min-width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  background-color: white;
`;

export const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
`;

export const Picture = styled.img`
  max-width: 100%;
  height: 130px; 
  border-radius: 50%; 
  box-shadow: 0px 12px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const ProductData = styled.div`
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  justify-content: center;
`;

export const ProductDetails = styled.p`
  font-weight: bold;
  color: #333333;
  display: flex;
  flex-direction: row;
  margin: 0.4rem;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50%;
  width: 100%;
`