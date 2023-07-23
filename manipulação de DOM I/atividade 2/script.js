var paragrafo = document.getElementById("paragrafo");
var contador = 0;

function incremento() {
  var incremento = document.getElementById("#incremento");
  contador++;
  paragrafo.innerText = `O contador está com ${contador} cliques`;
}

function reset() {
  var reset = document.getElementById("#reset");
  contador = 0;
  paragrafo.innerText = `O contador está com ${contador} cliques`;
}
