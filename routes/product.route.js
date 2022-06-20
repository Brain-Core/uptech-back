const express = require('express');
const router = express.Router();
// const { create, update, findAll, findOne} = require('../controllers/product.controller');

router.post('/products', create);
router.put('/products', update);
router.get('/products', findAll);
router.get('/products/:id', findOne);

module.exports = router;