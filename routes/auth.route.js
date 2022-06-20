const express = require('express');
const router = express.Router();
const { signup, login, changePassword, forgotDetails} = require('../controllers/auth.controller');

router.post('/signup', signup);
router.post('/login', login);
router.post('/changePassword', changePassword);
router.post('/forgotDetails', forgotDetails);

module.exports = router;