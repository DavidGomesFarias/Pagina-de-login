const svgClicavel = document.querySelector('.svg-clicavel')
const inputUser1 = document.querySelector('.input-1')
const inputPass1 = document.querySelector('.input-2')
const inputPass = document.querySelector('.inputPass')



function addClass() {
  inputUser1.classList.add('active')
}

function addClass1() {
  inputPass1.classList.add('active')
}

inputUser1.addEventListener('click', addClass)

inputPass1.addEventListener('click', addClass1)

function removerEAdd() {
  if(addClass) {
    inputUser1.classList.remove('active')
  }
}

function removerEAdd2() {
  if(addClass1) {
    inputPass1.classList.remove('active')
  }
}

inputPass1.addEventListener('click', removerEAdd)
inputUser1.addEventListener('click', removerEAdd2)


function mostrarSenha() {
  if(inputPass.type === 'password') {
    inputPass.setAttribute('type', 'text')
  } else {
    inputPass.setAttribute('type', 'password')
  }
}

svgClicavel.addEventListener('click', mostrarSenha)