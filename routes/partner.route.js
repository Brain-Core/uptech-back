const express = require('express');
const router = express.Router();
// const { create, update, findAll, findOne} = require('../controllers/partner.controller');

router.post('/partner', create);
router.put('/partner', update);
router.get('/partner', findAll);
router.get('/partner/:id', findOne);

module.exports = router;