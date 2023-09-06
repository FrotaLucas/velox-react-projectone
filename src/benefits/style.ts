import styled from 'styled-components';

const SectionContainer = styled.section`
  width: 100vw;
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

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 1024px) {
  }
`;
export { HeaderContent };

const TitleContent = styled.p`
  margin: 2rem 0 2rem;
  text-transform: uppercase;
`;
export { TitleContent };

const SubtitleContent = styled.h2`
  margin-top: unset;
  margin-bottom: 2rem`;

export { SubtitleContent };

const BodyContent = styled.div`
  > div:first-child{
    display: flex;
    margin-bottom: 2rem;

  }
  @media (max-width: 1024px) {
  > div:first-child{
    flex-direction: column;
  }
  }
`;

export { BodyContent };

const ListBenefitis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 16rem;
  border: 1px solid black;

  @media (max-width: 1024px){
   margin-bottom: 2rem;
  }
`;
export { ListBenefitis };

const LineContent = styled.div`
  display: flex;
  gap: 1rem;
`
export {LineContent}

const SquareContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #b4b8bf;
  border-radius: 4px;
  padding: 48px;
  min-height: 18rem;
  width: 50%;

  @media (max-width: 1024px){
    width: 80%;
  }
`
export {SquareContent}

const BenefitsButton = styled.button`
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
export {BenefitsButton};
 
    