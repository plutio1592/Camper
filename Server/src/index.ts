import 'dotenv/config'
import express, {Request, Response, NextFunction} from 'express';
import router from "./router/router";
import cors from 'cors'

const app = express();


app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }))

app.get('/', (request:Request, response:Response, next: NextFunction) => {
  response.json(`정배홍이 되나?`);
});

app.use("/router", router);

app.listen(4002,()=>{
  console.log('start')
})