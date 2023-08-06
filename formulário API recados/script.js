const form = document.querySelector("form");
const loginBtn = document.getElementById("login");
const teste = document.querySelector("#teste");

console.log(form);

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
      window.location.href = "https://api-recados-nk2h.onrender.com/recados";
    })
    .catch(function (response) {
      console.log(response);
      alert(response.response.data);
    });
});
