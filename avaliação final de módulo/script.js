const characters = document.querySelector("#characters");
const totalCharacters = document.querySelector("#personagens");
const totalLocations = document.querySelector("#localizacoes");
const totalEpisodes = document.querySelector("#episodios");
const API_characters = "https://rickandmortyapi.com/api/character";
const API_locations = "https://rickandmortyapi.com/api/location";
const API_episodes = "https://rickandmortyapi.com/api/location";

axios.get(API_characters).then(function (response) {
  const personagens = response.data.results;
  const nextPage = response.data.info.page;

  totalCharacters.innerHTML = response.data.info.count;

  console.log(nextPage);
  console.log(response);
  console.log(personagens);

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
        <div>
        <h4>Visto ultima vez em:</h4>
        <p>...</p>
        </div>
      </aside>
    </article>`;
  });
});

axios.get(API_locations).then(function (response) {
  totalLocations.innerHTML = response.data.info.count;
  console.log(response);
});

axios.get(API_episodes).then(function (response) {
  totalEpisodes.innerHTML = response.data.info.count;
  console.log(response);
});
