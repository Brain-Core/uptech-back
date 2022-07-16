const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { create, update, findAll, findOne } = require('../controllers/impact.controller');
const { upload } = require('../helpers/helper.js');

router.post('/', auth, upload.single('photo'), create);
router.put('/:id', auth, upload.single('photo'), update);
router.get('/', findAll);
router.get('/:id', findOne);

module.exports = router;