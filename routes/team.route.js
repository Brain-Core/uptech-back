const express = require('express');
const router = express.Router();
// const { create, update, findAll, findOne} = require('../controllers/team.controller');

router.post('/team', create);
router.put('/team', update);
router.get('/team', findAll);
router.get('/team/:id', findOne);

module.exports = router;