function GenerateRndInt(x, y)
{
    // A function which returns a list which contains a random number between the given range (not included the highest number) and the given range
    if (x === y){
        return x;
    }
    else if (x > y){
        let tmp = x;
        x = y;
        y = tmp;
    }
    let generated = Math.floor(Math.random() * (y - x) + x);
    return [generated, x, y];
}

let generatedList = GenerateRndInt(1, 101);
let generatedNum = generatedList[0], lowerNum = generatedList[1], higherNum = generatedList[2];


function Guess(){
    // A function which handle the guessing proccess.
    let guessedNum = document.getElementById("numInputBar").value;
    document.getElementById("results").innerHTML = GuessResults(guessedNum);
}

function GuessResults(guessedNum){
    // A function which returns "lower", "higher", "guessed right" or "not in range" according to the guessed number. 
    if (guessedNum == generatedNum){
        return "Guessed right";
    }
    else if (guessedNum < lowerNum || guessedNum >= higherNum){
        return "Not in range";
    }
    else if (guessedNum < generatedNum){
        return "Higher";
    }
    else{
        return "Lower";
    }
}