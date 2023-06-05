import {PixabayApi} from '../src/js/pixabay-api';
import {createGalleryCards} from '../src/js/gallery.js'

const pixabayApi = new PixabayApi();

console.log(pixabayApi);

const searchFormEl = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery-container');
const loadMoreBtnEl = document.querySelector('.load-more');

pixabayApi.fetchPhotosByQuery(); 

const onSearchFormElSubmit = event => {
    event.preventDefault();

    pixabayApi.q = event.target.elements.searchQuery.value;
    pixabayApi.fetchPhotosByQuery().then(img => {
        console.log(img);
        galleryContainer.innerHTML = createGalleryCards(img.hits);
        loadMoreBtnEl.classList.remove('is-hidden')
    }).catch(err =>{
        console.log(err);
    })
};


const onLoadMoreBtnElClick = event => {
    pixabayApi.page += 1;
   
    pixabayApi.fetchPhotosByQuery().then(img => {
        galleryContainer.insertAdjacentHTML('beforeend', createGalleryCards(img.hits));
    }).catch(err => {
        console.log(err);
    });
}

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick);












// const onloadMoreClickFoo = e => {
    
//     jsonPixabayApi.page += 1;
//     jsonPixabayApi.fetchFromAPi()
//         .then(images => {
//             galleryListEl.insertAdjacentHTML('beforeend', createImgCard(images.hits))
//         console.log(images);
//         })
//         .catch(err => {
//             console.log(err);
//     })
// }