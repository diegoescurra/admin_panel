import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import products from './routes/products.js';
import categories from './routes/categories.js';
import dashboard from  './routes/analytics.js';
import inventory from './routes/inventory.js';

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use('/', products);
app.use('/', categories);
app.use('/', dashboard);
app.use('/', inventory);


app.listen(3000, () => {
    console.log('Port 3000')
})