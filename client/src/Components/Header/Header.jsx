import React from 'react'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'

// import Components
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`
const Component = styled(Link)`
    margin-left: 12%;  
    line-height: 0;
    text-decoration: none;
    color: inherit;
`

function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: "55px" }}>
                    <Component  to='/'>
                        <img src={logoURL} alt='logo' style={{ width: "75px" }} />
                        <Box>
                            <Typography style={{ fontSize: "10px", fontStyle: "italic" }}>Explore&nbsp;
                                <Box component={'span'} style={{ color: '#FFE500' }}>Plus</Box>
                                <img src={subURL} alt='sub-logo' style={{ width: 10, height: 10, marginLeft: 4 }} />
                            </Typography>
                        </Box>
                    </Component>
                <Search />
                <Box style={{ margin: "0 5% 0 auto" }}>
                    <CustomButtons />
                </Box>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header