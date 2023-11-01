import React from 'react'
import {Box, Typography, styled} from "@mui/material"
import {navData} from "../../Constants/Data"


function Navbar() {

const Container = styled(Box)(({theme})=>({
    display: "flex",
    margin: "55px 50px 0 50px",
    justifyContent: "space-between",
    overflow: "hidden",
    [theme.breakpoints.down('lg')]: {
        margin: 0,
    } 
}));

  const Box2Wrapper = styled(Box)`
    padding: 12px 8px;
    text-align: center;
  `
  return (
    <Container>
      {
        navData.map((data,index) => (
           <Box2Wrapper key={index}>
              <img src={data.url} alt='NavItems' style={{width: 64}}/>
              <Typography style={{fontSize: "14px", fontWeight: "600", fontFamily: "inherit" }}>{data.text}</Typography>
          </Box2Wrapper>
        )
        )
      }
    </Container>
  )
}

export default Navbar