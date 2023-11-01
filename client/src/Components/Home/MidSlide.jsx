import React from 'react'
import Slide from './slide'
import { Box, styled } from '@mui/material'

const Component = styled(Box)`
    display: flex;
`
const LeftComponent = styled(Box)(({ theme }) => ({
    width: "81%",
    [theme.breakpoints.down('lg')]:
    {
        width: "100%",
    }
}));
const RightComponent = styled(Box)(({ theme }) => ({
    width: "19%",
    background: "white",
    marginLeft: 10,
    textAlign: "center",
    paddingTop: 6,
    marginTop: 10,
    [theme.breakpoints.down('lg')]:
    {
        display: "none",
    }
}));

function MidSlide({ products, title }) {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title={title} />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="ad" style={{ width: 225 }} />
            </RightComponent>
        </Component>
    )
}

export default MidSlide