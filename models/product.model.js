const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    cloud_id: {
        type: String,
    }
});

module.exports = mongoose.model('Product', ProductSchema);