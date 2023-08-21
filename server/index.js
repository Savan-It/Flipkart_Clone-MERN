import express from 'express';
import connection from './Database/db.js';
import dotenv from 'dotenv'
import DefaultData from './default.js'

const app = express();
const PORT = 8000;

dotenv.config();
const userName= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;


connection(userName, password);

app.listen(PORT, ()=> console.log(`server is successfully runnning on Port ${PORT}`))

DefaultData();