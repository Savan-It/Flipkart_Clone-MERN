import React from 'react'
import {imageURL}   from '../../Constants/Data'
import { Grid, styled } from '@mui/material'

const Wrapper = styled(Grid)`
    margin-top: 10px;
    `
const Image = styled('img')(({theme})=>({
    width: "100%",
    marginTop: 10,
    [theme.breakpoints.down('md')]:
    {
        objectFit: "cover",
        height: 120,
    }
}));

function MidSection() {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>

    <Wrapper container>
            {
                imageURL.map((image, index) => (
                    <Grid key={index} item lg={4} md={4} sm={12} xs={12}>
                    <img src={image} alt='Banner'  style={{width: "100%"}}/>
                    </Grid>
                ))
            }
    </Wrapper>
    <Image src={url} alt="covid"/>
    </>
  )
}

export default MidSection