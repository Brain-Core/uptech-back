const Impact = require('../models/impact.model');
const fs =  require('fs');

exports.create = async (req, res, next) => {
    
    try {
        const newImpact = new Impact({
            title: req.body.title,
            description: req.body.description,
            photo: req.file.path
        });
        newImpact.save()
            .then(() => res.status(201).json({ message: 'Impact créé !' }))
            .catch(error => res.status(400).json({ error: error.message }));

    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        const impactPayload = {
            title: req.body.title,
            description: req.body.description,
            photo: req.file.path
        };       
        const updatedImpact = await Impact.findByIdAndUpdate({_id: req.params.id}, impactPayload, {new: true});
        return res.send(updatedImpact);

    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}


exports.findAll = async (req, res) => {
    try {
        const impacts = await Impact.find();
        res.status(200).json(impacts);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.findOne = async (req, res) => {
    try {
        const impact = await Impact.findOne({ id: req.params.id });
        if (!impact) {
            return res.status(404).json({
                error: 'Impact Not found'
            });
        }
        return res.status(200).json(impact);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}