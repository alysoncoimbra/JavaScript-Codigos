var table = 3; 											//Unidade da tabuada
var operator = 'addition'; 								//Operação
var i = 1; 												//Váriavel contadora
var msg = ''; 											//Mensagem com os resultados

if (operator == 'addition') { 							//Se a variável operadora for igual a addition
	while (i <= 10) {									//Enquanto o contador for menor ou igual a 10
		msg += i + ' + 3 = ' + (i + table) + '<br />';	//Adiciona o resultado da multiplicação a variavel
		i++;											//Encrementa o valor do contador em 1
	}
} else {												//Caso contrário
	while (i < 11) {									//Enquanto o contador for menor que 11
		msg += i + ' x ' + table + ' = '+ (i * table) + '<br />'; //Adiciona o resultado a variável
		i++;
	}
}

var el = document.getElementById('blackboard'); //Imprime a mensagem na tela
el.innerHTML = msg;