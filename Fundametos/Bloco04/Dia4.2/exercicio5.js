// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;// criando a variavel maior com o valor 0

// for (i = 0; i < numbers.length; i += 1){ // i tem o valor de 0; enquanto i for menor que a quantidade de array; i anda de um em um no array
    for(let i of numbers){ // pega i de numbers (ou seja, pega cada casa de numbers)
      if(i > maior){ // se i for maior que a variavel "maior" (que é zero)
          maior = i; // então a variavel maior recebe o valor do número
      }
  }
// }
console.log(maior) // e quando acabar o loop, o maior numero é impresso