import { fetchMovies } from './pixabay-api';
import { createMarkup, modalMarkup } from './render-function';
import '../../css/styles.css';

const containerMovie = document.querySelector('.js-movie-list');
const loadMore = document.querySelector('.js-load-more');

let page = 1;

async function renderMovies(page = 1) {
  try {
    const data = await fetchMovies(page);

    containerMovie.insertAdjacentHTML('beforeend', createMarkup(data.results));

    if (data.page < data.total_pages) {
      loadMore.classList.replace('load-more-hiden', 'button');
    } else {
      loadMore.classList.replace('button', 'load-more-hiden');
    }
  } catch (error) {
    alert(error.message);
  }
}
loadMore.addEventListener('click', async () => {
  page += 1;
  loadMore.disabled = true;

  await renderMovies(page);

  loadMore.disabled = false;
});

renderMovies();

// const movieCard = document.querySelector('.movie-card');
const modalContainer = document.querySelector('.modal-overlay');

containerMovie.addEventListener('click', onLearnMoreClick);

function onLearnMoreClick(evt) {
  const button = evt.target.closest('.learn-more-button');
  if (!button) return;

  const movieId = button.dataset.id;

  modalContainer.innerHTML = '';
  // console.log(movieId);
  modalContainer.classList.remove('modall-hiden');

  fetchMoviId(movieId);
}

export function fetchMoviId(movieId) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzA1MDY0ZWE5NzJhY2RiMGUzOTU5NTM1MzcxOTFhZCIsIm5iZiI6MTczMTk2NDMxNy4yNzI0ODUsInN1YiI6IjY3MmUxNDJiYTgxODcxM2JkZjQ5NDliNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujyy7e_t_8kU-Sxr8b1pFxTDQi8zc-bo3UZcavZtmkA',
    },
  };

  fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
    .then(res => res.json())
    .then(res => {
      modalContainer.innerHTML = modalMarkup(res);
      console.log(res);

      // Додаємо обробник для кнопки закриття
      const closeButton = modalContainer.querySelector('.modal-close');
      closeButton.addEventListener('click', () => {
        modalContainer.classList.add('modall-hiden');
      });

      // Додаємо обробник для кліку на фон
      modalContainer.addEventListener('click', evt => {
        if (evt.target === modalContainer) {
          modalContainer.classList.add('modall-hiden');
        }
      });
    })
    .catch(error => {
      console.error('Помилка під час запиту:', error.message);
      throw error;
    });
}

// async function onLearnMoreClick(evt) {
//   const button = evt.target.closest('.learn-more-button');
//   if (!button) return;

//   // const movieId = button.dataset.id;

//   try {
//     const movieDetails = await fetchMovieDetails(movieId);

//     // Відображення модального вікна
//     openModalWithDetails(movieDetails);
//   } catch (error) {
//     alert(`Не вдалося отримати інформацію про фільм: ${error.message}`);
//   }
// }

// async function openModalWithDetails(page) {
//   try {
//     const data = await fetchMovies(page);

//     modalContainer.insertAdjacentHTML('beforeend', modalMarkup(data.results));
//   } catch (error) {
//     alert(error.message);
//   }
// }
