import express from 'express';
import User from '../models/userModel.js';

const userAllRouter = express.Router();

userAllRouter.get('/', async (req, res) => {
  const allUsers = await User.find();
  res.send(allUsers);
});

export default userAllRouter;
