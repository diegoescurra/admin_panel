import express from 'express';
import morgan from 'morgan';

import products from './routes/products.js'
import categories from './routes/categories.js'
import dashboard from  './routes/analytics.js'

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use('/', products)
app.use('/', categories)
app.use('/', dashboard)


app.listen(3000, () => {
    console.log('Port 3000')
})