// Parâmetros opcionais devem ser sempre os últimos
function calculaArea(base, altura, forma = 'Q') {
  switch(forma) {
    case 'Q': // Quadrilátero
      return base * altura
      break
    case 'T': // Triângulo
      return base * altura / 2
      break
    case 'E': // Elipse
      return (base / 2) * (altura / 2) * Math.PI
  }
}

console.log(calculaArea(2, 3, 'Q'))
console.log(calculaArea(5, 3, 'T'))
console.log(calculaArea(4.5, 4.5, 'E'))
console.log(calculaArea(10, 13))