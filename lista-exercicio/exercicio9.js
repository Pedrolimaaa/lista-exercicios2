
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.post('/salario-funcionario', (req, res) => {
    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body;

    // Valor da hora trabalhada é igual a 1/5 do salário mínimo
    const valorHora = salarioMinimo / 5;

    // Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada
    let salarioMes = horasTrabalhadas * valorHora;

    // Para cada dependente acréscimo de 32 reais
    salarioMes += dependentes * 32;

    // Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50%
    const valorHoraExtra = valorHora * 1.5;
    salarioMes += horasExtras * valorHoraExtra;

    // Salário bruto é igual ao salário do mês
    let salarioBruto = salarioMes;

    // Cálculo do valor do imposto de renda retido na fonte
    let impostoRenda;
    if (salarioBruto <= 2000) {
        impostoRenda = 0;
    } else if (salarioBruto <= 5000) {
        impostoRenda = salarioBruto * 0.1;
    } else {
        impostoRenda = salarioBruto * 0.2;
    }

    // Salário líquido é igual ao salário bruto menos IRRF
    let salarioLiquido = salarioBruto - impostoRenda;

    // Gratificação
    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    // Salário a receber do funcionário é igual ao salário líquido mais a gratificação
    const salarioReceber = salarioLiquido + gratificacao;

    res.json({ salarioReceber });
});

module.exports = router;

