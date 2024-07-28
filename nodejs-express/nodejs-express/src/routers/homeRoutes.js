import express from 'express';
import ProductController from '../controllers/productsController.js';

const adminRouter = express.Router();

const productController = new ProductController();

adminRouter.get('/', async (req, res) => {
  const username = 'Gilberto Santos'; // this get from database
  if (username === null) {
    res.status(404).send('User not found');
  }
  res.render('home', { username });
});

adminRouter.get('/list/products', async (req, res) => {
  const data = await productController.getAllProducts();
  res.render('list-products', { products: data });
});

adminRouter.get('/create/product', async (req, res) => {
  res.render('create-product', {});
});

adminRouter.get('/update/product/:id', async (req, res) => {
  res.render('update-product', { id: req.params.id * 1 });
});

adminRouter.get('/product/:id', async (req, res) => {
  const products = await productController.getProductById(req.params.id * 1);
  res.render('detail-product', {
    title: products[0].title,
    price: products[0].price,
    imageUrl: products[0].images[0],
  });
});

// 1 old module.exports when package json type commonjs or not defined
// export default  when package json type module
export default adminRouter;
