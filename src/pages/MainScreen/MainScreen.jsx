import { useEffect, useState } from "react";
import { getProducts } from "../../services/products-services";

function MainScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainScreen;