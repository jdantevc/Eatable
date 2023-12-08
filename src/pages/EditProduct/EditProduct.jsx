import { useProd } from "../../context/productContext";
import MainLoader from "../MainLoader/MainLoader";
import { useNavigate } from "react-router-dom";
import FormikUpdate from "../../components/UpdateProductForm";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
  background-color: #F6F6F9;
  color: #333333;
  margin: 0;
  height: 100vh;
`

function EditProduct() {
  const navigate = useNavigate();
  const { productData, setProductData } = useProd();
  if (!productData) {
    return <MainLoader/>
  }

  return (
    <Container>
    <h3 style={{paddingTop:"1rem"}}>Edit Product</h3>
    <FormikUpdate/>
  </Container>
  );
}

export default EditProduct;