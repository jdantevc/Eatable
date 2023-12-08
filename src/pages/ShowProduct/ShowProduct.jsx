import Footer from "../../components/Footer";
import { Container, Picture, ProductContainer, ProductData, ProductDetails } from "./styles/ShowProduct";
import { formatPrice } from "../../utils/utils";
import { useProd } from "../../context/productContext";
import MainLoader from "../MainLoader/MainLoader";
import { useNavigate } from "react-router-dom";

function ShowProduct() {
  const navigate = useNavigate();
  const { productData, setProductData } = useProd();
  if (!productData) {
    return <MainLoader/>
  }

  function handleBackClick() {
    setProductData(null);
    navigate("/"); 
  }

  return (
    <Container>
      <ProductContainer>
      <Picture src={productData.picture_url} alt={"product picture"}/>
      <ProductDetails>
        {productData.name}
      </ProductDetails>
      <ProductDetails style={{color:"#FA4A0C"}} >
        {formatPrice(productData.price)}
      </ProductDetails>
      <ProductData>
        <p style={{fontWeight:"bold"}}>Description</p>
        <p>{productData.description}</p> 
      </ProductData>
    </ProductContainer>
    <Footer text={"Back"} onClick={handleBackClick}/>
    </Container>
  );
}

export default ShowProduct;