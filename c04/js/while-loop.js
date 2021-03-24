var i = 1;	//Configura o contador como 1
var msg = '';	//Variavel da mensagem

while (i < 10) {
	msg += i + ' x 5 = ' + (i * 5) + '<br />';
	i++;
}

document.getElementById('answer').innerHTML = msg;