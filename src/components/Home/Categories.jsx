import React from "react";
import styled from "styled-components";
import { categories } from "../../data";
import Category from "./Category";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Category image={item?.img} title={item?.title} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
