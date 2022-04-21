# Variáveis e tipos

## Atribuição de Valores

### 											    

​				

| Case Type                  | Example          |
| -------------------------- | ---------------- |
| Orignal Variable as String | some awesome var |
| Camel Case                 | someAwesomeVar   |
| Snake Case                 | some_awesome_Var |
| Kebab Case                 | some-awesome-var |
| Pascal Case                | SomeAwesomeVar   |
| Upper Case Snake Case      | SOME_AWESOME_VAR |

## Var e let

var - escopo global

let - escopo de bloco

```jsx
var a = 1;
var b = 2;

if (a === 1) {
	var a = 11; // O escopo é global
	let b = 22; // O escopo é dentro do bloco if

	console.log(a); //11
	console.log(b); //22
}

console.log(a) //11
console.log(b) //2
```

- Escopos diferentes
- Hoisting (var)
- Redeclaração (var)
- Reatribuição
- camelCase

Hoisting - basicamente, é atribuir o valor a uma variável antes de declara-la. Só acontece com o “var”.

## Constantes

- Declarada em SNAKE_UPPER_CASE
- Escopo de bloco
- Não faz hoisting
- Não pode reatribuir
- Não pode redeclarar

## Var, let e const

|            | var             | const | let   |
| ---------- | --------------- | ----- | ----- |
| escopo     | global ou local | bloco | bloco |
| redeclarar | sim             | não   | não   |
| reatribuir | sim             | não   | sim   |
| hoisting   | sim             | não   | não   |

