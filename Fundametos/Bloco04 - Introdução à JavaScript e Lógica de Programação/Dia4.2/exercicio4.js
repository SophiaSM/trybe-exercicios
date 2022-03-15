// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0 //define que soma é igual a zero

for(i = 0; i < numbers.length; i += 1){  // index é igual a zero; enquanto index for menor que os numeros do array; retorne i refazendo o loop adicionando mais um ao index, indo do index zero para o proximo index
  sum += numbers[i]; // "soma" soma com o index de numbers (que é o resultado de i)
}
let media = (sum / 2); // cria a variavel media que é soma dividido por 2
if (media > 20){ //se media for menor que vinte
  console.log("Valor maior que 20"); //retorna essa mensagem
} else { //caso contrario
  console.log("Valor menor ou igual a 20"); // retorna essa mensagem
}
