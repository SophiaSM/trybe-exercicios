// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = []; // se cria uma váriavel com um array vazio

for(let i of numbers){ // cria um loop pegando o index da variavel numero
  if(i % 2 !== 0){ // se index dividido por dois for diferente de 0
    impar.push(i); // empurrar index para dentro do array impar
  } else if (i % 2 === 0){ // se index dividido por doi for igual a zero
    console.log("nenhum numero impar encontrao") // imprimir essa frase
  }
}
console.log(impar)
// if (impar.length !== 0){ // se 
//   console.log("os numeros impares são: " + impar);
// } else {
//   console.log("nenhum valor impar encontrado");
// }