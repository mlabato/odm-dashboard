import React, { useState, useEffect } from "react";

const ProductContext = React.createContext({
  products: [],
  submitHandler: () => {}
});

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        return response.json();
      })
      .then((products) => setProducts(products))
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  const contextValue = {
    products: products,
  };



  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
