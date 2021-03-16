var pass = 50; //A pontuação que o usuário precisa
var score = 90; //A pontuação dele

/*
O uso de operadores de comparação ajuda quando precisamos satisfazer uma
condição de execução de
*/

var hasPassed = score >= pass; //A  resposta se o usuário foi aprovado

var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;