import React from 'react'
import { AContainer,SPara,SHeading,SectionHead,CardWrapper } from '../Pages/HomeElements'
import Card from '../HomeComponents/Card';
import {CardItems} from '../Data/Data';
function SectionT() {
    return (
        <>
        <AContainer>
            <SectionHead>
            <SHeading>Why Choose EasyBank?</SHeading>
            <SPara>We leverage Open Banking to turn on your bank account into your financial hub. Control your finances like never before.</SPara>
            </SectionHead>

            <CardWrapper>
            {CardItems.map((R)=>{
                console.log(R);
                return (<Card key={R.id} heading={R.heading} paragraph={R.paragraph} source={R.imag} />);
            })}
            </CardWrapper>
        </AContainer>
        
        </>
    )
}

export default SectionT
