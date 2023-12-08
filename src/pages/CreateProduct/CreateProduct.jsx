import FormikCreate from '../../components/CreateProductForm'
import styled from '@emotion/styled'

const Container = styled.div`
  text-align: center;
  background-color: #F6F6F9;
  color: #333333;
  margin: 0;
  height: 100vh;
`
const CreateProduct = () => {
  return (
    <Container>
      <h3 style={{paddingTop:"1rem"}}>Create Product</h3>
      <FormikCreate/>
    </Container>
  )
}

export default CreateProduct