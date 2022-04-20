let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
const soma = num1 + num2

function comparaNumeros() {
  if(!num1 || !num2) return "Defina dois números!"

  const primeiraFrase = criaPrimeiraFrase()
  const segundaFrase = criaSegundaFrase()

  return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase() {
  let saoIguais = ''
  if(num1 !== num2) {
    saoIguais = 'não'
  }

  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase() {
  const compara10 = soma > 10
  const compara20 = soma > 20
  let resultado10 = 'menor'
  let resultado20 = 'menor'

  if(compara10) {
    resultado10 = 'maior'
  }

  if(compara20) {
    resultado20 = 'maior'
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}


alert(comparaNumeros())
