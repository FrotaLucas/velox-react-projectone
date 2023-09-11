import React from "react";
import Slider from "react-slick"
import { TitleContent, SubtitleContent, SectionContainer, DivContainer, CardRow, Card, CardHead, CardButton } from "./style";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { cardContent } from "./contentCard";

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  //rows: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
};

const Cards: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    //rows: 1,
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll when navigating
    autoplay: false, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };


  return (
    <SectionContainer>
    <DivContainer>
        <TitleContent>Service without bureaucracy!</TitleContent>
        <SubtitleContent>Request and track the process in a few steps through the platform.</SubtitleContent>
      {/* <CardRow>
        {cardContent.map((item, index)=> 
        <Card key={index}>
           <CardHead> 
             <img src={`./public/svgs/${item.svg}.svg`}/>
             <h3>{item.title}</h3>
           </CardHead>
           <p>{item.content}</p>
        </Card>)}
      </CardRow> */}
      <CardRow>
        <Slider {...settings}>
          { cardContent.map((item,index)=> 
            <Card key={index}>
              <CardHead>
               <img src={`./public/svgs/${item.svg}.svg`}/>
               <h3>{item.title}</h3>
              </CardHead>
              <p>
                {item.content}
              </p>
            </Card>)}

        </Slider>
      </CardRow>
    

  
      
      <CardButton> Fill form</CardButton>
    </DivContainer>
  </SectionContainer>

  )

}

export default Cards;