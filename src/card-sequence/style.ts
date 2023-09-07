import styled from 'styled-components'

const SectionContainer = styled.section`
  width: 100vw;
  background-color: rgb(230, 231, 234);
  
  @media (max-width: 1024px) {
  }
`;
export { SectionContainer };

const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1024px) {
  }
`;
export { DivContainer };

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

const CardRow = styled.div`
  display: flex;
  gap: 1rem;
`;
export {CardRow}
const Card = styled.div`
    background-color: white;
    padding: 24px;
    width: 200px;
    line-height: 150%;
`
export {Card};

const CardHead = styled.div`
    display: flex;
    //align-items: center;
`
export { CardHead}


const CardButton = styled.button`
    margin: 2rem 0;
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
export {CardButton};