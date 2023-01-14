import  ville  from '../../utils/places';

const HomePage = () => {
  const main = document.querySelector('main');
  const allVille = getAllVille(ville);
  main.innerHTML = `
  <div class="container">
  <div class="row justify-content-center">
  <div class="text-center">
  <h1>Place to visit</h1>
</div>
    <div class="col-md-6">
      <ul class="list-group">
        ${allVille}
      </ul>
    </div>
  </div>
</div>
  `;

};

function getAllVille(allville){
        let tableVille = '';
        allville.forEach((indexVille) => {
          tableVille += `
            <li class="list-group-item">${indexVille.name}</li>
            `;
        });

        return tableVille;
}

export default HomePage;
