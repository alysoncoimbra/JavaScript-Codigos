var score1 = 8; //Nota da primeira rodada
var score2 = 8; //Nota da segunda rodada
var pass1 = 6; //Valor de aprovação 1
var pass2 = 6; //Valor de aprovação 2

//Verifica se o usuário passou na primeira rodada E na segunda
var passBoth = ((score1 >= pass1) && (score2 >= pass2));

//Cria uma mensagem para mostrar o resultado 
var msg = 'Both rounds passed: ' + passBoth;

//Obtem o elemento da pagina html e exibe a mensagem da variavel msg
var el = document.getElementById('answer');
el.textContent = msg;
