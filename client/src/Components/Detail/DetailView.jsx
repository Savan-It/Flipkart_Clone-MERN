import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../Redux/Actions/productAction'
import { Box, Grid, styled } from '@mui/material'
import ActionItem from './ActionItem'
import ProductDetail from './ProductDetail'

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
  `

const Container = styled(Grid)`
background:#FFFFFF; 
`

const RightContainer = styled(Grid)`
margin-top: 50px;
padding-left: 30px;
`
function DetailView() {

  const dispetch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails)

  useEffect(() => {
    if (product && id !== product.id)
      dispetch(getProductDetails(id))
  }, [dispetch, id, product, loading])
  return (

    <Component>
      {
        product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      }
    </Component>
  )
}

export default DetailView