import React from 'react'
import { SectionContainer, ListBenetis, DivContainer, HeaderContent, TitleContent,SubtitleContent, BodyContent } from './style'
import jsonData from './benefitList';

interface BenefitsInterface {
  title: number;
  content: string;
}

const Benefits: React.FC = ()=> {
const [state, useState] = React.useState<BenefitsInterface | null>(null)
function handleClick(index){
  let selected = jsonData[index];
  useState(selected)
}
  return <SectionContainer>
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
              Lista Json
              <ListBenetis>
                {jsonData.map((item,index)=> <div key={index} onClick={()=>handleClick(index)}> {item.title}</div> )}
              </ListBenetis>

              <div> {state ? state.content : "NADA"}</div>
            </BodyContent>

          </DivContainer>
        </SectionContainer>

  
}

export default Benefits;