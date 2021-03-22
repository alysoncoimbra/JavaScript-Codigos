var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

//Verifica se o usuário passou  em pelo menos um teste
var minPass = ((score1 >= pass1) || (score2 >= pass2));

//Cria uma mensagem e inverte o valor lógico da variável minPass (de true para false)
var msg = 'Resit required: ' + !(minPass);

//Imprime a mensagem na tela
var el = document.getElementById('answer');
el.textContent = msg;