var msg; //mensagem 
var level = 4; //Nivel

switch (level) { //Valor do switch
	case 1:  	 //Possíveis ocorrências de valores do switch
		msg = 'Good luck on the first test'; 
		break;

	case 2:
		msg = 'Secound of three - keep going';
		break;

	case 3:
		msg = 'Final round, almost there';
		break;

	default:
		msg = 'Good luck';
		break;
}

var el = document.getElementById('answer');
el.textContent = msg;