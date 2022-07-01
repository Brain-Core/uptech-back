const Team = require('../models/team.model');

exports.create = async(req, res) => {
    const { completeName, address, email, phone, position, photo} = req.body;
    try {
        const newTeam = new Team({
            completeName,
            address,
            email,
            phone,
            position,
            photo: req.file.path
        }).save();
        return res.status(201).json({
            msg: 'Team member created successfully',
            team: newTeam
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.update = async(req, res) => {
    try {
        const teamPayload = {
            completeName: req.body.completeName,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
            position: req.body.position,
            photo: req.file.path
        };       
        const updatedTeam = await Team.findByIdAndUpdate({_id: req.params.id}, teamPayload, {new: true});
        return res.send(updatedTeam);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.findAll = async(req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.findOne = async(req, res) => {
    try {
        const team = await Team.findOne({id: req.params.id});
        if(!team){
            return res.status(404).json({
                error: 'Team Not found'
            });
        }
        return res.status(200).json(team);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}