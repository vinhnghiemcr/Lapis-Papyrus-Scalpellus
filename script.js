//gameOptions array will hold 3 values that a player can posibblely choose from
let gameOptions = ["Lapis", "Papyrus", "Scalpellus"]

//Create a user object
let user = {
  choice: null
}
//create computer object
let computer = {
  choice: null
}
//function computerChooses will chooses gameOptions for the computer
const computerChooses = () => {
  return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}
//playerChoice and compChoice will store the option which player and computer choice 
//user.choice = null;
//computer.choice = computerChooses();

//function play() will initialize the computer's choice and then compare with player's choice to decide who is winner
function play(){
  computer.choice = computerChooses();
  compareChoices(user.choice, computer.choice);
}



//Responce for event where player clicks on the  Lapis button
document.querySelector('#rock').onclick = function() {
  user.choice = gameOptions[0];
  clear();
  play();
};
//Responce for event where player clicks on the  Papyrus button
document.querySelector('#paper').onclick = function() {
  user.choice = gameOptions[1];
  clear();
  play();
};
//Responce for event where player clicks on the  Scalpellus button
document.querySelector('#scissor').onclick = function() {
  user.choice = gameOptions[2];
  clear();
  play();
};

//function display() will add a paragraph element to the end of the body
//with the result of the compareChoices() function
const display = (text) => {
  document.querySelector('#screen').append(document.createElement("div").innerContent = (text).toString());
}
//function clear() will clear the previous relult if it has any
const clear = () => {
  document.querySelector('#screen').innerHTML = "";
}

//Function compareChoices()  determine who wins
const compareChoices = (userChoice, computerChoice) => {
if (userChoice == gameOptions[0]){
  if (userChoice === computerChoice){
    display("We have a tie! The player and the computer choose " + gameOptions[0]);    
  } else if (computerChoice === gameOptions[1]) {
          display("The computer wins! The player chooses " + gameOptions[0] + " and the computer chooses " + gameOptions[1]);   
         } else  {
                  display("The player wins! The player chooses " + gameOptions[0] + " and the computer chooses " + gameOptions[2]); 
                }
} else if (userChoice === gameOptions[1]){
          if (computerChoice === gameOptions[0]){
            display("The player wins! The player chooses " + gameOptions[1] + " and the computer chooses " + gameOptions[0]);
          } else if (computerChoice === gameOptions[1]){
            display("We have a tie! The user chooses and the computer chooses " + gameOptions[1]);
          } else {
            display("The computer wins! The player chooses " + gameOptions[1] + " and the computer chooses " + gameOptions[2]);
          }
} else {
  if (computerChoice === gameOptions[0]){
            display("The computer wins! The player chooses " + gameOptions[2] + " and the computer chooses " + gameOptions[0]);
          } else if (computerChoice === gameOptions[1]){
            display("The player wins! The player chooses " + gameOptions[2] + " and the computer chooses " + gameOptions[1]);
          } else {
            display("We have a tie! The player and the computer choose " + gameOptions[2]);
          }
};
}

//compare the user's choice and computer's choice
//compareChoices(user.choice, computer.choice);