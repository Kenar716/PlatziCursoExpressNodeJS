const express = require('express');
const router = express.Router();
const productsMocks = require('../../utils/mocks/products');

//List
router.get('/', function(req, res) {
    const { query } = req.query;

    res.status(200).json({
        data: productsMocks,
        messsage: 'products listed'
    });
});

//Retrieve
router.get('/:productId', function(req, res) {
    const { productId } = req.params;

    res.status(200).json({
        data: productsMocks[0],
        messsage: 'product retrieved'
    });
});

//Create
router.post('/', function(req, res) {
    res.status(201).json({
        data: productsMocks[0],
        messsage: 'product created'
    });
});

//Replace / Create
router.put('/:productId', function(req, res) {
    const { productId } = req.params;

    res.status(200).json({
        data: productsMocks,
        messsage: 'product updated'
    });
});

//Delete
router.delete('/:productId', function(req, res) {
    const { productId } = req.params;
    
    res.status(200).json({
        data: productsMocks[0],
        messsage: 'product deleted'
    });
});

module.exports = router;