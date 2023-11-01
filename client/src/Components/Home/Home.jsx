import {React, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

//import redux Actions
import { getProducts } from '../../Redux/Actions/productAction'


//import components
import Navbar from "../Home/Navbar"
import Banner from './Banner'
import { Box } from '@mui/material'
import Slide from './slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'


function Home() {

  const { products } = useSelector(state=> state.getProducts);

  const dispatch = useDispatch()  
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  return (
    <>
    <Navbar/>
    <Box style={{padding: "10px", background: "#f2f2f2"}}>
      <Banner/>
      <MidSlide products={products} title={"Deal of the Day"}/>
      <MidSection/>
      <Slide products={products} title={"Top Deals on Electronics"}/>
      <Slide products={products} title={"Discount for You"}/>
      <Slide products={products} title={"Suggesting Items"}/>
      <Slide products={products} title={"Top Selection"}/>
      <Slide products={products} title={"Season's top Picks"}/>
    </Box>
    </>
  )
}

export default Home