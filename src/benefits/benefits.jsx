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
import jsonData from './benefitList';

const Benefits = () => {
  const [state, setState] = React.useState(null);
  function handleClick(index) {
    let selected = jsonData[index];
    setState(selected);
  }
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
            {jsonData.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  handleClick(index);
                }}
              >
                {item.content}
              </div>
            ))}
          </ListBenetis>
          {/* <div>{Object.keys(jsonData)}</div> */}
          <div>{state ? state.title : 'Resultado'}</div>
        </BodyContent>
        {/*  */}
      </DivContainer>
    </SectionContainer>
  );
};

export default Benefits;
