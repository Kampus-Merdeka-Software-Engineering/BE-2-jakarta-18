const { Router } = require('express');
const {
    getAllProducts,
    createProduct
} = require('../controller/ProductsController');
const {
    getAllContacts,
    createContact
} = require('../controller/ContactsController');

const router = Router();

// products
// router.get('/products', getAllProducts);
router.get('/products/:productName', getAllProducts);
router.post('/products', createProduct);

// contacts
router.get('/contacts', getAllContacts);
router.post('/contacts', createContact);

module.exports = router;