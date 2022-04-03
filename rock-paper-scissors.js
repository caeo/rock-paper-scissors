const game = () =>{
    let pScore = 0
    let cScore = 0


    const startGame = () => {
        const playBtn = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn');
        })
    }

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");
    
        
        hands.forEach(hand => {
            hand.addEventListener('animationed', function(){
                this.style.animation = "";
            })
        })

        const computerOptions = ["rock", "paper", "scissors"];

        
        
        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]
                

                
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice)
                    playerHand.src = `./images/${this.textContent}.png`
                    computerHand.src = `./images/${computerChoice}.png`
                }, 1500)
                
                playerHand.style.animation = "shakePlayer 1.5s ease"
                computerHand.style.animation = "shakeComputer 1.5s ease"
            })
        })

    }


    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }


    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner')

        if(playerChoice === computerChoice){
            winner.textContent = 'Tie'
            return
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins'
                pScore = pScore + 1
                updateScore()
                return
            }
            else{
                winner.textContent = 'Computer Wins'
                cScore = cScore + 1
                updateScore()
                return
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins'
                cScore = cScore + 1
                updateScore()
                return
            }
            else{
                winner.textContent = 'Player Wins'
                pScore = pScore + 1
                updateScore()
                return
            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins'
                cScore = cScore + 1
                updateScore()
                return
            }
            else{
                winner.textContent = 'Player Wins'
                pScore = pScore + 1
                updateScore()
                return
            }
        }


    }
    
    startGame()
    playMatch()
}


game()


































// function computerPlay(){
//     let result = ""
//     let choice = Math.floor(Math.random() * 3)
//     if(choice == 0){
//         result = "rock"
//     }else if (choice == 1) {
//         result = 'paper'
//     } else{
//         result = 'scissors'
//     }
//     return result
// }

// function playerChoice(choice){
//     let pChoice = ''
//     if (choice == 1) {
//         pChoice = 'rock'
//     } else if (choice == 2){
//         pChoice = 'paper'
//     }else if (choice == 3){
//         pChoice = 'scissors'
//     } else {
//         pChoice = 'invalid choice'
//     }
//     return pChoice
// }




// const buttons = document.querySelectorAll('button')
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log(button.id)

//         const results = document.querySelector('.results')

//         let rodada = round(playerChoice(button.id), computerPlay())

//         const resultText = document.createTextNode(rodada)
//         results.append(resultText)

        
//     })

    
// })

// let scorePlayer = 0
// let scoreComputer = 0


// const updateScore = () =>{
//     const playerScore = document.querySelector('player-score p')
//     const computerScore = document.querySelector('computer-score p')
//     playerScore.textContent = scorePlayer;
//     computerScore.textContent = scoreComputer;
// }

// function round(playerChoice, computerPlay) {
//     console.log(`Player choice: ${playerChoice} \n VS \n Computer Choice: ${computerPlay} \n`)
//     let result = ''
//     if (playerChoice == 'rock' && computerPlay == 'rock'){
//         result = 'draw'
//         return result
//     } else if (playerChoice == 'rock' && computerPlay == 'paper'){
//         result = 'you lost'
//         scoreComputer += scoreComputer
//         updateScore()
//         return result
//     } else if (playerChoice == 'rock' && computerPlay == 'scissors'){
//         result = 'you won'
//         scorePlayer += scorePlayer
//         updateScore()
//         return result
//     } else if (playerChoice == 'paper' && computerPlay == 'paper'){
//         result = 'draw'
//         return result
//     } else if (playerChoice == 'paper' && computerPlay == 'rock'){
//         result = 'you won'
//         scorePlayer += scorePlayer
//         updateScore()
//         return result
//     } else if (playerChoice == 'paper' && computerPlay == 'scissors'){
//         result = 'you lost'
//         scoreComputer += scoreComputer
//         updateScore()
//         return result
//     } else if (playerChoice == 'scissors' && computerPlay == 'scissors'){
//         result = 'draw'
//         return result
//     } else if (playerChoice == 'scissors' && computerPlay == 'rock'){
//         result = 'you lost'
//         scoreComputer += scoreComputer
//         updateScore()
//         return result
//     } else if (playerChoice == 'scissors' && computerPlay == 'paper'){
//         result = 'you won'
//         scorePlayer += scorePlayer
//         updateScore()
//         return result
//     }
//     return
// }
