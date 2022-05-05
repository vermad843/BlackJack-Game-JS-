let player = {
    name : "Per",
    chips : 200,
    sayHello : function() {
        console.log('Hello world!!')
    }
}

player.sayHello();

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById('cards-el')



let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips  




function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// No between 1 to 13 - no of cards in a game

function getRandomCard() {
    // if 1  -> return 11
    // if 11-13 -> return 10
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if(randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }else {
        return randomNumber
    }
}



function renderGame() {
    cardsEl.textContent = "Cards: " 
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card"
    }else if (sum === 21) {
        message = "wohoo! you've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
   messageEl.textContent = message
}


function newCard(){
    if(isAlive === true && hasBlackJack === false ){
        let card = getRandomCard()
        sum+= card
        cards.push(card)
        renderGame()
    }
}
