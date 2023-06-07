import Notiflix from 'notiflix';
import { PixabayApi } from '../src/js/pixabay-api';
import { createGalleryCards } from '../src/js/gallery.js';

const pixabayApi = new PixabayApi();

console.log(pixabayApi);

const searchFormEl = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery-container');
const loadMoreBtnEl = document.querySelector('.load-more');

pixabayApi.fetchPhotosByQuery();

const onSearchFormElSubmit = async event => {
  event.preventDefault();
  if (event.target.elements.searchQuery.value.trim() === '') {
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  pixabayApi.page = 1;
  pixabayApi.q = event.target.elements.searchQuery.value.trim();
  try {
    const { data } = await pixabayApi.fetchPhotosByQuery();

    if (data.total === 0) {
      galleryContainer.innerHTML = ' ';
      loadMoreBtnEl.classList.add('is-hidden');
      return Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else if (data.total <= 40) {
      console.log(loadMoreBtnEl);
      loadMoreBtnEl.classList.add('is-hidden');
      Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);

      galleryContainer.innerHTML = createGalleryCards(data.hits);
    } else {
      Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
      loadMoreBtnEl.classList.remove('is-hidden');
      galleryContainer.innerHTML = createGalleryCards(data.hits);
    }
    console.log(data);
    galleryContainer.innerHTML = createGalleryCards(data.hits);
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnElClick = async event => {
  pixabayApi.page += 1;
  try {
    const { data } = await pixabayApi.fetchPhotosByQuery();

    if (data.totalHits < pixabayApi.page * 40) {
      console.log(data.hits);
      loadMoreBtnEl.classList.add('is-hidden');
      galleryContainer.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.hits)
      );
      return Notiflix.Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
    }
    galleryContainer.insertAdjacentHTML(
      'beforeend',
      createGalleryCards(data.hits)
    );
    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick);
