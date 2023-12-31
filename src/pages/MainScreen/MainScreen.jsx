import { useEffect, useState } from "react";
import { getProducts, showProduct, deleteProduct } from "../../services/products-services";
import { ButtonContainer, Dashboard, Picture, ProductCard, ProductData, ProductDetails } from "./styles/MainScreen";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import { formatPrice } from "../../utils/utils";
import { useProd } from "../../context/productContext";
import { useNavigate } from "react-router-dom";

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

  function handleCreateProduct(){
    navigate(`/create`);
  }

  function handleEditProduct(event){
    const productId = event.target.getAttribute("data-product-id");
    showProduct(productId).then((data) => setProductData(data));
    navigate(`/edit`);
  }

  const handleDeleteProduct = (event) => {
    const productId = event.target.getAttribute("data-product-id");
    deleteProduct(productId).then(() => {
      getProducts().then((data) => {
        setProducts(data);
      });
    }).catch((error) => {
      console.error("Error deleting product:", error);
    });
  };

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
    setProductData(null);
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
                <FiEdit onClick={handleEditProduct} data-product-id={product.id} style={{ color: "#FA4A0C"}}/>  
                <FiTrash2 onClick={handleDeleteProduct} data-product-id={product.id} style={{ color: "#FA4A0C"}}/>
              </ButtonContainer>
            </ProductData>
          </ProductCard>
        ))}
      </Dashboard>
      <Footer onClick={handleCreateProduct} text={"Create Product"}/>
    </Container>
  );
}

export default MainScreen;