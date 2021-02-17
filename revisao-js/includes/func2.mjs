// Quando um módulo exporta apenas um item, pode-se utilizar
// export default

// Só pode existir um export default por arquivo de módulo

export default function dobraVet(vet) {
  // Cria um novo vetor cujos elementos equivalem ao dobro
  // dos elementos do vetor original
  let res = []
  for(let n of vet) res.push(n * 2)
  return res
}