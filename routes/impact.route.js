const express = require('express');
const router = express.Router();
// const { create, update, findAll, findOne} = require('../controllers/impact.controller');

router.post('/impact', create);
router.put('/impact', update);
router.get('/impact', findAll);
router.get('/impact/:id', findOne);

module.exports = router;