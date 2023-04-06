import React, { useState, useEffect } from "react";
import Client from "../util/Client";
import styled from "styled-components";

const ProductTile = ({ product }) => {
  return (
    <div>
      Product: {product.name} {product.price}
    </div>
  );
};

const ProductFeed = ({ children }) => {
  return <div>{children}</div>;
};

const Products = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("fetch");
      let newProducts = await Client.getProducts();
      setProducts(newProducts);
      console.log("set", newProducts);
    }
    fetchData();
  }, []);

  let productTiles = products.map((product, index) => (
    <ProductTile product={product} key={index} />
  ));

  return (
    <>
      <h2>Product</h2>
      {/* <ProductFeed>{productTiles}</ProductFeed> */}
      {productTiles ? (
        <>
          <ProductFeed>{productTiles}</ProductFeed>
        </>
      ) : (
        <h2>Loading products</h2>
      )}
    </>
  );
};

export default Products;
