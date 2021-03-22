var score = 75; //Score atual do usuário
var msg = ' '; //Sempre atribua uma string em branco para uma variavel do tipo caracter 
			   //para defini-la como sendo desse tipo

//função que concatena uma string a variável msg
function congratulate() {
	msg += 'Congratulations! ';
}

//teste do score
if (score >= 50) {
	congratulate();
	msg += 'Proceed to the next round.';
}

//exibindo a mensagem na tela
var el = document.getElementById('answer');
el.textContent = msg;