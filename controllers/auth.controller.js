const User = require('../models/users.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async(req, res) => {
    const { name, email, password } =  req.body;
    try {
       await bcrypt.hash(password, 10)
        .then((hash) => {
            const newUser = new User({
                name, email, password: hash
            });

            newUser.save()
            return res.status(201).json({
                message: 'Your account has been created successfully, please log in'
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err.message
            })
        });

    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }

}

exports.login = async(req, res) => {
    const { email, password } = req.body;
    try {
        // find if user exists
        const userFound = await User.findOne({email});
        if(!userFound){
            return res.status(404).json({
                error: 'User not found'
            });
        }

        // check if password is correct
        bcrypt.compare(password, userFound.password)
            .then((isMatch) => {
                if(!isMatch){
                    return res.status(401).json({})
                }

                return res.status(200).json({
                    userId: userFound._id,
                    token: jwt.sign(
                        {userId: userFound._id},
                        process.env.JWT_SECRET,
                        {expiresIn: '24h'}
                    )
                });
            })
            .catch(error => {
                return res.status(500).json({
                    error: error.message
                })
            })
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.changePassword = async(req, res) => {
    
}

exports.forgotDetails = async(req, res) => {
    
}