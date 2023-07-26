const cards = document.querySelectorAll(".card");
const titulos = document.querySelectorAll(".titulo-card");
const textos = document.querySelectorAll(".descricao-card");
const botoes = document.querySelectorAll("button");
const botoesEditar = document.querySelectorAll(".botao-editar");
const botoesDeletar = document.querySelectorAll(".botao-apagar");

cards.forEach((card) => {
  card.style.backgroundColor = "#e16e0e";
});

titulos.forEach((titulo) => {
  titulo.innerText = "Meu Card";
  titulo.style.color = "#2b385b";
});

textos.forEach((texto) => {
  texto.innerHTML = "Descrição modificada pelo JavaScript";
  texto.style.color = "white";
  texto.style.position = "relative";
  texto.style.top = "30px";
});

botoes.forEach((botao) => {
  botao.style.position = "relative";
  botao.style.top = "70px";
});

botoesEditar.forEach((botao) => {
  botao.style.padding = "10px";
  botao.style.backgroundColor = "green";
  botao.style.borderRadius = "5px";
  botao.style.border = "0";
  botao.style.color = "white";
  botao.setAttribute("onclick", "editarCard()");
});

botoesDeletar.forEach((botao) => {
  botao.style.padding = "10px";
  botao.style.backgroundColor = "red";
  botao.style.borderRadius = "5px";
  botao.style.border = "0";
  botao.style.color = "white";
  botao.setAttribute("onclick", "apagarCard()");
});

function editarCard() {
  alert("Clicou em editar");
}

function apagarCard() {
  var certeza = confirm("Tem certeza que deseja deletar este card?");

  if (certeza) {
    alert("Comfirmado!");
  } else {
    alert("Cancelou!");
  }
}
