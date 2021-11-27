const colors = document.getElementById('colors')
const rgb = document.getElementById('rgb-color')
const reset = document.getElementById('reset-game')
const balls = document.querySelectorAll('.ball')
const resultado = document.getElementById('answer')
const score = document.getElementById('score')
let soma = 0 

colorSelected()
function corRandom() {
    for (let i = 0; i < balls.length; i += 1) {
        reset.addEventListener('click', corRandom)
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        let color = `rgb(${r}, ${g}, ${b})`
        balls[i].style.backgroundColor = color
        if(balls[i].classList.contains('selected')){
            balls[i].classList.remove('selected')
            resultado.innerText = 'Escolha uma cor'
        }
    }
    rgbText()
}
corRandom()

function rgbText() {
    let colorText = balls[Math.round(Math.random() * (balls.length -1))].style.backgroundColor
    rgb.innerText = colorText.substring(3)
    console.log(rgb.innerText)
}

function colorSelected() {
    for (let j = 0; j < balls.length; j += 1) {
        let elemento = balls[j]
        elemento.addEventListener('click', function (event) {
            for (let i = 0; i < balls.length; i += 1) {
                balls[i].classList.remove('selected')
            }
            elemento.classList.add('selected')
            let element = document.querySelector('.selected').style.backgroundColor.substring(3)
            console.log(element)
            console.log(rgb.innerText)
            if (element == rgb.innerText) {
                resultado.innerText = "Acertou!"
                soma += 3
                score.innerText = soma

            } else {
                resultado.innerText = "Errou! Tente novamente!"
            }


        })
    }
}

