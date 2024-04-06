const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. API para calcular estoque médio
app.post('/estoque-medio', (req, res) => {
  const { quantidadeMinima, quantidadeMaxima } = req.body;
  const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;
  res.json({ estoqueMedio });
});

// 2. API para reajuste de salário
app.post('/reajuste-salario', (req, res) => {
  const { salario } = req.body;
  if (salario < 1000) {
    const salarioReajustado = salario * 1.3; // Aumento de 30%
    res.json({ salarioReajustado });
  } else {
    res.json({ message: 'Funcionário não tem direito ao aumento' });
  }
});

// 3. API para calcular salário total do vendedor
app.post('/salario-vendedor', (req, res) => {
  const { nome, salarioFixo, totalVendas, percentualComissao } = req.body;
  const salarioTotal = salarioFixo + (totalVendas * percentualComissao / 100);
  res.json({ nome, salarioTotal });
});

// 4. API para calcular velocidade média de um piloto
app.post('/velocidade-media', (req, res) => {
  const { nomePiloto, distancia, tempo } = req.body;
  const velocidadeMedia = distancia / tempo;
  res.json({ nomePiloto, velocidadeMedia });
});

// 5. API para reajuste salarial de acordo com a regra
app.post('/reajuste-salarial', (req, res) => {
  const { salario } = req.body;
  const salarioReajustado = salario <= 2000 ? salario * 1.5 : salario * 1.3;
  res.json({ salarioReajustado });
});

// 6. API para calcular peso ideal
app.post('/peso-ideal', (req, res) => {
  const { altura, sexo } = req.body;
  let pesoIdeal;
  if (sexo.toLowerCase() === 'masculino') {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo.toLowerCase() === 'feminino') {
    pesoIdeal = 62.1 * altura - 44.7;
  } else {
    res.status(400).json({ error: 'Sexo inválido' });
  }
  res.json({ pesoIdeal });
});

// 7. API para calcular maior preço e média aritmética dos preços
app.post('/analise-produtos', (req, res) => {
  const produtos = req.body.produtos;
  const precos = produtos.map(produto => produto.preco);
  const maiorPreco = Math.max(...precos);
  const mediaPrecos = precos.reduce((acc, curr) => acc + curr, 0) / precos.length;
  res.json({ maiorPreco, mediaPrecos });
});

// 8. API para calcular novo salário de funcionário de acordo com cargo
app.post('/novo-salario', (req, res) => {
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
  }
  const novoSalario = salario * (1 + percentualAumento);
  const diferencaSalario = novoSalario - salario;
  res.json({ salarioAntigo: salario, novoSalario, diferencaSalario });
});

// 9. API para calcular salário a receber do funcionário
app.post('/salario-receber', (req, res) => {
  const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body;
  const valorHoraTrabalhada = salarioMinimo / 5;
  const salarioMes = horasTrabalhadas * valorHoraTrabalhada;
  const acrescimoDependentes = dependentes * 32;
  const valorHoraExtra = valorHoraTrabalhada * 1.5;
  const salarioHoraExtra = horasExtras * valorHoraExtra;
  const salarioBruto = salarioMes + acrescimoDependentes + salarioHoraExtra;
  let impostoRenda;
  if (salarioBruto <= 2000) {
    impostoRenda = 0;
  } else if (salarioBruto <= 5000) {
    impostoRenda = salarioBruto * 0.1;
  } else {
    impostoRenda = salarioBruto * 0.2;
  }
  const salarioLiquido = salarioBruto - impostoRenda;
  const gratificacao = salarioLiquido <= 3500 ? 1000 : 500;
  const salarioReceber = salarioLiquido + gratificacao;
  res.json({ salarioReceber });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
