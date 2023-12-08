import { useEffect, useState } from "react";
import { getProducts, showProduct } from "../../services/products-services";
import { ButtonContainer, Dashboard, Picture, ProductCard, ProductData, ProductDetails } from "./styles/MainScreen";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import { formatPrice } from "../../utils/utils";
import { useProd } from "../../context/productContext";
import { useNavigate } from "react-router-dom";
import MainLoader from "../MainLoader/MainLoader";

const Container = styled.div`
  text-align: center;
  background-color: #F6F6F9;
  color: #333333;
  margin: 0;
`
function MainScreen() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { productData, setProductData } = useProd();

  function handleShowProduct(event) {
    const productId = event.target.getAttribute("data-product-id");
    showProduct(productId).then((data) => setProductData(data));
    navigate(`/show`);
  }

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <Container>
      <h3 style={{paddingTop:"1rem"}}>Products Dashboard</h3>
      <Dashboard>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <Picture src={product.picture_url} alt={"product picture"} onClick={handleShowProduct} data-product-id={product.id}/>
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