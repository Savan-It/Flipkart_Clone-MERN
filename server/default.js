import mongoose from 'mongoose';
import {products} from './Constants/data.js'
import Product  from './model/product-schema.js';


const DefaultData = async () =>{
    try {
        await  Product.insertMany(products);
        console.log("Default data successfully interted in Database!!");
    } catch (error) {
        console.log("Error while inserting default data: ", error.message);
    }
}

export default DefaultData;