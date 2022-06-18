const express =  require('express');
const cors = require('cors');
const morgan = require('morgan');

// bootstrap the app
const app = express();

const PORT = process.env.PORT || 4500;

// app middleware
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(morgan('dev'));

// app routes
app.get('/', async(req, res) => { 
    res.send('Uptech Agro API responding successfully');
});

app.listen(PORT, async () => {
    await console.log(`Server is running on port ${PORT}`);
})