import React from 'react'
import { SectionContainer, ListBenetis, DivContainer, HeaderContent, TitleContent,SubtitleContent, BodyContent } from './style'
import {benefitList} from './benefitList';

interface BenefitsInterface {
  title: string;
  subtitle: string;
  content: string;
}

const Benefits: React.FC = ()=> {
  
const [state, useState] = React.useState<BenefitsInterface | null>(null)
function handleClick(index){
  let selected = benefitList[index];
  useState(selected);
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
                {benefitList.map((item,index)=> 
                <div key={index}>
                 <div onClick={()=>handleClick(index)}>
                {index+1}
                 </div>
                
                </div>
                )}
              </ListBenetis>

              <div> {state ? state.content : "NADA"}</div>
            </BodyContent>

          </DivContainer>
        </SectionContainer>

  
}

export default Benefits;