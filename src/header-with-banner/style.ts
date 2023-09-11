import styled from 'styled-components';

const SectionContainer = styled.section`
  background-image: url('/images/produtor-rural-desktop.png');
  background-size: cover;
  padding-top: 48px;
  padding-bottom: 48px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    background-image: url('/images/produtor-rural-mobile.png');
    justify-content: center;
    padding: 0 5rem;
  }
`;
export { SectionContainer };

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export { DivContainer };

const TitleContent = styled.h1`
  font-size: 3rem;
  color: #fff;

  @media (max-width: 1024px) {
  }
`;
export { TitleContent };

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: #fff;
  width: 60%;

  @media (max-width: 1024px) {
    width: auto;
  }
`;
export { SubTitle };

const ButtonHome = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
  border-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 0.8px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding: 11px 15px;
  margin-top: 20px;
  width: 12rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export { ButtonHome };
