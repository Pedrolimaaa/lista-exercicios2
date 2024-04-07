const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/novo-salario', (req, res) => {
    const { salario, codigoCargo } = req.body;
    let percentualAumento;
    switch (codigoCargo) {
        case 101:
            percentualAumento = 0.05;
            break;
        case 102:
            percentualAumento = 0.075;
            break;
        case 103:
            percentualAumento = 0.1;
            break;
        default:
            percentualAumento = 0.15;
            break;
    }
    const novoSalario = salario * (1 + percentualAumento);
    const diferencaSalario = novoSalario - salario;
    res.json({ novoSalario, diferencaSalario });
});

module.exports = router;
