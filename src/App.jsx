import styled from '@emotion/styled';

import { useEffect, useState } from 'react';
import MainScreen from './pages/MainScreen/MainScreen';
import MainLoader from './pages/MainLoader/MainLoader';


const MainContainer = styled.div`
  background-color: white;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans 3', sans-serif;
`;

function App() {
  const [showLoader, setShowLoader] = useState(true);

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