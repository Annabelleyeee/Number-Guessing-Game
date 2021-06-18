//Introductory line
console.log ('Welcome to this Number Guessing game!')

//Asking for the user's names
let definedName1 = prompt ('You are player 1, What is your name?')
let definedName2 = prompt ('You are player 2, What is your name?')

//preselecting a random name (in case the user does not enter a name)
let randomName = ['Zoe', 'Anna', 'Xanthe', 'Abi', 'Ella'];
let pickedRandomName1 = randomName [Math.floor(Math.random() * 4 + 0)];
let pickedRandomName2 = randomName [Math.floor(Math.random() * 4 + 0)];

//depending on if the user enters their name/s or not, a differnet welcome message will appear.
if (definedName1 == '' && definedName2 == ''){
  console.log ('You have each been assigned a random name!')
  console.log ('Hi ' + pickedRandomName1+ ' and ' + pickedRandomName2 + ', get ready to play')

} else if (definedName1 != '' && definedName2 != ''){
  console.log ('Hi ' + definedName1+ ' and ' + definedName2 + ', get ready to play')

} else if (definedName1 == '' && definedName2 != ''){
  console.log ('Hi ' + pickedRandomName1+ ' and ' + definedName2 + ', get ready to play')

  } else if (definedName1 != '' && definedName2 == ''){
  console.log ('Hi ' + definedName1+ ' and ' + pickedRandomName2 + ', get ready to play')
  }

//the value of players will either be their selected name or a random name
let player1 = (definedName1 || pickedRandomName1)
let player2 = (definedName2 || pickedRandomName2)

//setting the round and points to 0
let round = 1;
let pointPlayer1 = 0;
let pointPlayer2 = 0;

play();
function play() {

//the varible random will produce a random number between 1 and 20
random = Math.floor(Math.random() * 20 + 1);


//main game = each player has to guess the numoer which will be  between 1 and 20
do{
  guessPlayer1 = prompt( player1 + ' please enter your guess (between 1 - 20:');

    if (guessPlayer1 > random){
			console.log('Your guess is too high');
		} else if (guessPlayer1 < random) {
			console.log('Your guess is too low');
		} else {
      // if they get is correct then a point is added
			console.log('You got it correct');
    pointPlayer1++
		console.log('You have ' + pointPlayer1 + 'points');
    break;
    }
round++

  guessPlayer2 = prompt(player2 + ' please enter your guess (between 1 - 20:');

if (guessPlayer2 > random){
			console.log('Your guess is too high');
		} else if (guessPlayer2 < random) {
			console.log('Your guess is too low');
		} else {
			console.log('You got it correct');
    pointPlayer2++
		console.log('You have ' + pointPlayer2 + ' points.');
    break;
    }
    round++
// each player gets 3 chances to guess the correct number
} while (round <= 6){

}

// after the 3 chances, the user is asked if they want to play again or not.
let again = prompt ('Do you want to play again?');

if (again =='yes') {
  play();
} else{
  console.log('Your final score is ' + point)
	console.log('Game Over');
}
}







