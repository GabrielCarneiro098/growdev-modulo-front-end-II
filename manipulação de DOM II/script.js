function editarCard() {
  let text = prompt("Digite o texto a ser alterado!");
  let afirmacao = confirm("Tem certeza que deseja alterar o card?");
  if (afirmacao) {
    document.getElementById("descricao-card").innerText = text;
  }
}

let teste = document.querySelectorAll(".descricao-card");
console.log(teste);

function deletarCard() {}
