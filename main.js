function rodarDados() {
  var num1 = document.getElementById('resultado1')
  var num2 = document.getElementById('resultado2')

  if (num1.className == 'num-disabled' && num2.className == 'num-disabled') {
    num1.className = 'num'
    num2.className = 'num'
  }

  num1.innerHTML = gerarNumero()
  num2.innerHTML = gerarNumero()
}

function gerarNumero() {
  var num = Math.floor(Math.random() * 7)
  if (num == 0) {
    num = 1
    return num
  } else {
    return num
  }
}
