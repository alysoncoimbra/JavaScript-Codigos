var msg = '<p><b>page title: </b>' + window.document.title + '<br />';
msg += '<b>page adress: </b>' + window.document.URL + '<br />';
msg += '<b>last modified: </b>' + window.document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;