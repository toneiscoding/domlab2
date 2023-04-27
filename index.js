let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ["grass", "fire", "water"]

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        //<img id ="grass", "fire", "water"
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.addEventListener("click", selectChoice);
        choice.src = choices[i] + ".png";
        document.getElementById("choices").append(choice)
    }
}

// function selectChoice() {
//     you = this.id;
//     document.getElementById("your-choice").src = you + ".png";
// }

//attaching the image and click
const handleChoiceClick = (url, myPokemon) =>{
    let myChoiceImage = document.querySelector("#your-choice")
    myChoiceImage.src = url 
    console.log(url)
    console.log(choices)
    //random for opponent
    opponentPokemon = choices[Math.floor(Math.random() * 3)]; // 0- .999999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = "./images/"+ opponentPokemon + ".png";
    console.log(myPokemon)
    //check for winner
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
        console.log("You Lose!")       
        } else if (myPokemon == "fire") {
            console.log("You Win!")
        } else if (myPokemon == "grass") {
            console.log("Again!")
        }
         }
    if (opponentPokemon == "fire") {
        if (myPokemon == "gras") {
        console.log("You Lose!")       
        } else if (myPokemon == "water") {
            console.log("You Win!")
        } else if (myPokemon == "fire") {
            console.log("Again!")
        }
         }


}
 //you are choosing
let chooseWater = document.querySelector("#choices #water");
let chooseGrass= document.querySelector("#choices #grass");
let chooseFire = document.querySelector("#choices #fire");

chooseWater.addEventListener("click", ()=> handleChoiceClick(chooseWater.src, "water"))
chooseGrass.addEventListener("click", ()=> handleChoiceClick(chooseGrass.src, "grass"))
chooseFire.addEventListener("click", ()=> handleChoiceClick(chooseFire.src, "fire"))

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
// }
// // enemyGrassPokemon.addEventListener("click", (e)=>handlePokemonClick())
// // enemyFirePokemon.addEventListener("click", (e)=>handlePokemonClick())
// // enemyWaterPokemon.addEventListener("click", (e)=>handlePokemonClick())
// myGrassPokemon.addEventListener("click", (e)=>handlePokemonClick(e))
// myFirePokemon.addEventListener("click", (e)=>handlePokemonClick(e))
// myWaterPokemon.addEventListener("click", (e)=>handlePokemonClick(e))
