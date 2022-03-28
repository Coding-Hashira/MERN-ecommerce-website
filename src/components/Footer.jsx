import {
  LocationOn,
  FacebookRounded,
  Pinterest,
  LocalPhone,
  MailOutline,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Logo = styled.h1``;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  padding: 20px;
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #${(props) => props.color};
  transition: all 0.45s ease;

  &:hover {
    background-color: #${(props) => props.hover};
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DevStore</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          tempora quis obcaecati id, temporibus quaerat expedita nulla? Magnam
          harum assumenda fugit tenetur deleniti dolorem.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999" hover="304a81">
            <FacebookRounded />
          </SocialIcon>
          <SocialIcon color="55acee" hover="468fc7">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e4405f" hover="b9334d">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link href="#">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Cart</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Gaming Accessories</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Laptops</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Gadgets</Link>
          </ListItem>
          <ListItem>
            <Link href="#">My Account</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Order Tracking</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Wishlist</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Terms</Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} /> 622 Dixie Path, South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
