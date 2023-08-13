const form = document.querySelector("form");
const loginBtn = document.getElementById("login");
const teste = document.querySelector("#teste");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  axios
    .post("https://api-recados-nk2h.onrender.com/login", {
      email: email,
      senha: senha,
    })
    .then(function (response) {
      console.log(response);
      const body = document.querySelector("body");
      const recados = response.data.paginatedRecados;
      body.innerHTML = "";
      recados.forEach((recado) => {
        console.log(recado);
        body.innerHTML += `<div class="recado">
        <h1>${recado.id}</h1>
        <h1>${recado.titulo}</h1>
        <p>${recado.descricao}</p>
      </div>`;
      });
    })
    .catch(function (response) {
      console.log(response);
      alert(response.response.data);
    });
});
