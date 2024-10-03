import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';


// app config 
const app = express();

const port = process.env.PORT || 4000;

connectDB();





// middlewares

app.use(express.json());
app.use(cors());


// init routes
app.use('/api/songs',songRouter)

app.get('/',(req,res)=>res.send('api working'))

app.listen(port,()=>console.log(`server started on ${port}`))
