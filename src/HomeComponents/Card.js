import React from 'react';
import { CardContainer, CardHeading, CardPara } from '../Pages/HomeElements';

function Card(props) {
    return (
        <CardContainer>
            <img src={props.source} alt="Logos"/>
            <CardHeading>{props.heading}</CardHeading>
            <CardPara>{props.paragraph}</CardPara>
        </CardContainer>
    );
}

export default Card;