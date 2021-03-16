//Cria o array
var colors = ['white', 
			  'black', 
			  'custom']
//Atualiza o terceiro item
colors[2] = 'beige';
//Obtém o elemento com o Id colors
var el = document.getElementById('colors');

//substitui o terceiro item no array
el.textContent = colors[2];
