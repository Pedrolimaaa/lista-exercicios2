const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/preco-produtos', (req, res) => {
    const produtos = req.body.produtos;
    const maiorPreco = Math.max(...produtos.map(produto => produto.preco));
    const mediaPreco = produtos.reduce((acc, produto) => acc + produto.preco, 0) / produtos.length;
    res.json({ maiorPreco, mediaPreco });
});

module.exports = router;
