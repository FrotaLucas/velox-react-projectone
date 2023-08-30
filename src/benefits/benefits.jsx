import React from 'react';
import {
  SectionContainer,
  DivContainer,
  HeaderContent,
  TitleContent,
  SubtitleContent,
  BodyContent,
  ListBenetis,
} from './style';

import jsonData from './benefitList.json';

const Benefits = () => {
  return (
    <SectionContainer>
      <DivContainer>
        <HeaderContent>
          <TitleContent>
            Request and track your request in a few steps through the platform.
          </TitleContent>
          <SubtitleContent>
            Check out the advantages of Velox for rural producers.
          </SubtitleContent>
        </HeaderContent>
        <BodyContent>
          Lista de Json
          <ListBenetis>
            {Object.values(jsonData).map((item) => (
              <div key={item.index}> {item.index}</div>
            ))}
          </ListBenetis>
          <div>Hellow</div>
        </BodyContent>
      </DivContainer>
    </SectionContainer>
  );
};

export default Benefits;
