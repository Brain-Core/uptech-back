const Impact = require('../models/impact.model');
const fs =  require('fs');

exports.create = async (req, res, next) => {
    const { title, description, photo } = (req.body)

    console.log('req.file.filename :>> ', req.file.filename);
    try {
        const newImpact = new Impact({
            ...req.body,
            photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
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
        const updatedImpact = req.file ?
            {
                ...JSON.parse(req.body.thing),
                photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            } : { ...req.body };
        Impact.updateOne({ _id: req.params.id }, { ...updatedImpact })
            .then(() => res.status(200).json({ message: 'Impact modifié avec succès !' }))
            .catch(error => res.status(400).json({ error }));

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