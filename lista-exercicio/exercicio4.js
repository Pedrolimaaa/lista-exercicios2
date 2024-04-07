const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/velocidade-media', (req, res) => {
    const { nomePiloto, distanciaKm, tempoHoras } = req.body;
    const velocidadeMedia = distanciaKm / tempoHoras;
    res.json({ nomePiloto, velocidadeMedia });
});

module.exports = router;
