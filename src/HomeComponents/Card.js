import React from 'react';
import { CardContainer, CardHeading, CardPara, ArticleHilight } from '../Pages/HomeElements';

function Card(props) {
    return (
        <CardContainer>
            <img src={props.source} alt="Logos"/>
            <CardHeading>{props.heading}</CardHeading>
            <ArticleHilight>{props.hilight}</ArticleHilight>
            <CardPara>{props.paragraph}</CardPara>
        </CardContainer>
    );
}

export default Card;