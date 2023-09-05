const characters = document.querySelector("#characters");
const totalCharacters = document.querySelector("#personagens");
const totalLocations = document.querySelector("#localizacoes");
const totalEpisodes = document.querySelector("#episodios");
const previousButton = document.querySelectorAll(".previous");
const nextButton = document.querySelectorAll(".next");
const API_characters = "https://rickandmortyapi.com/api/character";
const API_locations = "https://rickandmortyapi.com/api/episode";
const API_episodes = "https://rickandmortyapi.com/api/location";
var actualPage = 1;
if (actualPage == 1) {
  previousButton.forEach((element) => {
    element.style.display = "none";
  });
}

axios.get(API_episodes).then(function (response) {
  totalEpisodes.innerHTML = response.data.info.count;
});

axios.get(API_locations).then(function (response) {
  totalLocations.innerHTML = response.data.info.count;
});

axios.get(API_characters).then(function (response) {
  const personagens = response.data.results;
  totalPages = response.data.info.pages;

  totalCharacters.innerHTML = response.data.info.count;

  personagens.forEach((personagem) => {
    characters.innerHTML += `<article class="card">
      <figure>
        <img src=${personagem.image} alt="" />
      </figure>
      <aside>
        <div>
        <h3>${personagem.name}</h3>
        <div class="status">
            <div class=${personagem.status}></div>
            <h5>${personagem.status} - ${personagem.species}</h5>
        </div>
        </div>
        <div>
        <h4>Ultima localização conhecida:</h4>
        <p>${personagem.location.name}</p>
        </div>
      </aside>
    </article>`;
  });
});

previousButton.forEach((element) => {
  element.addEventListener("click", previousPage);
});

nextButton.forEach((element) => {
  element.addEventListener("click", nextPage);
});

function previousPage() {
  if (actualPage > 1) {
    actualPage--;
  }
  axios
    .get(`https://rickandmortyapi.com/api/character/?page=${actualPage}`)
    .then(function (response) {
      characters.innerHTML = "";

      const personagens = response.data.results;

      personagens.forEach((personagem) => {
        characters.innerHTML += `<article class="card">
          <figure>
            <img src=${personagem.image} alt="" />
          </figure>
          <aside>
            <div>
            <h3>${personagem.name}</h3>
            <div class="status">
                <div class=${personagem.status}></div>
                <h5>${personagem.status} - ${personagem.species}</h5>
            </div>
            </div>
            <div>
            <h4>Ultima localização conhecida:</h4>
            <p>${personagem.location.name}</p>
            </div>
          </aside>
        </article>`;
      });
      if (actualPage !== response.data.info.pages) {
        nextButton.forEach((element) => {
          element.style.display = "block";
        });
      }
    });
  if (actualPage == 1) {
    previousButton.forEach((element) => {
      element.style.display = "none";
    });
  }
}

function nextPage() {
  actualPage++;
  axios
    .get(`https://rickandmortyapi.com/api/character/?page=${actualPage}`)
    .then(function (response) {
      characters.innerHTML = "";

      const personagens = response.data.results;

      personagens.forEach((personagem) => {
        characters.innerHTML += `<article class="card">
          <figure>
            <img src=${personagem.image} alt="" />
          </figure>
          <aside>
            <div>
            <h3>${personagem.name}</h3>
            <div class="status">
                <div class=${personagem.status}></div>
                <h5>${personagem.status} - ${personagem.species}</h5>
            </div>
            </div>
            <div>
            <h4>Ultima localização conhecida:</h4>
            <p>${personagem.location.name}</p>
            </div>
          </aside>
        </article>`;
      });
      previousButton.forEach((element) => {
        element.style.display = "block";
      });

      if (actualPage == response.data.info.pages) {
        nextButton.forEach((element) => {
          element.style.display = "none";
        });
      }
    });
}
