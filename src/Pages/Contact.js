import React from 'react'
import {MainContainer,Form,Label,Input,Textarea,Btn, BtnContainer,ContactUi} from './HomeElements';
function Contact() {
    return (
            <MainContainer>
                <ContactUi>
                    <img src={require('../Assets/contnt.png').default} style={{width:'500px'}} alt="Contact"/>
                </ContactUi>
                <Form>

                        <Label>Name</Label>
                        <Input type="text" name="name" />
                        <Label>Company</Label>
                        <Input type="text" name="company" />
                        <Label>Email Address</Label>
                        <Input type="email" name="email" />
                        <Label>Phone Number</Label>
                        <Input type="text" name="phone" />
                        <Label>Message</Label>
                        <Textarea name="message" rows="5"></Textarea>
                        <BtnContainer><Btn>Submit</Btn></BtnContainer>
                </Form>
            </MainContainer>
    )
}

export default Contact
