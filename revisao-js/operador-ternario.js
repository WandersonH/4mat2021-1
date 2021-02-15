let nota = 4.3

let situacao

/*if(nota >= 6) {
  situacao = 'APROVADO'
}
else {
  situacao = 'REPROVADO'
}*/

/*if(nota >= 6) situacao = 'APROVADO'
else situacao = 'REPROVADO'*/

nota = 8.6

// Usando operador ternário
// 1º termo: condição (que iria no if)
// Separando o 1º termo do 2º temos ?
// 2º termo: resultado caso a condição seja verdadeira
// Separando o 2º termo do 3º temos :
// 3º termo: resultado caso a condição seja falsa
situacao = (nota >= 6 ? 'APROVADO' : 'REPROVADO')

console.log({nota, situacao})

let user = 'zemane'
let msg

msg = (user === 'root' || user === 'admin' ? 'Superusuário' : 'Usuário comum')

console.log({user, msg})

