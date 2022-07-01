const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { create, update, findAll, findOne} = require('../controllers/team.controller');
const { upload } = require ('../helpers/helper.js');

router.post('/', auth, upload.single('photo'), create);
router.put('/', auth, upload.single('photo'), update);
router.get('/', auth, findAll);
router.get('/:id', auth, findOne);

module.exports = router;