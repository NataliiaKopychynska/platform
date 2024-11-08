// main.js

import { fetchImages } from './js/pixabay-api';
import { renderImages, renderError } from './js/render-function';
import './css/styles.css';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

// Логіка обробки сабміту форми
searchForm.addEventListener('submit', async e => {
  e.preventDefault(); // Запобігаємо перезавантаженню сторінки при сабміті

  const query = searchInput.value.trim();

  // Перевірка на порожнє поле
  if (!query) {
    renderError('Please enter a search query.');
    return;
  }

  // Виконання запиту до API
  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      renderError(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      renderImages(images); // Виводимо зображення
    }
  } catch (error) {
    renderError(
      'An error occurred while fetching images. Please try again later.'
    );
  }

  searchInput.value = ''; // Очищення поля вводу після пошуку
});
