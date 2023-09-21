import React from 'react'
import{ SectionContainer,  DivContainer, InnerText, TitleContent, SubtitleContent, VisibilityButton, DivContent}  from './style'
import creditoImage from '/images/credito-agro-analysis.png'

const Visibility: React.FC = () => {
  return (
  <SectionContainer>
    <DivContainer>
      <DivContent>
        <InnerText>
          <TitleContent> More visibility</TitleContent>
          <SubtitleContent> Access all steps of internet granting on our exclusive platform. The system is simple and intuitive and provides a quick journey without the bureaucracy compared with other players.
          </SubtitleContent>          
        </InnerText>
        <img src={creditoImage}/>
      </DivContent>
    <VisibilityButton>Become a partner</VisibilityButton>
    </DivContainer>
  </SectionContainer>)
}

export default Visibility