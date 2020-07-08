const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');
const productService = new ProductsService();

// List
router.get('/', async function (req, res, next) {
    const { tags } = req.query;
    console.log('req', req.query);

    try {
        const products = await productService.getProducts({ tags });

        res.status(200).json({
            data: products,
            messsage: 'products listed'
        });
    } catch (err) {
        next(err);
    }
});

// Retrieve
router.get('/:productId', async function (req, res, next) {
    const { productId } = req.params;
    console.log('req', req.params);

    try {
        const product = await productService.getProduct({ productId });

        res.status(200).json({
            data: product,
            messsage: 'product retrieved'
        });
    } catch (err) {
        next(err);
    }
});

// Create
router.post('/', async function (req, res, next) {
    const { body: product } = req;
    console.log('req', req.body);

    try {
        const createdProduct = await productService.createProduct({ product });

        res.status(201).json({
            data: createdProduct,
            messsage: 'product created'
        });
    } catch (err) {
        next(err);
    }
});

// Replace / Create
router.put('/:productId', async function (req, res, next) {
    const { productId } = req.params;
    const { body: product } = req;
    console.log('req', req.params, req.body);

    try {
        const updatedProduct = await productService.updateProduct({ productId, product });

        res.status(200).json({
            data: updatedProduct,
            messsage: 'product updated'
        });
    } catch (err) {
        next(err);
    }
});

// Delete
router.delete('/:productId', async function (req, res, next) {
    const { productId } = req.params;
    console.log('req', req.params);

    try {
        const deletedProduct = await productService.deleteProduct({ productId });

        res.status(200).json({
            data: deletedProduct,
            messsage: 'product deleted'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
