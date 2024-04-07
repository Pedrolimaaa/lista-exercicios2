const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/salario-vendedor', (req, res) => {
    const { nome, salarioFixo, totalVendas, percentualComissao } = req.body;
    const salarioTotal = salarioFixo + (totalVendas * percentualComissao / 100);
    res.json({ nome, salarioTotal });
});

module.exports = router;
