# JavaScript

## Array

Para manipular arrays usamos uma série de métodos reservados pelo javascript.

### Métodos para manipulação de arrays:

- forEach() - itera o array.

  O método recebe uma função como parâmetro.

  ex:

  ```jsx
  array.forEach(function(item, index){console.log(item, index)});
  ```

- push() - add item ao final do array.

  ```jsx
  array.push(1);
  ```

- pop() - remove item  ao final do array.

  ```jsx
  array.pop();
  ```

- shift() - remove item ao início do array.

  ```jsx
  array.shift();
  ```

- unshift() -  add item ao início do array.

  ```jsx
  array.unshift(2);
  ```

- indexOf() - resgata o índice de um valor.

  ```jsx
  console.log(array.indexOf(true));
  ```

- splice() - remove ou substitui um item pelo índice.

  ```jsx
  array.splice(0, 3) //remove os itens nos indices de 0 a 3.
  ```

- slice() - retorna uma parte de um array existente.

  ```jsx
  let novoArray = array.slice(0, 3)
  ```

  //declaramos uma variável que recebe como valor uma parte do array existente usando o método slice, que pega os valores dos índices de 0 à 3 do “array”.

Cada método é uma função, então para usar o método forEach, por exemplo, chamamos o array existente “array” seguidos por um “.” e o nome do método: ***array.forEach().***

---

## **Objetos**

#### **O que são:**

Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves “{ }”. ***Obejetos não são iteraveis.***

Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser declarado assim:

```jsx
var xicara = { cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe() }
```

As propriedades de objetos pode ser atribuidas a variáveis, facilitando a manipulação do objeto. Chamamos isto de desestruturação (Destructuring).

Ex.:

```jsx
var cor = xicara.cor
var tamanho = xicara.tamanho
var funcao = tomarCafe()
```

Exemplo prático:

```jsx
let object = { string: 'string', number: 1, boolen: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}}
console.log(object.objectInterno.objectInterno)
```

Agora, vamos fazer a desestruturação, ou destructuring, do objeto.

#### **Primeira forma de Destructuring**:

```jsx
var arrayInterno = object.array
console.log(arrayInterno)
['array']0: "array"length: 1
```

#### **Segunda forma de Destructuring**:

Esta forma é feita por meio de chaves “{ }” no momento da declaração:

```jsx
var {} = object
var {string, boolean, objectInterno} = object
console.log(string, boolean, objectInterno)

retorna:
string true {objectInterno: 'objeto interno'}
```

---

## Estruturas condicionais:

### if / else

São condições para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição.

Ex.: Um jogo precisa mudar o placar toda vez que um jogador marca um ponto.

### Estruturas de decisão

#### if

Podemos usar as palavras reservadas “if” para estabelecer uma condição:

Ex.:

```jsx
var jogador1 = 0; 
var jogador2 = 0;

if(jogador1 > 0) {
	console.log("jogador1 marcou ponto")
}
```

#### else

No caso de a condição não ser atendida podemos usar o “else”:

Ex.:

```jsx
var jogador1 = 1;
var jogador2 = 0;

if(jogador1 > 0) {
	console.log("jogador1 macou ponto")
} else{
	console.log("ninguém marcou ponto")
}
```

#### else if

Caso haja mais de uma condição, usamos o “else if”:

```jsx
var jogador1 = 0
var jogador2 = 1

if(jogador1 > 0) {
	console.log('Jogador 1 marcou ponto')
} else if(jogador2 > 0) {
	console.log('Jogador 2 marcou ponto')
} else {
	console.log('Ninguem marcou ponto')
}
```

### Aninhamento

Podemos usar o “if” dentro de um outro “if”, chamamos isso de ***aninhamento de if’s*** ou ***ninho de if’s***.

Ex.:

```jsx
var jogador1 = 0
var jogador2 = -1

if(jogador1 != -1 && jogador2 != -1){
	if(jogador1 > 0) {
		console.log('jogador1 marcou ponto')
	} else if(jogador2 > 0) {
		console.log('jogador2 marcou ponto')
	} else {
		console.log('ninguem marcou ponto')
	}
} else {
	console.log("Pontuação inválida!")
}
```

### if ternário

Podemos também fazer uma verificação em uma única linha usando o “if” ternário:

Ex.:

```jsx
[condição] ? [instrução1] : [instrução2]

jogador1 > 0 ? console.log(’marcou ponto’) : console.log(’não marcou ponto’)

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos!') : console.log('Os jogadores não são válidos!')
```

## Laços de repetição

São estruturas condicionais que repetem uma instrução até atingir determinada condição.

### For

Funciona como uma repetição de instrução até que a condição seja falsa.

```jsx
for([expressãoInicial];[condição];[incremento]) {declaração}
```

Ex.:

```jsx
var array = [’valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

for (let i = 0; i < array.length; i++){
	console.log(i)
}
```

#### **For/in**

Funciona como uma repetição a partir de uma propriedade.

```jsx
for([indice] in [objeto ou array]){
	console.log(indice)
}
```

Ex.:

```jsx
var array = [’valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

for(i in array){
	console.log(i)
}
//Retorna os indices de cada item do array.

let object = {
   propriedade1: 'valor1',
   propriedade2: 'valor2',
   propriedade3: 'valor3'
}

for(i in object) {
   console.log(i)
}
//Retorna o valor de cada propriedade.
```

#### **For/of**

Funciona como uma repetição a partir de um valor.

```
for([indice] of [array]){declaração}
```

Ex.:

```jsx
var array = [’valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

for(i of array){
	console.log(i)
}
```

O for/of não funcionam em objetos porque as propriedades variam, diferentes dos índices de um array que serão sempre números inteiros.

Mas, é possível pegar o valor mesmo assim.

Ex.:

```jsx
for(i of object.propriedade) {
	console.log(i)
}
```

Porém, cada caractere dentro do valor será impresso em linhas separadas.

### While

Executa uma instrução “enquanto” determinada condição for verdadeira, a verificação é feita antes da execução.

Ex.:

```jsx
var a = 0
while(a < 10) {
	a++
	console.log(a)
}
```

### Do/While

Executa uma instrução “até que” determinada condição seja falsa, a verificação é feita depois da execução.

Ex.:

```jsx
var a = 0

do {
	a++
	console.log(a)
} while (a < 10)
```

---

São blocos de comandos e instruções para a execução de determinadas tarefas:

Ex.:

```jsx
function nomeDaFuncao() {
	${instrucao};
}

nomeDafuncao();
```

Geralmente se utiliza a palavra “function” seguide de parênteses “( )” e chaves “{ }”:

Ex.:

```jsx
function funcao() {
	console.log("menssagem")
}

funcao()
```

( ) - indica que é um objeto do tipo function.

{ } - indica que é um bloco de instrução.

### Funções com parâmetros

As funções podem receber em sua declaração, parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função:

Ex.:

```jsx
function menssagem(primeiro, segundo) {
	console.log(primeiro, segundo)
}

menssagem("Olá", "Mundo!")
```

------

## Funções

### Tipos de função

#### **Funções** **declarativas**

São funções que possuem o uso mais comum, deve ser declarada usando a palavra “**function**” seguida do **nome da função**, parâmetros “**( )**” e chaves “**{ }**”.

#### **Expressões de Funções**

São funções atribuidas à expressões. A nomeação das funções por expressão é opcioanl.

Ex.:

```jsx
1.
var funcao = function nomeDafuncao() {
	console.log("menssagem")
}
2.
var funcao = funciton() {
	console.log("menssgem")
}
```

#### **Arrow Function**

São funções de expressão de sitnaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. Deve ser declarada com parênteses “**( )**”, seguido de “**⇒**” e depois chaves “{ **}**”

Ex.:

```jsx
var funcao = ( ) ⇒ {
	$instrucao
}
```
