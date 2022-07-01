const mongoose =  require('mongoose');

const ImpactSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    photo:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Impact', ImpactSchema);