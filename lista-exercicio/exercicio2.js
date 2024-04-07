const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// Adicione o middleware bodyParser para analisar o corpo da solicitação como JSON
router.use(bodyParser.json());

router.post('/aumento-salario', (req, res) => {
    const { salario } = req.body;
    if (salario < 1000) {
        const salarioReajustado = salario * 1.3; // Aumento de 30%
        return res.json({ salarioReajustado });
    } else {
        return res.json({ message: 'Funcionário não tem direito ao aumento.' });
    }
});

module.exports = router;
