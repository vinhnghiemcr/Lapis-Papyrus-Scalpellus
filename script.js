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
user.choice = gameOptions[0];
computer.choice = gameOptions[0];//computerChooses();

//function display() will add a paragraph element to the end of the body
//with the result of the compareChoices() function
const display = (text) => {
  document.querySelector('body').append(document.createElement("p").innerHTML = (text).toString());
}

//Function compareChoices()  determine who wins
const compareChoices = (userChoice, computerChoice) => {
if (userChoice == gameOptions[0]){
  if (userChoice === computerChoice){
    display("We have a tie! The player and the computer choose " + gameOptions[0]);    
  } else if (computerChoice === gameOptions[1]) {
          display("The user wins! The user chooses " + gameOptions[0] + " and the computer chooses " + gameOptions[1]);   
         } else  {
                  display("The computer wins! The user chooses " + gameOptions[0] + " and the computer chooses " + gameOptions[2]); 
                }
} else if (userChoice === gameOptions[1]){
          if (computerChoice === gameOptions[0]){
            display("The computer wins! The user chooses " + gameOptions[1] + " and the computer chooses " + gameOptions[0]);
          } else if (computerChoice === gameOptions[1]){
            display("We have a tie! The user chooses and the computer chooses " + gameOptions[1]);
          } else {
            display("The user wins! The user chooses " + gameOptions[1] + " and the computer chooses " + gameOptions[2]);
          }
} else {
  if (computerChoice === gameOptions[0]){
            display("The user wins! The user chooses " + gameOptions[2] + " and the computer chooses " + gameOptions[0]);
          } else if (computerChoice === gameOptions[1]){
            display("The computer wins! The user chooses " + gameOptions[2] + " and the computer chooses " + gameOptions[1]);
          } else {
            display("We have a tie! The user and the computer choos " + gameOptions[2]);
          }
};
}

//compare the user's choice and computer's choice
compareChoices(user.choice, computer.choice);