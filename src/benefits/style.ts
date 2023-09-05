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
  display: flex;
  align-items: center;
  gap: 5rem;

  @media (max-width: 1024px) {
  flex-direction: column;
    
  }
`;
export { BodyContent };

const ListBenefitis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 16rem;
  border: 1px solid black;
`;
export { ListBenefitis };

const LineContent = styled.div`
  display: flex;
  //flex-direction: column;
  //justify-content: space-around;
  gap: 2rem;
  //min-width: 22.5rem;

  @media (max-width: 1024px){

  }
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
  height: 16rem;
  width: 50%;

`
export {SquareContent}