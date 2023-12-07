import styled from '@emotion/styled'


export const LoaderScreen = styled.div`
  background-image: url('Logo.svg');
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const LoaderContainer = styled.div`
  background-color: white;
  border-radius: 262px;
  background: #fff;
  width: 262px;
  height: 262px;
  flex-shrink: 0;
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.15);
  display: flex; 
  flex-direction: column;
  gap: 25px;
  align-items: center; 
  justify-content: center; 
`

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ff240c;
  border-top: 5px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
  }
`