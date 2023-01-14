
import  ville  from '../../utils/places';

const PhotoPage = (index = 0) => {

  const main = document.querySelector('main');
    const html=
  `
  <div class="container">
  <div id="carousel">
  <div class="row justify-content-center">
    <img src="${ville[index].image}" alt="Bootstrap" class="img-rounded w-50">
  <div class="text-center">
  <h1>${ville[index].name}</h1>
  </div>
  </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary mx-2" id="boutonArriere">previous</button>
            <button class="btn btn-secondary mx-2" id="boutonNext">next</button>
        </div>
    </div>
</div>
  `;
  main.innerHTML = html
  const arriere = document.getElementById("boutonArriere");
  const suivant = document.getElementById("boutonNext");

  arriere.addEventListener("click", () => {
    let newIndex = index;
    newIndex-= 1;
    if (newIndex < 0){
        newIndex = ville.length-1;
    }
    return PhotoPage(newIndex);
    });

  suivant.addEventListener('click', () => {
    let newIndex = index;
    newIndex +=1;
    if(newIndex > ville.length-1){
        newIndex = 0;
    }
    PhotoPage(newIndex);
  });
};

export default PhotoPage;
