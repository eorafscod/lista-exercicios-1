const prompt = require('prompt-sync')();

function calcularCustoCarro() {

    const custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '));

  const percentualDistribuidor = 28;
  const percentualImpostos = 45;

  const custoDistribuidor = (percentualDistribuidor / 100) * custoFabrica;
  const custoImpostos = (percentualImpostos / 100) * custoFabrica;
  const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

  console.log(`Custo de Fábrica: R$ ${custoFabrica.toFixed(2)}`);
  console.log(`Custo do Distribuidor: R$ ${custoDistribuidor.toFixed(2)}`);
  console.log(`Custo dos Impostos: R$ ${custoImpostos.toFixed(2)}`);
  console.log(`Custo Final ao Consumidor: R$ ${custoFinal.toFixed(2)}`);
}

calcularCustoCarro();
