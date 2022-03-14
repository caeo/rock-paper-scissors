function computerPlay(){
    let result = ""
    let choice = Math.floor(Math.random() * 3)
    if(choice == 0){
        result = "rock"
    }else if (choice == 1) {
        result = 'paper'
    } else{
        result = 'scissors'
    }
    return result
}

function playerChoice(choice){
    let pChoice = ''
    if (choice == 1) {
        pChoice = 'rock'
    } else if (choice == 2){
        pChoice = 'paper'
    }else if (choice == 3){
        pChoice = 'scissors'
    } else {
        pChoice = 'invalid choice'
    }
    return pChoice
}

function round(playerChoice, computerPlay) {
    console.log(`Player choice: ${playerChoice} \n VS \n Computer Choice: ${computerPlay} \n`)
    let result = ''
    if (playerChoice == 'rock' && computerPlay == 'rock'){
        result = 'draw'
    } else if (playerChoice == 'rock' && computerPlay == 'paper'){
        result = 'you lost'
    } else if (playerChoice == 'rock' && computerPlay == 'scissors'){
        result = 'you won'
    } else if (playerChoice == 'paper' && computerPlay == 'paper'){
        result = 'draw'
    } else if (playerChoice == 'paper' && computerPlay == 'rock'){
        result = 'you won'
    } else if (playerChoice == 'paper' && computerPlay == 'scissors'){
        result = 'you lost'
    } else if (playerChoice == 'scissors' && computerPlay == 'scissors'){
        result = 'draw'
    } else if (playerChoice == 'scissors' && computerPlay == 'rock'){
        result = 'you lost'
    } else if (playerChoice == 'scissors' && computerPlay == 'paper'){
        result = 'you won'
    } else{
        result = 'what'
    }
    return result
}

let option = prompt('Choose your thing: \n 1 - rock \n 2 - paper \n 3 - scissors \n')

let playerInstance = playerChoice(option)
let computerInstance = computerPlay()
console.log(round(playerInstance, computerInstance))