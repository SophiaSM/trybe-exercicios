// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0 // cria a variavel soma e da o valor de zero
for (i = 0; i < numbers.length; i += 1){ // i é igual a zero; enquanto i for menor que o tamanho do array, retorna i refazendo caminhando de um em um 
  sum += numbers[i]; // soma é o index de numeros (que é o resultado do loop)
}
let media = (sum / 2); //aqui ele da o valor de soma dividido por dois como o resultado de media
console.log(media) // aqui imprime media