import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import products from './routes/products.js'

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use('/', products)


app.listen(3000, () => {
    console.log('Port 3000')
})