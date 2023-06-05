export const createGalleryCards = imagesInfo => {
    const images = imagesInfo.map(imgInfo => {
        return`
        <div class="photo-card">
        <a class=".gallery__item" href="${imgInfo.largeImageURL}">
      <img src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" loading="lazy" />
        </a>
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
    `
    });
    return images.join('');
};













//     const imgArray = imgInfo.map(img => {
//       return `
//       <a class=".gallery__image" href="${img.largeImageURL}">
//       <div class="photo-card">
//     <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
//     <div class="info">
//       <p class="info-item"
//         <b>Likes</b><br>${img.likes}
//       </p>
//       <p class="info-item">
//         <b>Views</b>${img.views}
//       </p>
//       <p class="info-item">
//         <b>Comments</b>${img.comments}
//       </p>
//       <p class="info-item">
//         <b>Downloads</b>${img.downloads}
//       </p>
//     </div>
//   </div>
//   </a>`;
//     });
//     return imgArray.join('');
//   };


