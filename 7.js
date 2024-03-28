const prompt = require('prompt-sync')();

function calcularMediaAluno() {
  const nota1 = parseFloat(prompt('Digite a primeira nota: '));
  const nota2 = parseFloat(prompt('Digite a segunda nota: '));

  const media = ((nota1 * 4) + (nota2 * 6)) / 10;

  console.log(`Média Final: ${media.toFixed(2)}`);
}

calcularMediaAluno();
