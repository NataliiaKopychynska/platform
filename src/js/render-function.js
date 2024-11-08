import '../css/styles.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очищаємо галерею перед додаванням нових зображень

  // Показуємо індикатор завантаження
  showLoadingIndicator(true);

  images.forEach(image => {
    const card = document.createElement('a');
    card.href = image.largeImageURL;
    card.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.classList.add('image');

    const info = document.createElement('div');
    info.classList.add('image-info');
    info.innerHTML = `
    <p class="paragraf-text">
    <span class="span-text">Likes:</span> ${image.likes}
    </p>
    <p class="paragraf-text">
    <span class="span-text">Views:</span> ${image.views}
    </p>
    <p class="paragraf-text">
    <span class="span-text">Comments:</span> ${image.comments}
    </p>
    <p class="paragraf-text">
    <span class="span-text">Downloads:</span> ${image.downloads}
    </p>
    `;

    card.appendChild(img);
    card.appendChild(info);
    gallery.appendChild(card);
  });

  // Приховуємо індикатор завантаження після рендерингу
  showLoadingIndicator(false);

  // Оновлюємо SimpleLightbox після додавання нових карток
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}

export function renderError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    timeout: 5000,
  });
}

export function showLoadingIndicator(show) {
  const loadingIndicator = document.querySelector('.loading-indicator');
  loadingIndicator.style.display = show ? 'block' : 'none';
}
