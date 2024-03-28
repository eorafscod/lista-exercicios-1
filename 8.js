const prompt = require('prompt-sync')();

function calcularVolumeCaixaAgua() {
  const raio = parseFloat(prompt('Digite o raio da caixa d\'água (em metros): '));
  const altura = parseFloat(prompt('Digite a altura da caixa d\'água (em metros): '));

  const volume = Math.PI * Math.pow(raio, 2) * altura;

  console.log(`Volume da Caixa d'Água: ${volume.toFixed(2)} metros cúbicos`);
}

calcularVolumeCaixaAgua();
