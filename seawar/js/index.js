var location1 = Math.floor(Math.random() * (5));
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
	guess = prompt("Вы готовы выстрелить? (введите цифру 0-6):");

	if(guess < 0 || guess > 6){
		alert("Введите валидное значение от 0 до 6!");
	}else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
			hits = hits + 1;
			alert("Попали!");
			if(hits == 3){
				isSunk = true;
				alert("Вы победили в игре!");
			}
		}else{
			alert("Мимо!");
		}
	}
}