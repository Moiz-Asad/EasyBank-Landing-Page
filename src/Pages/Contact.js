import React from 'react'
import {MainContainer,Form,Label,Input,Textarea,StyledButton} from './HomeElements';
function Contact() {
    return (
            <MainContainer>
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
                        <StyledButton>Submit</StyledButton>
                </Form>
            </MainContainer>
    )
}

export default Contact
