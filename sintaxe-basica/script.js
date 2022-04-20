/* //Tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//numbre

var */

/* var num = 6 <= 3;
console.log(num) */

// alt+shif+a || ctrl+;

// como declarar um array

// let array = ['string', 1, true, ['array1'], ['array2']];

/* array.forEach(function(item, index){
   // indice:valor ou item(valor):index(indice)
   console.log('item ', item, ': index', index);
}); */

/* array.push(1);
console.log(array); */

/* array.pop();
console.log(array); */

/* array.shift();
console.log(array); */

/* array.unshift(2);
console.log(array); */

// console.log(array.indexOf(true));

/* array.splice(0, 3)
console.log(array) */

/* let novoArray = array.slice(0, 3)
console.log(novoArray) */
/* 
let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectIntern: {objectInterno: 'objeto interno'}} */

// console.log(object.objectInterno.objectInterno)

//primeira forma de destructuring
/* var string = object.string
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno)
 */
/* var {string, boolean, objectIntern} = object

console.log(string, boolean, objectIntern) */

/* var jogador1 = 0
var jogador2 = 0
var placar

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos!') : console.log('Os jogadores não são válidos!')

if(jogador1 != -1 && jogador2 != -1){
   if(jogador1 > 0) {
      console.log('jogador1 marcou ponto')
      placar = jogador1 > jogador2
   } else if(jogador2 > 0) {
      console.log('jogador2 marcou ponto')
      placar = jogador2 > jogador1
   } else {
      console.log('ninguem marcou ponto')
   }
}

switch(placar){
   case placar = jogador1 > jogador2:
      console.log('jogador 1 ganhou')
      break
   case placar = jogador2 > jogador1:
      console.log('jogador 2 ganhou')
      break
   default:
      console.log('ninguem ganhou')
} */

/* var array = ['valor1', 'valor2', 'valor3', 'valor4']

let object = {
   propriedade1: 'valor1',
   propriedade2: 'valor2',
   propriedade3: 'valor3'
} */

/* for(let indice= 0; indice < array.length; indice++) {
   console.log(indice)
} */

/* for(i in array){
   console.log(i)
}

for(i in object) {
   console.log(i)
} */

/* for(i of array) {
   // console.log(i)
}

for(i of object.propriedade1){
   console.log(i)
} */

/* var a = 0

while(a < 10) {
   a++
   console.log(a)
} */

/* var a = 0

do {
	a++
	console.log(a)
} while (a < 10) */

/* const minus = 18
let age = 17

if(age >= 18){
   console.log("I am eligible to vote")
} else {
   console.log("I am not eligible to vote because am " , (minus - age) , " year(s) below voting age.")
} */

/* function funcao() {
   console.log("Hello World!")
}

funcao() */

/* function menssagem(primeiro, segundo) {
   console.log(segundo, primeiro, segundo)
}

menssagem("Oi", "Vagabunda!") */

/* function func() {
   console.log("Esta é uma função declarativa.")
}

func() */

/* var funcao = function func() {
   console.log("Esta é uma função de expressão.")
}

funcao() */

/* var funcao = () => {
   console.log("Sou uma arrow function.")
}

funcao() */