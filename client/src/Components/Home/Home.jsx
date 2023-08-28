import {React, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

//import redux Actions
import { getProducts } from '../../Redux/Actions/productAction'


//import components
import Navbar from "../Home/Navbar"
import Banner from './Banner'
import { Box } from '@mui/material'

function Home() {

  const { products } = useSelector(state=> state.getProducts);
  console.log(products);
  const dispatch = useDispatch()  
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  return (
    <>
    <Navbar/>
    <Box style={{padding: "10px", background: "#f2f2f2"}}>
      <Banner/>
    </Box>
    </>
  )
}

export default Home