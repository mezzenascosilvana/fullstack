import express from 'express';
import adminRouter from './routers/homeRoutes.js';
import productsRouter from './routers/productsRoutes.js';
import userRouter from './routers/userRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json()); // middleware
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  // you can create your own json middleware
  req.requestTime = new Date().toString();
  next();
});
app.use((req, res, next) => {
  console.log('Request Time:', req.requestTime);
  next();
});
app.use(express.static(`${__dirname}/public/`));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/products', productsRouter);
app.use('/admin', adminRouter);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
