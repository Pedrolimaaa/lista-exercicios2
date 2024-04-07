const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/reajuste-salarial', (req, res) => {
    const { salario } = req.body;
    const salarioReajustado = salario <= 2000 ? salario * 1.5 : salario * 1.3;
    res.json({ salarioReajustado });
});

module.exports = router;
