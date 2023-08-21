import React, { useState } from 'react'
import { Box, Button, Typography, styled} from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart';

//commponents
import LoginDialog from '../Login/LoginDialog';

const ButtonContainer = styled(Box)`
    display: flex;
    align-items: center;
    & > button, & > p, & > div{
        margin-right: 30px;
        font-size: 16px;
    }
`

const LoginButton = styled(Button)`
    color: #2874F0;
    background: #FFFFFF;
    font-weight: 600;
    padding: 5px 40px;
    border-radius: 2px;
    text-transform: none;
    box-shadow: none;
    height: 32px;
    "&:hover" :{
        background: ##FFFFFF;
    }
`
function CustomButtons() {

    const [open,setOpen]= useState(false);

    const openDialog = () =>{
        setOpen(true)
    }
  return (
    <ButtonContainer>
        <LoginButton variant='contained' onClick={openDialog}>Login</LoginButton>
        <Typography style={{marginTop: 3, width: 135}}>Become a Sellar</Typography>
        <Typography style={{marginTop: 3}}>More</Typography>
        <Box style={{display: "flex"}}>
            <ShoppingCart/> 
            <Typography>Cart</Typography>
        </Box>
        <LoginDialog open={open} setOpen={setOpen}/>
    </ButtonContainer>
    )
}

export default CustomButtons