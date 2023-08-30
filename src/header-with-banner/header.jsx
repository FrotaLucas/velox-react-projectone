import React from 'react';
import {
  SectionContainer,
  DivContainer,
  TitleContent,
  ButtonHome,
  SubTitle,
} from './style';

const Header = () => {
  return (
    <SectionContainer>
      <DivContainer>
        <TitleContent> Rural Farmer</TitleContent>
        <SubTitle>
          Improve your agricultural production quickly and without bureaucracy
          powered by Velox Generation
        </SubTitle>
        <ButtonHome>Contact our team</ButtonHome>
      </DivContainer>
    </SectionContainer>
  );
};

export default Header;
