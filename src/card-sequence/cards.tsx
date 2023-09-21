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
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
};

const Cards: React.FC = () => {
  const[isMobile, setIsMobile] = React.useState<boolean>(window.innerWidth <1024)
  React.useEffect(() => {
    const handleResize = () => { setIsMobile(window.innerWidth <1024)}
    console.log(isMobile)
    window.addEventListener('resize', handleResize)
  },[isMobile])

  const settings: SliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll when navigating
    autoplay: false, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };


  return (
    <SectionContainer>
    <DivContainer>
      <TitleContent>Serviceee without bureaucracy!</TitleContent>
      <SubtitleContent>Request and track the process in a few steps through the platform.</SubtitleContent>
      {
        isMobile ?  
       ( <CardRow>
          <Slider {...settings}>
            { cardContent.map((item,index)=> 
              <Card key={index}>
                <CardHead>
                <img src={`../.././public/svgs/${item.svg}.svg`}/>
                <h3>{item.title}</h3>
               </CardHead>
                <p>{item.content}</p>
              </Card>)}

          </Slider>
        </CardRow> )
        :
      (  <CardRow>
          {cardContent.map((item, index)=> 
       <Card key={index}>
        <CardHead> 
          <img src={`../.././public/svgs/${item.svg}.svg`}/>
          <h3>{item.title}</h3>
         </CardHead>
          <p>{item.content}</p>
</Card>)}
        </CardRow>)
      }
    
    
    

  
      
      <CardButton> Fill form</CardButton>
    </DivContainer>
  </SectionContainer>

  )

}

export default Cards;