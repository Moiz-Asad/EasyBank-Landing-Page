import React from 'react';
import { Container,ContentSection, ImgContainer,Heading,Para,BtnContainer,Btn,Img,ImgU } from '../Pages/HomeElements';
import image from '../Assets/bg-intro-desktop.svg';
import image2 from '../Assets/image-mockups.png';

function SectionA() {
    return (
        <Container> 
        <ContentSection>
            <Heading>Next Generation Digital Banking</Heading>
            <Para>Take your finiancial life online. Your Easybank account will be a non-stop-shop for sending, saving, budgeting, investing and much more.</Para>
            <BtnContainer> <Btn>Request Invite</Btn></BtnContainer>
        </ContentSection>           
        <ImgContainer>
                <Img src = {image} alt="Vector Elements"/>
                <ImgU src = {image2} alt="Vector Elements"/>
        </ImgContainer>
    </Container>
    );
}

export default SectionA
