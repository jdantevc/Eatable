import { useEffect, useState } from "react";
import { getProducts, showProduct } from "../../services/products-services";
import { ButtonContainer, Dashboard, Picture, ProductCard, ProductData, ProductDetails } from "./styles/MainScreen";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import ShowProduct from "../ShowProduct/ShowProduct";
import { formatPrice } from "../../utils/utils";

const Container = styled.div`
  text-align: center;
  background-color: #F6F6F9;
  color: #333333;
  margin: 0;
`
function MainScreen() {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState([])
  const [productDisplay, setProductDisplay] = useState(false);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  function handleShowProduct(event) {
    const productId = event.target.getAttribute("data-product-id");
    showProduct(productId).then((data) => setProductData(data));
    setProductDisplay(true);
  }

  function handleGoBack() {
    setProductData([]); 
    setProductDisplay(false); 
  }

  return (
    <Container>
      {productDisplay ? (
        <ShowProduct productData={productData}  onClick={handleGoBack}/>
      ) : (
      <>
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
    </>
      )}
    </Container>
  );
}

export default MainScreen;