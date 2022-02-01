let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*10)
}

const compareGuesses = (hguess, cguess, targetnumber) =>{
    let dif1 = hguess - targetnumber
    let dif2 = cguess - targetnumber
    if(dif1< 0){
        dif1= dif1*-1
    }
    if(dif2<0){
        dif2=dif2*-1
    }
    if(dif2<dif1){
        return false
    }else{
        return true
    }
}

const updateScore = winner =>{
    if(winner==='human'){
        humanScore += 1
    }else{
        computerScore += 1
    }
}

const advanceRound = () =>{
    currentRoundNumber += 1
}