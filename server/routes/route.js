
import express from 'express';

// import userSignup controller
import { userSignup, userLogin } from '../Controller/user-controller.js';

const router  = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

export default router;