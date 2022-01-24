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