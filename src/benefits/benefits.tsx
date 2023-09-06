import React from 'react'
import { SectionContainer, ListBenefitis, DivContainer, HeaderContent, TitleContent,SubtitleContent, BodyContent, LineContent,SquareContent, BenefitsButton } from './style'
import {benefitList} from './benefitList';


interface BenefitsInterface {
  title: string;
  subtitle: string;
  content: string;
}

const Benefits: React.FC = ()=> {
const [state, useState] = React.useState<BenefitsInterface | null>(benefitList[0])
function handleClick(index){
  let selected = benefitList[index];
  useState(selected);
}

const [isMObile, setIsMobile] = React.useState(window.innerWidth <= 1024)
React.useEffect( ()=> {
  const handleResize = () => { setIsMobile(window.innerWidth <=1024)}
  window.addEventListener('resize', handleResize)

  //unmounts of the component
  return ( () => window.removeEventListener('resize', handleResize))

}, [])


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
              <div>
              <ListBenefitis>
                {benefitList.map((item,index)=> 
                <LineContent key={index}>
                 <div onClick={()=>handleClick(index)}>
                {index+1}
                 </div>
                 {
                  !isMObile &&  <div>
                  {item.title}
                </div>
                 }
                </LineContent>
                )}
              </ListBenefitis>
              <SquareContent> 
                <h2>{state?.subtitle}</h2>
                <p>{state?.content}</p>
              </SquareContent>
              </div>
              {!isMObile && <BenefitsButton>Request Contact</BenefitsButton>}
            </BodyContent>
               {isMObile && <BenefitsButton>Request Contact</BenefitsButton>}

          </DivContainer>
        </SectionContainer>

  
}

export default Benefits;