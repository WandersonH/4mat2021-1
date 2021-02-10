let numeros = [10, 20, 30]  // Vetor

let carro = {
  marca: 'Volkswagen',
  modelo: 'Fusca',
  ano: 1969,
  cor: 'preto'
}       // Objeto

// Desestruturação de vetor
let [x, y, z] = numeros
console.log(x)
console.log(y)
console.log(z)

// Desestruturação parcial do vetor
// Pegar apenas o segundo valor
let [, c, ,] = numeros
console.log(c)

// Pegando apenas os dois primeiros valores
let [a, b] = numeros
console.log(a)
console.log(b)

// Desestruração de objetos: o nome das variáveis deve ser IGUAL
// ao nome das propriedades do objeto. A ordem das variáveis
// é indiferente
/*let {ano, modelo, cor, marca} = carro
console.log(marca)
console.log(modelo)
console.log(ano)
console.log(cor)*/

// Desestruturação parcial: basta passar apenas o nome das propriedades
// desejadas

let {marca, ano} = carro
console.log(marca)
console.log(ano)

// "Renomeando" variáveis ao desestruturar um objeto
let {marca: brand, ano: year} = carro
console.log(brand)
console.log(year)
