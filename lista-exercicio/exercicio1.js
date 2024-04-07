const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// Adicione o middleware bodyParser para analisar o corpo da solicitação como JSON
router.use(bodyParser.json());

// Altere 'router.get' para 'router.post'
router.post('/estoque-medio', (req, res) => {
    const { quantidadeMinima, quantidadeMaxima } = req.body;
    if (!quantidadeMinima || !quantidadeMaxima) {
        return res.status(400).json({ error: 'É necessário informar a quantidade mínima e máxima.' });
    }

    const estoqueMedio = (parseFloat(quantidadeMinima) + parseFloat(quantidadeMaxima)) / 2;
    res.json({ estoqueMedio });
});

module.exports = router;
