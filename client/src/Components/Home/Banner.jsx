import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {bannerData} from '../../Constants/Data'
import { styled } from '@mui/material';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const CarouselImgae = styled('img')( ( {theme} ) => ({
    width: "100%",
    height: 280,
    [theme.breakpoints.down('md')]: {
        objectFit: "cover",
        height: 180,
    }
}));
function Banner() {
  return (
    <Carousel
    responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true} 
    autoPlaySpeed={3000}
    >
        {
            bannerData.map((data) => (
                <CarouselImgae key={data.id} src={data.url} alt='Banner'/>
            ))
        }
    </Carousel>
  )
}

export default Banner