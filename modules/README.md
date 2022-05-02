# Módulos

Módulos arquivos Javascript que tem a capacidade de exportar e importar informarções de outros arquivos do mesmo tipo.

### Algumas vantagens:

- Organização do código
- Compartilhamento de variáveis em escopos diferentes
- Explica as dependências dos arquivos

## EXPORTAR

Existem duas técnicas de exportação:

### Named exports

Quando precisa exportar mais de um arquivo e quando precisa exportar eles individualmente.

Ex.1:

```jsx
export function mostraIdade(pessoa){
	return `A idade de ${pessoa.nome} é ${pessoa.idade}`
}
```

Ex.2:

```jsx
function mostraIdade(pessoa){
	return `A idade de ${pessoa.nome} é ${pessoa.idade}`
}

function mostraCidade(pessoa){
	return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`
}

function mostraHobby(pessoa){
	return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`
}

export {
	mostraIdade,
	mostraCidade,
	mostraHobby
}
```

### Default Exports

- Só pode haver um por arquivo;
- Será o retorno padrão do seu arquivo.

```jsx
function mostraIdade(pessoa){
	return `A idade de ${pessoa.nome} é ${pessoa.idade}`
}

function mostraCidade(pessoa){
	return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`
}

function mostraHobby(pessoa){
	return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`
}

export {
	mostraIdade,
	mostraCidade
}

export default mostraHobby;
```

## IMPORTAR

**Named exports**

```jsx
import {funcao, variavel, classe} from './arquivo.js'
```

**Default exports**

```jsx
import valorDefault from './arquivo.js'
```

**Trocando nome de imports**

```jsx
import { arquivo as Apelido } from './arquivo.js';

Apelido.metodo()
```

**Importando todos os dados de um arquivo**

```javascript
import * as INFOS from './arquivo.js'

INFOS.metodo()

console.log(INFOS.variavel)
```

VINCULANDO AO HTML

```html
<script type="module" src="./main.js"></script>
```

> Para fazer testes localmente (de um arquivo no seu computador), será necessário estar rodando um servidor. Isso pode ser feito utilizando a extensão “Live Server”, do VSCode.
>

### Curiosidades:

- Módulos sempre estão em “strict mode”;
- Podem ser utilizadas as extensões .js e .mjs;
- Para testes locis, é necessário utilizar um servidor;
- Ao importar, sempre lembre da extensão (.js, .mjs);
- Ao imprtar, sempre utilize “./” como ponto de partida.