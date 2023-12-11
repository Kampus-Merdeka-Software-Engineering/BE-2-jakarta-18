const { Router } = require('express');
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controller/ProductsController');
const {
    getAllContacts,
    createContact
} = require('../controller/ContactsController');

const router = Router();

// products
router.get('/products/:productName', getAllProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct); // Tambahkan route untuk update
router.delete('/products/:id', deleteProduct);

// contacts
router.get('/contacts', getAllContacts);
router.post('/contacts', createContact);

module.exports = router;