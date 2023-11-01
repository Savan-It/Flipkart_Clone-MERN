import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider,  styled } from '@mui/material';
import Countdown from 'react-countdown';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Timer = styled(Box)`
    display: flex;
  margin-left: 10px;
  color: #7f7f7f;
    align-items: center;
    `

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 20px;
    `

const ViewAllButton = styled(Button)`

    margin-left: auto;
    border-radius: 2px;
    background-color: #2874f0;
    font-size: 13px;
    font-weight: 600;
    `
const Image = styled('img')({
    width: "auto",
    height: 150,
})

const Text = styled(Typography)`
    font-size: 13px;
    margin-top: 5px;
`
const Slide = ({ products, title }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>;
    }

    return (
        <Box style={{ marginTop: "10px", backgroundColor: "#FFF" }}>
            <Box style={{ padding: "15px 20px", display: "flex"}}>
                <DealText>{title}</DealText>
                { title==='Deal of the Day' &&<Timer>
                    <img src={timerURL} alt='timer' style={{width: 24}} />
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                </Timer>
                }
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
        centerMode={true}
                
            >
                {
                    products.map((product) => {
                        return (
                            <Box key={product._id} textAlign="center" style={{padding:"25px 15px"}}>
                                <Image src={product.url} alt={product.title} />
                                <Text style={{ fontWeight: 600, color: "#212121"}}  >{product.title.shortTitle}</Text>
                                <Text style={{ color: "green" }}> {product.discount}  </Text>
                                <Text style={{ color: "#212121", opacity: ".6" }} > {product.tagline} </Text>

                            </Box>
                        )
                    })
                }
            </Carousel>
        </Box>
    );
};

export default Slide;
