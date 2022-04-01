import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../../data";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  jutify-content: center;
  grid-gap: 10px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
