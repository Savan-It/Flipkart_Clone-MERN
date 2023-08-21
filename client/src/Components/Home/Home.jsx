import React from 'react'

//import components
import Navbar from "../Home/Navbar"
import Banner from './Banner'
import { Box } from '@mui/material'

function Home() {
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