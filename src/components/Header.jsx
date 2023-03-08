import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <StyledDiv>
        <ProfilePic className="profilepic" src="./images/header-img.jpg" alt="" />
        <H1>SUCCESS WITH AUSTIN OSEDEBAMEN EHIAKHAMEN</H1>
        <Div></Div>
      </StyledDiv>
    </Wrapper>
  );
}

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  justify-content: center;

`;

const ProfilePic = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`;

const Wrapper = styled.section`
  background-color: #132a48;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  font-family: "Poppins", Sans-serif;
  font-size: 20px;
  font-weight: 800;
  padding: 80px 20px 30px;

  @media screen and (max-width: 500px) {
    font-size: 15px;
    font-weight: 800;
    padding: 60px 20px 30px;
  }

  @media screen and (max-width: 380px) {
    font-size: 11px;
    font-weight: 800;
    padding: 40px 20px 30px;
  }
`;

const Div = styled.div`
  width: 160px;
  height: 1.5px;
  background: white;
`;

const H1 = styled.h1`
  margin: 10px 0 20px 0;
  text-align: center;
`;

export default Header;
