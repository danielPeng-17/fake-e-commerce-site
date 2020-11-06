import express from 'express';
import data from '../data';

const router = express.Router();

router.get('/', async (req, res) => {
    res.send(data.products);
});

router.get('/:id', async (req, res) => {
    let product;

    for (let i = 0; i < data.products.length; i++){
        if (data.products[i]._id === req.params.id){
            product = data.products[i];
        }
    }

    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found.' });
    }
});

export default router;