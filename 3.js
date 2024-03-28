const prompt = require('prompt-sync')();

function ReajusteSalario() {

  const salarioAtual = parseFloat(prompt('Digite o salário mensal atual: '));
  const percentualReajuste = parseFloat(prompt('Digite o percentual de reajuste (%): '));

  const valorReajuste = (percentualReajuste / 100) * salarioAtual;
  const novoSalario = salarioAtual + valorReajuste;

  console.log(`Salário Mensal Atual: R$ ${salarioAtual.toFixed(2)}`);
  console.log(`Percentual de Reajuste: ${percentualReajuste}%`);
  console.log(`Valor do Reajuste: R$ ${valorReajuste.toFixed(2)}`);
  console.log(`Novo Salário: R$ ${novoSalario.toFixed(2)}`);
}

ReajusteSalario();
