import styled from '@emotion/styled';

import { useEffect, useState } from 'react';
import MainScreen from './pages/MainScreen/MainScreen';
import MainLoader from './pages/MainLoader/MainLoader';
import { login } from './services/auth-services';


const MainContainer = styled.div`
  background-color: white;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans 3', sans-serif;
`;

function App() {
  const [user, setUser] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  const loginData = {
    email: "jdantevc@gmail.com",
    password: "123456",
  };

  useEffect(() => {
    login(loginData)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);


  return (
    <MainContainer>
      {showLoader ? (
        <MainLoader />
      ) : (
        <MainScreen />
      )}
    </MainContainer>
  );
}

export default App