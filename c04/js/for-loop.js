var scores = [24, 32, 17]; //Array contendo as notas das três rodadas
var arrayLength = scores.length; //Resgatando o número de tens do array
var roundNumber = 0; //Declarando e inicializando a variável acumuladora
var msg = ''; //Mensagem que será exibida no final
var i; //Variável de controle para o laço FOR

for (i = 0; i < arrayLength; i++) {
	
	//acumulando o numero de rounds
	roundNumber = (i + 1);

	//mostrando o numero atual do round
	msg += 'Round ' + roundNumber + ': ';

	//mostrando o score no round atual e quebrando  a linha
	msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;