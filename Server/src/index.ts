import 'dotenv/config'
import express, {Request, Response, NextFunction} from 'express';
import router from "./routers/router";
import cors from 'cors'


const app = express();


app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }))

app.use("/", router);


app.listen(4002,()=>{
  console.log('start')
})