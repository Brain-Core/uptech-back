const mongoose = require('mongoose');
const mongooseUniqueValidator =  require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 32
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model("User", UserSchema);