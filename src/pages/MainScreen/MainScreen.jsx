import { useEffect, useState } from "react";
import { getProducts } from "../../services/products-services";
import { ButtonContainer, Dashboard, Picture, ProductCard, ProductData, ProductDetails } from "./styles/MainScreen";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Footer from "../../components/Footer";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
  color: #333333;
  margin: 0;
`

function formatPrice(price) {
  const formattedPrice = parseFloat(price).toFixed(2);
  return `$${formattedPrice}`;
}

function MainScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <Container>
      <h3>Products Dashboard</h3>
      <Dashboard>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <Picture src={product.picture_url} alt={"product picture"}/>
            <ProductData>
                <ProductDetails>
                  {product.name}
                </ProductDetails>
                <ProductDetails style={{color:"#FA4A0C"}} >
                  {formatPrice(product.price)}
                </ProductDetails>
                <ButtonContainer>
                  <FiEdit style={{ color: "#FA4A0C"}}/> 
                  <FiTrash2 style={{ color: "#FA4A0C"}}/>
                </ButtonContainer>
            </ProductData>
          </ProductCard>
        ))}
      </Dashboard>
      <Footer text={"Create Product"}/>
    </Container>
  );
}

export default MainScreen;