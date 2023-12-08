import Footer from "../../components/Footer";
import { Container, Picture, ProductData, ProductDetails } from "./styles/ShowProduct";
import { formatPrice } from "../../utils/utils";

function ShowProduct({ productData, onClick }) {
  return (
    <>
    <Container>
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
    </Container>
    <Footer text={"Back"} onClick={onClick} />
    </>
  );
}

export default ShowProduct;