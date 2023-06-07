export const createGalleryCards = imagesInfo => {
    const images = imagesInfo.map(imgInfo => {
        return`
        <a class=".gallery__item" href="${imgInfo.largeImageURL}">
        <div class="photo-card">
      <img src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item"
          <b>Likes</b><br>${imgInfo.likes}
        </p>
        <p class="info-item">
          <b>Views</b>${imgInfo.views}
        </p>
        <p class="info-item">
          <b>Comments</b>${imgInfo.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>${imgInfo.downloads}
        </p>
      </div>
    </div>
    </a>
    `
    });
    return images.join('');
};
