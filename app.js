let player1Score = 0;
let player2Score = 0;
let player1Turn = true

const rollBtn = document.getElementById('rollBtn')
const message = document.getElementById('message')
const score1 = document.getElementById('score1')
const score2 = document.getElementById('score2')
const displayscore1 = document.getElementById('displayscore1')
const displayscore2 = document.getElementById('displayscore2')


rollBtn.addEventListener('click', () => {
    
    if(player1Turn){
        random = rollDice()
        displayscore1.innerHTML =`${random}`
        message.innerHTML =`player 1 rolled ${random}`
         player1Score += random
         score1.innerHTML =`score:${player1Score}`
         if (player1Score >= 20) {
            
            score1.innerHTML =`you won!!!!`
            displayscore1.innerHTML =`0`
            reset()
         }
         
    } else {
        random2 = rollDice()
        displayscore2.innerHTML =`${random2}`
         player2Score += random2
         score2.innerHTML =`score:${player2Score}`
         message.innerHTML =`player 2 rolled ${random2}`
         if (player2Score >= 20) {
            score2.innerHTML =`you won!!!!`
            displayscore2.innerHTML =`0`
            reset()
         }
    
    }
    player1Turn = !player1Turn
})


function reset() {
    player1Score = 0
    player2Score = 0
}


function rollDice() {
        return Math.floor(Math.random()*7)
    }


