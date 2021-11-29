import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 2rem;
    overflow: hidden;
    
    @media screen and (max-width:675px){
        display: flex;
        flex-direction: column-reverse;
        padding: 0 3rem;
        overflow: hidden;
    }
`
export const ContentSection = styled.div`
    width: 40%;
    display: flex-start;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 6rem;
    padding-left: 3rem;

    @media screen and (max-width:675px){
        width: 100%;
        padding: 0;
    }

`
export const ImgContainer = styled.div`
    position: relative;
    width: 60%;
    @media screen and (max-width:675px){
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Heading  = styled.p`
    font-size: 58px;
    @media screen and (max-width:900px){
        font-size: 48px;
    }
    @media screen and (max-width:675px){
        padding-top: 6rem;
        text-align: center;
        font-size: 38px;
    }
`
export const Para = styled.p`
    font-size: 20px;
    color: grey;
    margin-bottom: 3rem;
    @media screen and (max-width:675px){
        text-align: center;
    }
`
export const BtnContainer = styled.div`
  @media screen and (max-width:675px){
        text-align: center;
    }
`
export const Btn = styled.button`
    border-radius: 50px;
    background: hsl(136, 65%, 51%);
    padding: 12px 24px;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
     transition: all 0.2s ease-in-out;
     background: #fff;
     color: #808080;
   }
   @media screen and (max-width:675px){
        padding: 16px 30px;
        font-size: 18px;
    }
`
export const Img = styled.img`
    width: auto;
    position: absolute;
    z-index: -1;
    margin-top: -300px;
    margin-left: 70px;
    @media screen and (max-width:675px){
        width: 900px;
        margin-top: -250px;
        margin-left: 120px;
    }
`
export const ImgU = styled.img`
    width: 700px;
    margin-top: -80px;
    margin-left: 330px;
    z-index: 999;
    @media screen and (max-width:675px){
        width: 100%;
        margin-top: -180px;
        margin-left: 0;
    }
    @media screen and (max-width:320px){
        margin-top: -50px;
    }
`
export const AContainer = styled.div`
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    background: hsl(220, 16%, 96%);
    margin-top: -150px;

    @media screen and (max-width:1220px){
        margin-top: 0;
    }
    @media screen and (max-width:675px){
        margin-top: 5rem;
    }
`
export const CardContainer = styled.div`
    width: 250px;
    margin-bottom: 4rem;
    @media screen and (max-width:900px){
        width: 300px;
    }
`

export const SectionHead = styled.div`
    padding:3rem 3rem;
`
export const SPara = styled.p`
    font-size: 18px;
    width: 550px;
    margin-bottom: 2rem;
    @media screen and (max-width:675px){
        font-size: 16px;
        width: auto;
        text-align: center;
    }
`

export const SHeading = styled.p`
    font-size: 38px;
    width: 550px;
    @media screen and (max-width:675px){
        font-size: 28px;
        width: auto;
        text-align: center;
    }
`

export const CardHeading  = styled.p`
    font-size: 28px;
    @media screen and (max-width:900px){
        font-size: 26px;
    }
    @media screen and (max-width:675px){
        text-align: center;
        font-size: 20px;
    }
`
export const CardPara = styled.p`
    font-size: 15px;
    color: grey;
    margin-bottom: 3rem;
    @media screen and (max-width:675px){
        text-align: center;
        margin-bottom: 1rem;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    @media screen and (max-width:675px){
        text-align: center;
        flex-direction: column;
    }
`
export const AHeading = styled.p`
    padding-top: 2rem;
    padding-left: 6rem;
    font-size: 42px;
    @media screen and (max-width:675px){
        padding-left: 0;
        text-align: center;
    }
`

export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:  1rem 6rem 6rem;
    @media screen and (max-width:675px){
        width: auto;
        padding: 0 4rem;
        flex-direction: column;
        justify-content: center;
        
    }
`

export const ArticleContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    
    @media screen and (max-width:1370px){
        width: 200px;
        padding-right: 6rem;
    }
    @media screen and (max-width:675px){
        width: auto;
        padding: 0 1rem;
        margin-bottom: 2rem;
    }    

    
`
export const Imag = styled.img`
    width: 280px;
    height: 200px;
    @media screen and (max-width:675px){
        width: 80vw;
    }    
`
export const ArticleHilight  = styled.p`
    color: grey;
    font-size: 12px;
    @media screen and (max-width:675px){
        padding: 0 1.5rem;
    }
`
export const ArticleHeading=styled.p`
    font-size: 18px;
    &:hover{
        color: hsl(136, 65%, 51%);
    }
    @media screen and (max-width:675px){
        padding: 0 1.5rem;
    }
`

export const ArticlePara=styled.p`
    font-size: 14px;
    color: grey;
    @media screen and (max-width:675px){
        padding: 0 1.5rem;
    }
`

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 50%;
`; 
export const Input = styled.input`
    width: 50%;
`; 
export const Label = styled.label`
    width: 50%;
`; 
export const Textarea = styled.textarea`
    width: 50%;
`; 

export const StyledButton = styled.button`
    
`; 
export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4rem 6rem;
`