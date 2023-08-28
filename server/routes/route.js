
import express from 'express';

// import userSignup controller
import { userSignup, userLogin } from '../Controller/user-controller.js';
import {getProducts} from '../Controller/product-controller.js'

const router  = express.Router();

// routes for user authentication 
router.post('/signup', userSignup);
router.post('/login', userLogin);

//route for products
router.get('/products',getProducts);

export default router;