const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    completeName: {
        type: String, 
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: String, 
        required: true
    },
    position: {
        type: String, 
        required: true
    },
    photo:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Team', TeamSchema);