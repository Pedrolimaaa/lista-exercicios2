const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/peso-ideal', (req, res) => {
    const { altura, sexo } = req.body;
    const pesoIdeal = sexo === 'masculino' ? (72.7 * altura) - 58 : (62.1 * altura) - 44.7;
    res.json({ pesoIdeal });
});

module.exports = router;
