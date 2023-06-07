import axios from 'axios';

export class PixabayApi {
  static URL = 'https://pixabay.com/api';
  static KEY = '37021483-288521f302817cbccd0ddc5ec';
  constructor() {
    this.page = null;
    this.q = null;
  }
   fetchPhotosByQuery() {
    const searchParams = new URLSearchParams({
      key: PixabayApi.KEY,
      q: this.q,
      page: this.page,
      per_page: 40,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });

    return axios.get(`${PixabayApi.URL}/?${searchParams}`);
  }
}

