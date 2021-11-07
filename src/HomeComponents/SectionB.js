import React from 'react';
import {ArticleWrapper, AHeading} from '../Pages/HomeElements';
import ACard from './ACard';
import {Articles} from '../Data/Data';
function SectionB() {
    return (
        <>
        <AHeading>Latest Articles</AHeading>
        <ArticleWrapper>
            {
                Articles.map((e)=>{
                    return <ACard key={e.id}  heading={e.heading} source={e.img} paragraph={e.paragraph} hilight={e.tagline}/>
                })
            }
        </ArticleWrapper>
        </>
    )
}

export default SectionB;
