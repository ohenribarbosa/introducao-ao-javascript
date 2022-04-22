
// solução 1
function verificaPalindromo(string) {
  if(!string) return "string inexistente!"

  return string.split("").reverse().join("") === string
}
//console.log(verificaPalindromo(""))

// solucao 2
function verificaPalindromo2(string) {
  if(!string) return "string inexistente!"

  for(let i = 0; i < string.length / 2; i++) {
    if(string[i] !== string[string.length - 1 - i]) {
      return false
    } else {
      return true
    }
  }
}

console.log(verificaPalindromo("natan"))

//Teste de mesa
//i = 0
//string[string.length - 1 -i]

//      cata
// string.length = 4
// string[4 -1 -0 = 3]
// string[4 -1 -1 = 2]
// string[4 -1 -2 = 1]
// string[4 -1 -3 = 0]
//0=c 0 - 3 c - a
//1=a 1 - 2 a - t
//2=t 2 - 1 t - a
//3=a 3 - 0 a - c
//  TRUE

//      ovo
// string.length = 3
// string[3 -1 -0 = 3]
// string[3 -1 -1 = 2]
// string[3 -1 -2 = 1]
//0=o 0 - 2 o - o
//1=v 0 - 1 v - v
//2=o 0 - 0 o - o
//  TRUE

//           natan
// string.length = 5
// string[5 -1 -0 = 4]
// string[5 -1 -1 = 3]
// string[5 -1 -2 = 2]
// string[5 -1 -3 = 1]
// string[5 -1 -4 = 0]
//0=n 0 - 4  n - n
//1=a 1 - 3  a - a
//2=t 2 - 2  t - t
//3=a 3 - 1  a - a
//4=n 4 - 0  n - n
//  TRUE