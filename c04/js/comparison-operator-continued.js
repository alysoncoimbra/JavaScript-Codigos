var score1 = 90; //Primeira nota do usuário
var score2 = 95; //Segunda nota do usuário
var highScore1 = 75; //A maior nota da primeira rodada
var highScore2 = 95; //A maior nota da segunda rodada

var comparison = (score1 + score2) > (highScore1 + highScore2); //180 > do que 170 ? sim entao o valor da variável comparison é true

//Resgatando o elemento da html e substituindo ele pelas strings
var el = document.getElementById('answer');
el.textContent = 'New high score: ' + comparison;