let gameOver = document.getElementById('gameOver')

let player = document.getElementById('player')

let bullet = document.getElementById('bullet')

let eyes = document.getElementById('eyes')

let start = document.getElementById('startGame')

let board = document.getElementById('leaderboard')

let colors = [
    'green',
    'blue',
    'red',
    'orange',
    'pink',
    'cyan',
    'gray',
    'lime',
    'olive',
    'coral',
    'slategray',
]

let i = Math.floor(Math.random() * colors.length)

let number = document.getElementById('number')

let score = 0

let random = Math.floor(Math.random() * 140)

function startGame() {
    document.location.reload()
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.keyCode === 32) {
        player.style.height = 50 + 'px'
        player.style.top = 150 + 'px'

        if (player.classList != 'animation') {
            player.classList.add('animation')
        }
        player.classList.add('animation')
        setTimeout(function () {
            player.classList.remove('animation')
        }, 500)
    }

    if (event.key === 'ArrowDown') {
        player.classList != 'animation'
        player.style.height = 25 + 'px'
        player.style.top = 175 + 'px'
    }
})

let checkDead = setInterval(function () {
    let playerTop = parseInt(
        window.getComputedStyle(player).getPropertyValue('top')
    )

    let bulletLeft = parseInt(
        window.getComputedStyle(bullet).getPropertyValue('left')
    )

    if (bulletLeft < 20 && bulletLeft > 0 && playerTop >= 130) {
        bullet.style.animation = 'none'
        bullet.style.display = 'none'
        player.style.animation = 'none'
        gameOver.innerText =
            'You lose! :( You Jumped over ' +
            Math.floor(score / 100) +
            ' rocks!'
        if (localStorage.getItem('Score') < score) {
            localStorage.setItem(
                'Name',
                prompt(
                    'You have the highscore on this machine with a score of ' +
                        Math.floor(score / 100) +
                        '. Please enter your name so you can be named the All Time Best!'
                )
            )
            localStorage.setItem('Score', Math.floor(score / 100))
        }
    } else if (bullet.style.display != 'none') {
        score++
        number.innerText = Math.floor(score / 100)
    }
}, 10)

board.innerText =
    'All Time Best: ' +
    localStorage.getItem('Name') +
    ' With ' +
    localStorage.getItem('Score')
bullet.style.backgroundColor = colors[i]
player.style.backgroundColor = colors[i + 1 || 0]
gameOver.style.color = colors[i]
