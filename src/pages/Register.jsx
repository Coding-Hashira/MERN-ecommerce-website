import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
  width: 100%;
`;

const Wrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  width: 40%;
  padding: 10px;
  flex-direction: column;
  align-items: center;
`;

const Left = styled.div`
  width: calc(60vw - 1px);
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 50px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 13px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  align-self: center;
  transition: all 300ms ease;

  &:hover {
    background-color: #007070;
  }
`;

const Line = styled.div`
  height: 50%;
  width: 1px;
  background-color: gray;
  margin: auto;
  position: relative;
`;

const Image = styled.img`
  height: 300px;
  object-fit: contain;
`;

const Login = () => {
  return (
    <Container>
      <Left>
        <Image src="/register.svg" />
      </Left>
      <Line></Line>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in according with the <Link>PRIVACY POLICY</Link>
          </Agreement>
          <Button>LOGIN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
