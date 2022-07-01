const mongoose = require('mongoose');
require('dotenv').config();

// connect to the DB
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log('DB CONNECTED SUCCESSFULLY'))
    .catch(err => console.log('DB CONNECTION ERROR : ', err));

