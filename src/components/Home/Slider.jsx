import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { sliderItems } from "../../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Arrow = styled.div`
  &:hover {
    opacity: 0.7;
  }
  width: 50px;
  height: 50px;
  z-index: 90;
  transition: 150ms;
  position: absolute;
  top: 0;
  opacity: 0.5;
  bottom: 0;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(
    ${(props) =>
      props.slideIndex === 1 ? 100 : props.slideIndex === 2 ? -100 : 0}vw
  );
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: ${(props) => props.height};
  position: absolute;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slide = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 1);
    } else {
      setSlideIndex(slideIndex === 1 ? 3 : slideIndex - 1);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => slide("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item?.bg} key={item.id}>
            <ImgContainer>
              <Image height={item?.height} src={item?.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item?.title}</Title>
              <Desc>{item?.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => slide("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
