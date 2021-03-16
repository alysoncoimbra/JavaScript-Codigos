var greeting = 'Howdy '; //cria uma variável para inserir a saldação
var name = 'Molly';//cria uma variável para o nome
var message = ', please check your order: ';//cria uma variável para a mensagem
var welcome = greeting + name + message;//cria uma variável para concatenar a saldação com o nome e a mensagem

var sign = 'Montague House';//cria uma variável para o número de strings
var tiles = sign.length;//cria uma variável para contar o número de strings da variável sign
var subTotal = tiles * 5;//cria uma variável e atribui a ela o resultado da multiplicação da variável com o número de caracteres pelo valor de cada letra
var shipping = 7;//cria uma variável e atribui a ela o valor do frete
var grandTotal = subTotal + shipping;//cria uma  variável e atribui a ela o resultado da soma das variáveis subtotal mais o valor do frete


var el = document.getElementById('greeting');//cria uma variável para obter o elemento html que possui o ID greeting
el.textContent = welcome;//substitui o valor do elemento pelo conteúdo da variável welcome

var elSign = document.getElementById('userSign');//cria uma variável para obter o elemento html que possui o ID userSign
elSign.textContent = sign;//substitui o conteúdo do elemento pelo valor da variável sign

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');//cria uma va´riável para obter o elemento html que possui o ID subTotal
elSubTotal.textContent = '$' + subTotal;//substitui o conteúdo do elemento por um cifrão concatenado com o valor da variável subTotal

var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;