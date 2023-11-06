import React from 'react'
import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material'
import { LocalOffer as Badge } from '@mui/icons-material';

const StyleText = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
    vertical-align: baseline;
`
const StyleBadge = styled(Badge)`
    color: #00CC00;
    margin-right: 7px;
    font-size: 15px;
`

const ColumnTest = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td{
        font-size: 14px;
        margin-top: 5px;
        border: none;
    }
`
    
function ProductDetail({ product }) {
    const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
                8 Ratings & 1 Reviews
                <Box component='span'><img src={fassured} alt="rating" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box> &nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: "#878787" }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: "#388E3C" }}>{product.price.discount} off</Box>
            </Typography>
            <Typography style={{ marginTop: 20, fontWeight: 600 }}>Available Offers</Typography>
            <Box>
                <StyleText>
                    <StyleBadge /><span style={{ color: "#388E3C" }}>Bank Offer</span> 10% off on ICICI Bank Credit Cards, up to ₹1500. On orders of ₹4999 and above
                </StyleText>
                <StyleText>
                    <StyleBadge /><span style={{ color: "#388E3C" }}>Bank Offer</span> 10% off on ICICI Bank Debit Cards, up to ₹500. On orders of ₹4999 and above
                </StyleText>
                <StyleText>
                    <StyleBadge /><span style={{ color: "#388E3C" }}>Bank Offer</span> Flat ₹1500 Off
                </StyleText>
                <StyleText>
                    <StyleBadge /><span style={{ color: "#388E3C" }}>Special Price</span> Get extra 10% off (price inclusive of discount)
                </StyleText>
                <StyleText>
                    <StyleBadge /><span style={{ color: "#388E3C" }}>Combo Offer</span> Buy 2 items save 5%;Buy 3 or more save 10%
                </StyleText>
            </Box>
            <Table>
                <TableBody>
                    <ColumnTest>
                        <TableCell style={{color: "#787878"}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivered By {date.toDateString()} | ₹40 </TableCell>
                    </ColumnTest>
                    <ColumnTest>
                        <TableCell style={{color: "#787878"}}>Waranty</TableCell>
                        <TableCell >No waranty</TableCell>
                    </ColumnTest>
                    <ColumnTest>
                        <TableCell style={{color: "#787878"}}>Seller</TableCell>
                        <TableCell>
                            <Box component='span' style={{color: "#2874F0"}}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                         </TableCell>
                    </ColumnTest>
                    <ColumnTest>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="AdSuperCoin" style={{width: 390}}/>
                        </TableCell>
                    </ColumnTest>
                    <ColumnTest>
                        <TableCell style={{color: "#787878"}}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>
                    </ColumnTest>
                </TableBody>
            </Table>

        </>
    )
}

export default ProductDetail