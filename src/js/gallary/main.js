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

let totalLoadedImages = 0;

MoreBtn.addEventListener('click', loadMoreImages);

searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  searchQuery = searchInput.value.trim();
  currentPage = 1;
  //!
  totalLoadedImages = 0;

  if (!searchQuery) {
    renderError('Please enter a search query.');
    return;
  }

  clearGallery();
  showLoadingIndicator();

  try {
    const images = await fetchImages(searchQuery, currentPage);

    if (images.length === 0) {
      renderError(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      hideLoadMoreButton();
    } else {
      renderImages(images, true);
      totalLoadedImages += images.length;

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
    hideLoadingIndicator();
  }

  searchInput.value = '';
});

async function loadMoreImages() {
  currentPage += 1;

  try {
    const newImages = await fetchImages(searchQuery, currentPage);

    renderImages(newImages, false);
    totalLoadedImages += newImages.length;

    scrollByTwoImageHeights();

    if (newImages.length < 15) {
      hideLoadMoreButton();
    }
  } catch (error) {
    renderError(
      'An error occurred while fetching more images. Please try again later.'
    );
  }
}

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
