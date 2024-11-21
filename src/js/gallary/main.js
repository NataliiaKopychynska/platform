import '../../css/styles.css';

import { fetchImages } from './pixabay-api';
import {
  renderImages,
  renderError,
  showLoadMoreButton,
  hideLoadMoreButton,
  showLoadingIndicator,
  hideLoadingIndicator,
  clearGallery,
} from './render-function';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const MoreBtn = document.querySelector('.js-load-more');

let currentPage = 1; // Початковий номер сторінки
let searchQuery = ''; // Пошуковий запит
// let totalImages = 0; // Змінна для збереження загальної кількості зображень
let totalLoadedImages = 0;

// Обробник для натискання на кнопку "Load More"
MoreBtn.addEventListener('click', loadMoreImages);

// Обробник для сабміту форми пошуку
searchForm.addEventListener('submit', async e => {
  e.preventDefault(); // Запобігаємо перезавантаженню сторінки при сабміті

  searchQuery = searchInput.value.trim();
  currentPage = 1; // Скидаємо сторінку на 1 при новому пошуку
  //!
  totalLoadedImages = 0;
  // Перевірка на порожнє поле
  if (!searchQuery) {
    renderError('Please enter a search query.');
    return;
  }

  // try {
  //   const images = await fetchImages(searchQuery, currentPage);

  //   if (images.length === 0) {
  //     renderError(
  //       'Sorry, there are no images matching your search query. Please try again.'
  //     );
  //   } else {
  //     renderImages(images); // Виводимо зображення
  //     totalImages = images.length; // Записуємо кількість завантажених зображень
  //     showLoadMoreButton(); // Показуємо кнопку "Load more"
  //     if (images.length < 15) {
  //       hideLoadMoreButton(); // Якщо зображень менше 15, ховаємо кнопку
  //     }
  //   }
  // } catch (error) {
  //   renderError(
  //     'An error occurred while fetching images. Please try again later.'
  //   );
  // }
  clearGallery(); // Clear gallery for new search
  showLoadingIndicator(); // Show loading indicator

  try {
    // Fetch the first set of images
    const images = await fetchImages(searchQuery, currentPage);

    if (images.length === 0) {
      renderError(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      hideLoadMoreButton();
    } else {
      renderImages(images, true); // Render images and clear previous results
      totalLoadedImages += images.length;

      // Show or hide "Load more" button depending on the number of results
      if (images.length < 15) {
        hideLoadMoreButton();
      } else {
        showLoadMoreButton();
      }
    }
  } catch (error) {
    renderError(
      'An error occurred while fetching images. Please try again later.'
    );
  } finally {
    hideLoadingIndicator(); // Hide loading indicator
  }

  searchInput.value = ''; // Очищення поля вводу після пошуку
});

// Функція для завантаження наступних 15 зображень
// export async function loadMoreImages() {
//   currentPage += 1; // Збільшуємо сторінку на 1

//   try {
//     const newImages = await fetchImages(searchQuery, currentPage);

//     // Додаємо нові зображення до вже існуючих
//     renderImages(newImages);

//     totalImages += newImages.length; // Оновлюємо загальну кількість завантажених зображень

//     // Якщо зображень менше 15, приховуємо кнопку "Load more"
//     if (newImages.length < 15 || totalImages >= 500) {
//       hideLoadMoreButton();
//     }
//   } catch (error) {
//     renderError(
//       'An error occurred while fetching more images. Please try again later.'
//     );
//   }
// }
async function loadMoreImages() {
  currentPage += 1; // Move to the next page

  try {
    const newImages = await fetchImages(searchQuery, currentPage);

    // Append new images to the gallery
    renderImages(newImages, false); // Append images without clearing previous results
    totalLoadedImages += newImages.length;

    // Scroll down by 2 image heights
    scrollByTwoImageHeights();

    // Hide "Load more" button if fewer than 15 images were loaded
    if (newImages.length < 15) {
      hideLoadMoreButton();
    }
  } catch (error) {
    renderError(
      'An error occurred while fetching more images. Please try again later.'
    );
  }
}

// Function to scroll down by the height of two images
function scrollByTwoImageHeights() {
  const gallery = document.querySelector('.gallery');
  const firstImage = gallery.querySelector('img');

  if (firstImage) {
    const imageHeight = firstImage.offsetHeight;
    window.scrollBy({
      top: imageHeight * 2,
      behavior: 'smooth',
    });
  }
}
