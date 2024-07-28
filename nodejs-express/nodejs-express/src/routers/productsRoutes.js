// const f require package json type commonjs or not defined
// imports  when package json type module
import express from 'express';
import ProductController from '../controllers/productsController.js';

// create a router for products
const productsRouter = express.Router();
const productController = new ProductController();

productsRouter.get('/', async (req, res) => {
  const result = await productController.getAllProducts();
  res.status(200).json(result);
});

productsRouter.get('/:id', async (req, res) => {
  const result = await productController.getProductById(req.params.id * 1);
  res.status(200).json(result);
});

productsRouter.post('/', async (req, res) => {
  const result = await productController.create(req.body);
  res.status(201).json(result);
});

productsRouter.delete('/:id', async (req, res) => {
  const result = await productController.delete(req.params.id * 1);
  res.status(204).json(result);
});

productsRouter.put('/:id', async (req, res) => {
  const result = await productController.update(req.body, req.params.id * 1);
  res.status(200).json(result);
});

// 1 old module.exports when package json type commonjs or not defined
// export default  when package json type module
export default productsRouter;
