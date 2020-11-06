import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';

dotenv.config();

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);


app.listen(port, () => {
  console.log(`App listening on ${port}`)
});