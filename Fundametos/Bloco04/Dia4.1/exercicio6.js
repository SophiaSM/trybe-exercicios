// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let xadrez = "rei"

switch (xadrez){
  case "bispo":
  console.log("diagonais");
  break

  case "rei":
  console.log("para todos os lados, mas apenas uma casa");
  break

  case "cavalo":
  console.log("movimentos em L em 4 casas");
  break

  case "rainha":
  console.log("para todos os lados e a quantidade de casas que quiser");
  break

  case "torre":
  console.log("movimentos em linha reta");
  break

  case "peão":
  console.log("movimentos para frente");
  break
}

