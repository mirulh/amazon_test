import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import userAllRouter from './routes/allUserRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

// you only need either one of these but keep it both together
app.use(express.json()); // it made sure POST method understands JSON body request
app.use(express.urlencoded({ extended: true })); // it made sure POST method understand data in URL-encoded format (typically from an HTML form)

app.use('/api/seed', seedRouter);

app.use('/api/products', productRouter);

// for user signin authentication
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`online at http://localhost:${port}`);
});

// this is all you need for a simple server
// data.products will be served at http://localhost:5000/api/products

// for testing to retrieve all users, not in the module

app.use('/api/allusers', userAllRouter);
