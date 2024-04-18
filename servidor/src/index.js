import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';
import compression from 'compression'
import products from './routes/products.js';
import categories from './routes/categories.js';
import dashboard from  './routes/analytics.js';
import inventory from './routes/inventory.js';

config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(compression())

app.use('/', products);


app.use('/', categories);
app.use('/', dashboard);
app.use('/', inventory);

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`App listen on PORT: ${PORT}`)
})