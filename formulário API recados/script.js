const form = document.querySelector("form");
const loginBtn = document.getElementById("login");
const board = document.querySelector("#board");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  axios
    .get("https://api-recados-nk2h.onrender.com/login", {
      email: email,
      senha: senha,
    })
    .then(function (response) {
      const body = document.querySelector("body");
      const recados = response.data.paginatedRecados;
      body.removeChild(form);
      recados.forEach((recado) => {
        board.innerHTML += `<div class="recado">
        <h1>${recado.id}</h1>
        <h2>${recado.titulo}</h2>
        <p>${recado.descricao}</p>
      </div>
      `;
      });
      body.innerHTML += `<footer>
      <button id="prev" class="navigateButton">Previous</button>
      <button id="next" class="navigateButton">Next</button>
    </footer>`;
      const prev = document.querySelector("#prev");
      const next = document.querySelector("#next");
    })
    .catch(function (response) {
      console.log(response);
      alert(response.response.data);
    });
});

next.addEventListener("click", function () {
  axios.get("/recados").then(function (response) {
    console.log(response);
  });
});
