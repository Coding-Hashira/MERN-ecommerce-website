import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
  transition: all 300ms;
  height: 70vh;
  max-height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #3a3a3a3b;
`;

const Categories = ({ title, image }) => {
  return (
    <Container>
      <Image src={image} />
      <Info>
        <Title>{title}</Title>
      </Info>
    </Container>
  );
};

export default Categories;
