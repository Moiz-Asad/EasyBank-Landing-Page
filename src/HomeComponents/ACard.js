import React from 'react';
import { ArticleContainer, ArticleHeading, ArticlePara, ArticleHilight, Imag } from '../Pages/HomeElements';

function ACard(props) {
    return (
        <ArticleContainer>
            <Imag src={props.source} alt="articles"/>
            <ArticleHilight>{props.hilight}</ArticleHilight>
            <ArticleHeading>{props.heading}</ArticleHeading>
            <ArticlePara> {props.paragraph} </ArticlePara>
        </ArticleContainer>
    );
}

export default ACard;