import { Formik, Form, Field, ErrorMessage } from "formik";
import { createProduct } from "../services/products-services";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Container = styled.div`
text-align: center;
background-color: #F6F6F9;
color: #333333;
margin: 0;
`

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid #B8B8BB;
  padding: 8px; 
  background-color: transparent; 
  outline: none; 
  width: 80%; 
  margin: 0;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  padding: 10px;
`;

function FormikCreate() {
  const navigate = useNavigate();

  function validate(values) {
    const errors = {};

    if (values.name === "") {
      errors.name = "This dish deserves a name!";
    }

    if (values.price === "") {
      errors.price = "No free meals!";
    } 

    return errors;
  }

  const initialForm = { name: "", price: "", category: "", description: "", picture_url: "" };

  function handleFormSubmit(values) {
    createProduct(values);
    navigate(`/`);
  }

  return (
    <Container>
    <Formik
      initialValues={initialForm}
      onSubmit={handleFormSubmit}
      validate={validate}
    >
      {({ values, errors, touched, handleSubmit, isValid }) => (
        <Form className="form" onSubmit={handleSubmit}>
          <FormContainer>
          <div>
            <label>
            <p style={{margin: "0.15rem", color:"#B8B8BB"}}>Name</p>
            <Field type="text" name="name" as={StyledInput}/>
            <ErrorMessage name="name" className="form-error" component="p" />
            </label>
          </div>
          <div>
            <label>
            <p style={{color:"#B8B8BB"}}>Price</p>
            <Field type="number" name="price" as={StyledInput}/>
            <ErrorMessage
              name="price"
              className="form-error"
              component="p"
            />
            </label>
          </div>
          <div>
            <label>
            <p style={{color:"#B8B8BB"}}>Description</p>
            <Field type="text" name="description" as={StyledInput} />
            </label>
          </div>
          <div>
            <label>
            <p style={{color:"#B8B8BB"}}>Category</p> 
            <Field type="text" name="category" as={StyledInput} />
            </label>
          </div>
          <div>
            <label>
            <p style={{color:"#B8B8BB"}}>Picture URL</p> 
            <Field type="url" name="picture_url" as={StyledInput} />
            </label>
          </div>
          </FormContainer>
          <FooterContainer>
          <Footer text="Save" type="submit" disabled={!isValid}/>
          </FooterContainer>
        </Form>
      )}
    </Formik>
    </Container>
  );
}

export default FormikCreate;