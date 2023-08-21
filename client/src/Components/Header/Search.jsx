import React from 'react'
import {Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Search() {

  const SearchContainer = styled(Box)`
    background: #fff;
    margin-left: 10px;
    width: 38%;
    display: flex;
  `
  const SearchInputBase = styled(InputBase)`
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    font-size: unset;
  `
  return (
    <SearchContainer>
        <SearchInputBase placeholder='Search for products, brands and more'/>
        <Box style={{color: "#2874f0", padding: 5, display: "flex"}}>
            <SearchIcon />
        </Box>
    </SearchContainer>
  )
}

export default Search