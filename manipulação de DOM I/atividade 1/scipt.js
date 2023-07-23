const paragrafo = document.getElementById("paragrafo");

function receberNome() {
  var nome = prompt("Digite seu nome:");
  var text = "E aí " + nome + " Você está deixando o seu site dinamico";
  paragrafo.innerText = text;
}
