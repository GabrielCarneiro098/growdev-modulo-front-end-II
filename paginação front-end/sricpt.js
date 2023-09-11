const board = document.querySelector("#board");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
var page = 1;

axios
  .get("https://api-recados-nk2h.onrender.com/recados")
  .then(function (response) {
    recados = response.data;
    recados.forEach((recado) => {
      board.innerHTML += `<div class="card">
        <h1>${recado.nome}</h1>
        <h3>${recado.titulo}</h3>
        <p>${recado.descricao}</p>
      </div>`;
    });
    if (page == 1) {
      prev.style.display = "none";
    }
  });

function prevPage() {
  page--;
  axios
    .get(`https://api-recados-nk2h.onrender.com/recados?page=${page}`)
    .then(function (response) {
      recados = response.data;
      board.innerHTML = "";
      recados.forEach((recado) => {
        board.innerHTML += `<div class="card">
          <h1>${recado.nome}</h1>
          <h3>${recado.titulo}</h3>
          <p>${recado.descricao}</p>
        </div>`;
      });
    });
  if (page == 1) {
    prev.style.display = "none";
  }
  next.style.display = "flex";
}

function nextPage() {
  page++;
  axios
    .get(`https://api-recados-nk2h.onrender.com/recados?page=${page}`)
    .then(function (response) {
      recados = response.data;
      console.log(recados);
      if (recados.length < 4) {
        next.style.display = "none";
      }
      board.innerHTML = "";
      recados.forEach((recado) => {
        board.innerHTML += `<div class="card">
          <h1>${recado.nome}</h1>
          <h3>${recado.titulo}</h3>
          <p>${recado.descricao}</p>
        </div>`;
      });
    });
  prev.style.display = "flex";
}

prev.addEventListener("click", prevPage);

next.addEventListener("click", nextPage);
