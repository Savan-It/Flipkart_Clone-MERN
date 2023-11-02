
import express from 'express';

// import userSignup controller
import { userSignup, userLogin } from '../Controller/user-controller.js';
import {getProducts, getProductById} from '../Controller/product-controller.js'

const router  = express.Router();

// routes for user authentication 
router.post('/signup', userSignup);
router.post('/login', userLogin);

//route for products
router.get('/products',getProducts);
router.get('/product/:id',getProductById);

export default router;