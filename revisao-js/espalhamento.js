console.log(Math.min(20, 3, 47, 33, 41)) // Retornar o menor número da lista
console.log(Math.max(20, 3, 47, 33, 41)) // Retornar o maior número da lista

let numeros = [20, 3, 47, 33, 41]

// Fazendo o espalhamento do vetor para conseguir os parâmetros soltos
console.log(Math.min(...numeros)) // Retornar o menor número da lista
console.log(Math.max(...numeros)) // Retornar o maior número da lista

// Primeira tentativa de fazer um vetor que inclua os elementos de outro vetor
//let maisNumeros = [19, 7, 38, numeros, 0, -5]
//console.log(maisNumeros)

// Usar o espalhamento
let maisNumeros = [19, 7, 38, ...numeros, 0, -5]
console.log(maisNumeros)

// Usando espalhamento em parâmetros de função (parâmetro de resto)
function somaTudo(...nums) {  // ... significa que não há quantidade fixa de parâmetros
  let soma = 0
  // O parâmetro de resto, dentro de uma função, é interpretado como um vetor
  for(let n of nums) soma += n
  return soma
}

console.log(somaTudo(14, 56, 78, 0, -4, 41)) // Quantidade de números é aleatória
console.log(somaTudo(25, -7, 14))

// Usando parâmetro de resto após um argumento obrigatório
function calcular(oper, ...nums) {
  let res
  switch(oper) {
    case '+':
      res = 0
      for(let n of nums) res += n
      break
    case '*':
      res = 1   // Elemento neutro da multiplicação
      for(let n of nums) res *= n
      break
  }
  return res
}

console.log(calcular('+', 15, 19, 12, 32, -7, 6))
console.log(calcular('*', 15, 19, 12, 32, -7, 6))

// Como chamar a função somaTudo() passando a ela os números do vetor maisNumeros?
console.log(somaTudo(...maisNumeros))

// Chamando calcular() de forma semelhante
console.log(calcular('+', ...maisNumeros))