
import React from 'react'
import { Box, Button, styled } from '@mui/material'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material'



const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: "40%",
    padding: "40px 0 0 80px", 
    [theme.breakpoints.down('lg')]: {
        padding: "20px 40px",
    }
 }));



const Image = styled('img')`
    width: 95%;
    padding: 10px;
`
const ButtonStyle = styled(Button)(({ theme }) => ({
    width: "48%",
    height: 50,
    borderRadius: 2, 
    marginTop: 10,
     [theme.breakpoints.down('lg')]: {
        width: "46%",
    },
    [theme.breakpoints.down('sm')]: {
        width: "48%",
    } 
}))

function ActionItem({ product }) {
    return (
        <LeftContainer>
        <Box style={{padding: "15px 20px", border: "1px solid #f0f0f0"}}>
            <Image src={product.detailUrl} alt={product.title.shortTitle} />
        </Box>
            <ButtonStyle variant='contained' style={{ marginRight: 12, background: "#ff9f00" }}><Cart />Add to Cart</ButtonStyle>
            <ButtonStyle variant='contained' style={{ background: "#fb541b" }}><Flash />Buy Now</ButtonStyle>
        </LeftContainer>
    )
}

export default ActionItem