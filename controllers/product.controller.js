const Product = require('../models/product.model');

exports.create = async(req, res) => {
    const { name, photo } = req.body;

    try {
        
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.update = async(req, res) => {
    try {
        
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.findAll = async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

exports.findOne = async(req, res) => {
    try {
        const product = await Product.findOne({id: req.params.id});
        if(!product){
            return res.status(404).json({
                error: 'Product Not found'
            });
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}