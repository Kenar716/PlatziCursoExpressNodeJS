const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');
const { config } = require('../../config/index');

const cacheResponse = require('../../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONS } = require('../../utils/time');

const productService = new ProductsService();

router.get('/', async function (req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONS);
    const { tags } = req.query;

    try {
        // throw new Error('This is an error.');
        const products = await productService.getProducts({ tags });

        res.render('products', { products, dev: config.dev });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
