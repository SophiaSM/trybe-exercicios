// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = 0; // cria a variavel menor com o valor de zero

for(let i of numbers){ // faz o loop com os index de numeros
  if(i < menor) // se index for menor que a variavel menor
    menor = i // então se da o valor de index para menor
}
console.log(menor)