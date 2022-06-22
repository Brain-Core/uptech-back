const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { create, update, findAll, findOne} = require('../controllers/product.controller');

router.post('/', auth, create);
router.put('/', auth, update);
router.get('/', auth, findAll);
router.get('/:id', auth, findOne);

module.exports = router;