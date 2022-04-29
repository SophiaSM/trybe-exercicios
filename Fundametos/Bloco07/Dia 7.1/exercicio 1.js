//Parte 1 dos exercícios
//Exercício 1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

//Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// oddsAndEvens.sort (function (a, b) {
//   return a - b
// })
console.log(`Os números ${oddsAndEvens.sort((a, b) => a -b)} se encontram ordenados de forma crescente!`)


//Parte 2 dos exercícios
//Exercício 1

const factorial = number =>{
  let result = 1
  for (let i = 2; i <= number; i += 1){
    result *= i
  }
  return result
} 
console.log(factorial(4));


//Exercício 2

const longestWord = phrase => {
  let wordArray = phrase.split(' ')
  let maxLength = 0
  let result = ''

  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length
      result = word
    }
  }
  return result
} 
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))


//Exercício 4
