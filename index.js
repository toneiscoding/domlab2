

///These lines of code declare four variables with initial values. myPokemon and opponentPokemon are currently undefined, and yourScore and opponentScore are set to 0.
let myPokemon;
let yourScore = 0;
let opponentPokemon;
let opponentScore = 0;

//This line of code declares an array called choices containing the strings "grass", "fire", and "water" which will reprsent our choices of elements of our pokemon represented by squirtle, bulbasaur and charmander to their respected elements.
let choices = ["grass", "fire", "water"]


//These lines of code set an onload event handler that creates three img elements, one for each choice in the choices array. Each img element is assigned an id corresponding to its associated choice, and its src attribute is set to the string value of the choice plus ".png". The addEventListener method is used to attach a click event handler called selectChoice to each img element. Finally, each img element is appended as a child of the element with an id of "choices".
window.onload = function() {
    for (let i = 0; i < 3; i++) {
        //<img id ="grass", "fire", "water"
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice)
    }
}



//attaching the image and click
const handleChoiceClick = (url, myPokemon) =>{
    let myChoiceImage = document.querySelector("#your-choice")
    myChoiceImage.src = url 
    console.log(url)
    console.log(choices)
    //randomizes for opponent's choice.  this is attached to the html that has the images and src for each of the elements.
    opponentPokemon = choices[Math.floor(Math.random() * 3)]; // 0- .999999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = "./images/"+ opponentPokemon + ".png";
    console.log(myPokemon)
    //these next sets tell which elements beat which, and how the scoring system is set up 
    if (opponentPokemon == "water") {
        if (myPokemon == "fire") {
            opponentScore += 1;
        console.log("You Lose!")       
        } else if (myPokemon == "grass") {
            yourScore += 1;
            console.log("You Win!")
        } else if (myPokemon == "water") {
            console.log("Again!")
        }
         }
    if (opponentPokemon == "grass") {
        if (myPokemon == "water") {
            opponentScore += 1;
        console.log("You Lose!")       
        } else if (myPokemon == "fire") {
            yourScore +=1;
            console.log("You Win!")
        } else if (myPokemon == "grass") {
            console.log("Again!")
        }
         }
    if (opponentPokemon == "fire") {
        if (myPokemon == "grass") {
            opponentScore += 1;
        console.log("You Lose!")       
        } else if (myPokemon == "water") {
            yourScore += 1;
            console.log("You Win!")
        } else if (myPokemon == "fire") {
            console.log("Again!")
        }
         }
//this attaches the scores to the screen
document.getElementById("your-score").innerText = yourScore;
document.getElementById("opponent-score").innerText = opponentScore;
//this tells you a message depending on if your score is 5 or the opponent score is 5 first.  
if (yourScore >= 5) {
    alert("You win, you big winner! PLAY AGAIN! Choose your Pokemon!");
    resetGame();
} else if (opponentScore >= 5) {
    alert("You lose, dust yourself off and try again! Choose your Pokemon");
    resetGame()
}

}
 //you are choosing the elements here with the choices id and the each of the leements
let chooseWater = document.querySelector("#choices #water");
let chooseGrass= document.querySelector("#choices #grass");
let chooseFire = document.querySelector("#choices #fire");
///here after the choices are made were adding an event listener to each of these elements, when the element is clicked, an arrow function is called that passes the 'src' of the clicked element and a string reprsenting the type of pokemon associated with that element to the 'handleCHoiceClick()' function/
// In other words, these lines of code set up the click handlers for the Pokemon choices in the game, so that when the user clicks on a choice, the handleChoiceClick() function is called with the appropriate parameters.
chooseWater.addEventListener("click", ()=> handleChoiceClick(chooseWater.src, "water"))
chooseGrass.addEventListener("click", ()=> handleChoiceClick(chooseGrass.src, "grass"))
chooseFire.addEventListener("click", ()=> handleChoiceClick(chooseFire.src, "fire"))
//here we are resetting the values of yourScore and opponentScore to 0
function resetGame() {
    yourScore = 0;
    opponentScore = 0;
    document.getElementById("you-score").innerText = yourScore;
//this line updates the text content of the HTML element with the 'id' of 'you-score' to the value of of 'yourScore'.  Which means its reset to 0
    document.getElementById("opponent-score").innerText = opponentScore;
    document.getElementById("your-choice").src = "";
//This line sets the src attribute of the HTML element with the id of "your-choice" to an empty string, which means that the image of the player's chosen Pokemon is removed from the page.
    document.getElementById("opponent-choice").src= "";
//This line sets the src attribute of the HTML element with the id of "opponent-choice" to an empty string, which means that the image of the opponent's chosen Pokemon is removed from the page.
}

//keep track of score



// let enemyGrassPokemon = document.querySelector("#enemy-container .grass")

// let enemyFirePokemon = document.querySelector("#enemy-container .fire")

// let enemyWaterPokemon = document.querySelector("#enemy-container .water")

// let myGrassPokemon = document.querySelector("#my-container .grass")

// let myFirePokemon = document.querySelector("#my-container .fire")

// let myWaterPokemon = document.querySelector("#my-container .water")

// const handlePokemonClick = (e) => { 
//     console.log(e.target);
//     console.log("pokemon was clicked");
//     /* -we want to next to have a function after I choose a pokemon, the computer chooses a random pokemon,
//      - we want to build a loop that that based off of which pokemon were selected, we choose a winner and a looser or if a tie occurs
//      - we want to log on the message container which pokemon wins againt which pokemon or we want to code which poke ties which pokemon
//      - In my container and the enemy containers we want to high light which pokemon was chosen with a highlight or light around the pokemon as a visual effect on the page()
//      -We want to see the white background of the pokemon be transparent
//      -Whe   
//      -We want to log the wins and losses of each player in some text next to their respective areas on the screen
//      -We want to add music, preferably pokemon battle music from GEN 1 pokemon games
//      -Change the my-container pokemon images to the back-side view of each pokemon
//      -we want to make a reset button to clear the wins and losses; start a new game
//      - I want to change so the images are on a leveled playing field- so smaller images and uses flex box to put the pokemon onto the field and to keep them on the page absolutely even when the window gets bigger or smaller

//     */
