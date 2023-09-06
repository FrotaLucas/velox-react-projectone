import React from "react";
import { TitleContent, SubtitleContent, SectionContainer, DivContainer, CardRow, Card, CardHead } from "./style";
import { cardContent } from "./contentCard";

const Cards: React.FC = () => {

  return (
    <SectionContainer>
    <DivContainer>
      <TitleContent>Service without bureaucracy!</TitleContent>
      <SubtitleContent>Request and track the process in a few steps through the platform.</SubtitleContent>
      <CardRow>
        {cardContent.map((item, index)=> 
        <Card key={index}>
           <CardHead> 
             <img src={`./public/svgs/${item.svg}.svg`}/>
             <h3>{item.title}</h3>
           </CardHead>
           <p>{item.content}</p>
        </Card>)}
      </CardRow>

    </DivContainer>
  </SectionContainer>

  )

}

export default Cards;