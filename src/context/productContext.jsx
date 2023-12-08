import React, { createContext, useContext, useState } from 'react'

const ProdContext = createContext();

const ProdProvider = ({children}) => {
  const [productData, setProductData] = useState(null);

  return (
    <ProdContext.Provider
      value={{
        productData,
        setProductData,
      }}
    >
      {children}
    </ProdContext.Provider>
  )
}

function useProd() {
  return useContext(ProdContext);
}

export { ProdProvider, useProd };