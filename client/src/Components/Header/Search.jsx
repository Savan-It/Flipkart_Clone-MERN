import React, { useState, useEffect } from 'react'
import { Box, InputBase, List, ListItem, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/productAction';
import { Link } from 'react-router-dom';

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

const ListWrapper = styled(List)`
position: absolute;
background: #fff;
color: #000;
margin-top: 36px;
`

function Search() {

  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }
    , [dispatch])

  const [text, setText] = useState('')
  const getText = (text) => {
    setText(text)
  }
  return (
    <SearchContainer>
      <SearchInputBase placeholder='Search for products, brands and more' 
      onChange={(e) => getText(e.target.value)} 
      value={text}/>
      <Box style={{ color: "#2874f0", padding: 5, display: "flex" }}>
        <SearchIcon />
      </Box>
      {
        text &&
        <ListWrapper>
          {
            products.filter((product) => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => {
              return (
                <ListItem key={product.id}>
                <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}
                 onClick={() => setText('')}>
                  {product.title.longTitle}
                 
                  </Link>
                </ListItem>
              )
            })
          }
        </ListWrapper>
      }
    </SearchContainer>
  )
}

export default Search