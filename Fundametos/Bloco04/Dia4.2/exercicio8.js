// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [] //  foi criado um array vazio

for (let i = 1; i < 26; i += 1){ // a variavel i é igual a 1; enquanto 1 for menor que 26 o loop ira se repetir um a um e alocando dentro de i
  numbers.push(i) // é empurrado index para dentro do array numbers vazio
}
console.log(numbers) // impressao de numbers