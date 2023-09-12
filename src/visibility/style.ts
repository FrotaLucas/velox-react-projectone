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
  padding: 5rem 0;
  display: flex;
  gap: 10%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export  {DivContainer};

const InnerText = styled.div`
  width: 50%;
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