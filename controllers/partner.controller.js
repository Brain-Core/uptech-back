const Partner = require('../models/partner.model');

exports.create = async(req, res) => {
    const { name, logo } = req.body;
    try {
        const newPartner = new Partner({
            name: req.body.name,
            logo: req.file.path
        }).save();
        return res.status(201).json({
            msg: 'Partner created successfully',
            Partner: newPartner
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.update = async(req, res) => {
    try {
        const partnerPayload = {
            name: req.body.name,
            photo: req.file.path
        };       
        const updatedPartner = await Partner.findByIdAndUpdate({_id: req.params.id}, partnerPayload, {new: true});
        return res.send(updatedPartner);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.findAll = async(req, res) => {
    try {
        const partner = await Partner.find();
        res.status(200).json(partner);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.findOne = async(req, res) => {
    try {
        const partner = await Partner.findOne({id: req.params.id});
        if(!partner){
            return res.status(404).json({
                error: 'Partner Not found'
            });
        }
        return res.status(200).json(partner);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}