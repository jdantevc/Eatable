import { useEffect, useState } from 'react';
import MainScreen from './pages/MainScreen/MainScreen';
import MainLoader from './pages/MainLoader/MainLoader';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);


  return (
    <div className="App">
      {showLoader ? (
        <MainLoader />
      ) : (
        <MainScreen />
      )}
    </div>
  );
}

export default App