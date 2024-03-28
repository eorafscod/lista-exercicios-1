const prompt = require('prompt-sync')();

// Função para calcular os percentuais de votos brancos, nulos e válidos
function calcularPercentuais() {
  // Recebendo o número total de eleitores e os votos brancos, nulos e válidos
  const totalEleitores = parseInt(prompt('Digite o número total de eleitores: '));
  const votosBrancos = parseInt(prompt('Digite o número de votos brancos: '));
  const votosNulos = parseInt(prompt('Digite o número de votos nulos: '));
  const votosValidos = parseInt(prompt('Digite o número de votos válidos: '));

  // Calculando os percentuais
  const percentualBrancos = (votosBrancos / totalEleitores) * 100;
  const percentualNulos = (votosNulos / totalEleitores) * 100;
  const percentualValidos = (votosValidos / totalEleitores) * 100;

  // Exibindo os resultados
  console.log(`votos brancos: ${percentualBrancos.toFixed(2)}%`);
  console.log(`votos nulos: ${percentualNulos.toFixed(2)}%`);
  console.log(`votos válidos: ${percentualValidos.toFixed(2)}%`);
}

calcularPercentuais();
