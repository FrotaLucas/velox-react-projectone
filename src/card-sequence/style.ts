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

  & .slick-list {
    max-width: 80vw;
  }


  @media (max-width: 1024px) {
    display: unset;
    gap: unset;
  
  & .slick-slide > div {
    margin-left: 1rem; /* Add margin to each slide's content */
    margin-right: 1rem;
    //background-color: #f0f0f0; /* Background color for each slide */
    //border: 1px solid #ddd; /* Border for each slide */
    //padding: 2rem; /* Padding for each slide's content */
    text-align: center; /* Center-align text within each slide */
    //box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); /* Box shadow for each slide */
}
  & .slick-slide > div > div {
    width: 80% !important;
    height: 10rem;
    padding: 10px;
  }
 
  }
`;
export {CardRow}
const Card = styled.div`
    background-color: white;
    //height: 5rem;
    //padding: 10px;
    //width: 200px;
`
export {Card};

const CardHead = styled.span`
    display: flex;
    //align-items: center;
    //align-items: center;
    @media (max-width: 1024px){
      gap: 0.5rem;
      align-items: flex-end;
    }
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