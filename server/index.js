import express from 'express';
import connection from './Database/db.js';
import dotenv from 'dotenv'
import DefaultData from './default.js'
import cors from 'cors'
import bodyParser from 'body-parser';

//import router
import router from './routes/route.js';

const app = express();
const PORT = 8000;

dotenv.config();

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use('/', router);

const userName= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;


connection(userName, password);

app.listen(PORT, ()=> console.log(`server is successfully runnning on Port ${PORT}`))

DefaultData();