(function() {

	/*Part1: Criar o objeto hotel e exibir os detalhes da oferta*/
	var hotel = {
		name: 'Park',
		roomRate: 240,
		discount: 15,
		offerPrice: function() {
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate;
		}
	};

	// exibe o nome do hotel, o preço padrão, e o preço especial
	var hotelName, roomRate, specialRate;	// declara as variáveis

	hotelName = document.getElementById('hotelName'); //obtem os elementos
	roomRate = document.getElementById('roomRate');
	specialRate = document.getElementById('specialRate');

	hotelName.textContent = hotel.name; //exibe o nome do hotel
	roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //exibe o preço
	specialRate.textContent = '$' + hotel.offerPrice(); //exibe a oferta

	//Parte2: Calcular e exibir os detalhes sobre o fim da oferta
	var expiryMsg; //mesagem exibida ao usuario
	var today;//data de hoje
	var elEnds;//O elemento que exibe a mensagem sobre o fim da oferta

	function offerExpires(today) {
		//declara as variáveis dentro da função para escopo local
		var weekFromToday, day, date, month, year, dayNames, monthNames;
		//adiciona 7 dias à data/hora atual (adicionado em milisegundos)
		weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
		//Cria o array para armazenar os nomes dos dias/meses
		dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		//coleta partes da data para mostrar na página
		day = dayNames[weekFromToday.getDay()];
		date = weekFromToday.getDate();
		month = monthNames[weekFromToday.getMonth()];
		year = weekFromToday.getFullYear();
		//Cria a mensagem
		expiryMsg = 'Offer expires next ';
		expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
		return expiryMsg;
	}

	today = new Date();	// Coloca a data de hoje na variável 
	elEnds = document.getElementById('offerEnds'); //Obtem o elemento offerEnds
	elEnds.innerHTML = offerExpires(today); // Adiciona a mensagem

}() );