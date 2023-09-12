import styled from 'styled-components'


const SectionContainer = styled.section`
  width: 100vw;
  background-color: rgb(230, 231, 234);
  
  @media (max-width: 1024px) {
  }`

  export  {SectionContainer}

const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;
 
`;
export  {DivContainer};

const DivContent = styled.div`
  padding-top: 5rem;
  display: flex;
  gap: 10%;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding-top: 0;
  }
`
export {DivContent}

const InnerText = styled.div`
  width: 50%;
  @media (max-width: 1024px){
    width: 80%;
  }
`
export {InnerText};

const TitleContent = styled.h2`
  margin: unset;
  padding-bottom: 2rem;
  padding-top: 5rem;
`;
export { TitleContent };

const SubtitleContent = styled.p`
  margin: unset;
  padding-bottom: 2rem;
`;

export { SubtitleContent };

const VisibilityButton = styled.button`
    margin: 2rem 0;
    width: 10rem;
    font-family: Moderat,sans-serif;
    background-color: #195ab4;
    color: #fff;
    font-weight: 400;
    font-size: 15px;
    padding: 10px;
    line-height: 16px;
    cursor: pointer;
    border: none;
    border-color: transparent;
    border-style: solid;
    border-radius: 4px;
    outline: none;
    align-items: center;
    justify-content: center;
    transition-property: all;
    transition-duration: .15s;
`
export {VisibilityButton};