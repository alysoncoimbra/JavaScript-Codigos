var hotel = {
	//inicio propriedades
	name: 'Quay',
	rooms: 40,
	booked: 25,
	//fim propriedades
	//inicio métodos
	checkAvailability: function(){
		return this.rooms - this.booked;
	}
	//fim métodos
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();