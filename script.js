const background = document.querySelector('body')
const ball = document.querySelector('.ball')
const title = document.querySelector('h2')

title.style.color = 'black'
background.style.backgroundColor = 'rgb(241, 241, 241)'


ball.onclick = function themeSwitcher() {
    console.log(background.style.backgroundColor)
    if(background.style.backgroundColor == 'rgb(41, 44, 53)') {
        background.style.backgroundColor = "rgb(241, 241, 241)"
        title.style.color = 'black'
        ball.removeAttribute('id')
    } else if(background.style.backgroundColor == "rgb(241, 241, 241)") {
        background.style.backgroundColor = 'rgb(41, 44, 53)'
        ball.setAttribute('id', 'ball-right')
        title.style.color = 'white'
    }

}

