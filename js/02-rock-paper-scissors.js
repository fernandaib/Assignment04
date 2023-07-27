//USER CHOICE
let userChoiceInput = parseInt(prompt('Press key:\n[1] for Rock\n[2] for Paper\n[3] for Scissors'));

if (userChoiceInput == 1){
    userChoice = "rock";
} else if(userChoiceInput == 2){
    userChoice = "paper";
}else if(userChoiceInput == 3){
    userChoice = "scissors";
}
console.log(`USER has selected ${userChoice}`);

// COMPUTER CHOICE
let computerChoice = Math.random();

if (computerChoice <= 0.33){
    computerChoice = "rock";
} else if(computerChoice <= 0.66){
    computerChoice = "paper";
}else{
    computerChoice = "scissors";
}
console.log(`COMPUTER has selected ${computerChoice}`);

// **********GAME**********
if (userChoice == computerChoice){
    console.log('The result is Tie!')
}else if( userChoice == 'rock'){
    if(computerChoice == 'scissors'){
        console.log('USER wins!!!')
    }else{
        console.log('COMPUTER wins')
    }
}else if( userChoice == 'paper'){
    if(computerChoice == 'rock'){
        console.log('USER wins!!!')
    }else{
        console.log('COMPUTER wins')
    }
}else if( userChoice == 'scissors'){
    if(computerChoice == 'rock'){
        console.log('USER wins!!!')
    }else{
        console.log('COMPUTER wins')
    }
}