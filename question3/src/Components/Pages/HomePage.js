const HomePage = () => {
  const main = document.querySelector('main');
  place();

  main.innerHTML = `
  <div class="container">
    <div class="row justify-content-center">
      <div class="text-center">
        <h1>Pays</h1>
      </div>
      <div class="col-md-6">
        <ul class="list-group" id="game">
        </ul>
      </div>
      <div class="text-center" id="recommended">
      </div>
    </div>
  </div>
  `;
  Recomended();
};

async function place() {
  const response = await fetch('https://places-exam-api.azurewebsites.net/places');
  const responseFinal = await response.json();
  console.log('tableau');
  console.log(responseFinal);
  let tableVilleHtml = '';
  responseFinal.forEach((item) => {
    tableVilleHtml += `<li class="list-group-item">${item.name}</li>`;
  });
  const main = document.querySelector('#game');
  main.innerHTML += tableVilleHtml;
  return tableVilleHtml;
}

async function Recomended() {
  const response = await fetch('https://places-exam-api.azurewebsites.net/recommended');
  const responseFinal = await response.json();
  console.log('Recomended');
  console.log(responseFinal);
  const main = document.querySelector('div#recommended');
  main.innerHTML += `
  <div class="text-center">
    <h1>Pays Recommandé</h1>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <ul class="list-group">
        <li class="list-group-item">${responseFinal.name}</li>
      </ul>
    </div>
  </div>
    `;
}

export default HomePage;
