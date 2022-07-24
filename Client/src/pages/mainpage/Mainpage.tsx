import React from "react";
import { FooterContainer, MainContainer, HeaderContainer, TagContainer } from'./Mainpage.style'
import Header from "../../compenents/header/Header";
import Footer from "../../compenents/footer/Footer";
import Tags from "../../compenents/tags/Tags";
import Main from "../../compenents/main/Main"

function Mainpage() {
    return (
        <MainContainer>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <TagContainer>
                <Tags />
            </TagContainer>
            <MainContainer>
                <Main />
            </MainContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </MainContainer>
    )
};

export default Mainpage;