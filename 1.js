// prompt-sync para receber entradas do usuário de forma síncrona
const prompt = require('prompt-sync')();

// Função para calcular a média
function calcularMedia() {
  const nota1 = parseFloat(prompt('Digite a primeira nota: '));
  const nota2 = parseFloat(prompt('Digite a segunda nota: '));
  const nota3 = parseFloat(prompt('Digite a terceira nota: '));
  const nota4 = parseFloat(prompt('Digite a quarta nota: '));

  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media >= 7.0) {
    console.log(`Média: ${media.toFixed(2)} - Aprovado!`);
  } else {
    console.log(`Média: ${media.toFixed(2)} - Reprovado!`);
  }
}
calcularMedia();