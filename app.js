const express =  require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('./db/db');
const path = require('path');

// bootstrap the app
const app = express();

const PORT = process.env.PORT || 4500;

// app middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(morgan('dev'));
if(process.env.NODE_ENV === 'development'){
    app.use(cors({origin: `${process.env.CLIENT_URI}`}))
}
app.use(cors({origin: '*'}))

// middleware
app.use('/api/auth/', require('./routes/auth.route'));
app.use('/api/products', require('./routes/product.route'));
app.use('/api/team/', require('./routes/team.route'));
app.use('/api/partner', require('./routes/partner.route'));
app.use('/api/impact', require('./routes/impact.route'));

app.get('/', async(req, res) => { 
    res.send('Uptech-agro API responding successfully');
});

app.listen(PORT, async () => {
    await console.log(`Server is running on port ${PORT}`);
    require('./db/db');
})