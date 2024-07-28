import express from 'express';
import UserController from '../controllers/userController.js';
const userRouter = express.Router();
// CRUD
// http://www.yourwebsite.com/api/v1/users

const userController = new UserController();

// Create - POST User
userRouter.post('/', (req, res) => {
  userController.createUser(req.body);
  res.status(201).json({ message: 'POST users' });
});

// Read - GET All Users
userRouter.get('/', (req, res) => {
  const users = userController.getAllUsers();
  res.status(200).json(users);
});

// Read -GET User by ID
userRouter.get(`/:id`, (req, res) => {
  userController.getUserById(req.params.id * 1);
  res.status(200).json({ message: `GET by Id: ${req.params.id}` });
});

// Update - PUT User by ID
userRouter.put(`/:id`, (req, res) => {
  userController.updateUserById(req.body, req.params.id * 1);
  res.status(200).json({ message: `PUT by Id: ${req.params.id}` });
});

// Delete - DELETE User by ID
userRouter.delete(`/:id`, (req, res) => {
  userController.deleteUserById(req.params.id * 1);
  res.status(204).json({ message: `DELETE by Id: ${req.params.id}` });
});

export default userRouter;
