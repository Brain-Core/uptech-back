const express =  require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('./db/db');

// bootstrap the app
const app = express();

const PORT = process.env.PORT || 4500;

// app middleware
app.use(express.json());
app.use(morgan('dev'));
if(process.env.NODE_ENV === 'development'){
    app.use(cors({origin: `${process.env.CLIENT_URI}`}))
}

// app routes
const authRoutes = require('./routes/auth.route');
const productRoutes =  require('./routes/product.route');
const impactRoutes =  require('./routes/impact.route');
const teamRoutes =  require('./routes/team.route');
const partnerRoutes =  require('./routes/partner.route');

// middleware
app.use('/api/v1', authRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', teamRoutes);
app.use('/api/v1', partnerRoutes);
app.use('/api/v1', impactRoutes);

app.get('/', async(req, res) => { 
    res.send('Uptech Agro API responding successfully');
});

app.listen(PORT, async () => {
    await console.log(`Server is running on port ${PORT}`);
    require('./db/db');
})