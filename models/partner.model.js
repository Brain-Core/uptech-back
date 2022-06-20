const mongoose = require('mongoose');

const PartnerSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    logo:{
        type: String,
        required: true
    },
    cloud_id: {
        type: String
    }
});

module.exports = mongoose.model('Partner', PartnerSchema);