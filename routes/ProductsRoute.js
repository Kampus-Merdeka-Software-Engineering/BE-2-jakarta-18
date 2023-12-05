const { Router } = require('express');
const {
    getAllProducts,
    createProduct
} = require('../controller/ProductsController');

const router = Router();

router.get('/products', getAllProducts);
router.post('/products', createProduct);

module.exports = router;