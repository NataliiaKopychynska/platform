import { fetchMoviesHome } from './pixabay-api';
import { createMarkupHome, modalMarkupHome } from './render';
import '../../css/styles.css';

const containerMowieHome = document.querySelector('.gallery-top-movie-js');

function truncateText(element, maxLength = 20) {
  const textContent = element.textContent;
  if (textContent.length > maxLength) {
    element.textContent = textContent.slice(0, maxLength) + '...';
  }
}

async function renderMovieHome(page) {
  try {
    const data = await fetchMoviesHome(page);

    containerMowieHome.insertAdjacentHTML(
      'beforeend',
      createMarkupHome(data.results)
    );

    // Викликаємо truncateText для текстових елементів
    const textElements = document.querySelectorAll('.text-muvie-js');
    textElements.forEach(element => truncateText(element, 18));
  } catch (error) {
    alert(error.message);
  }
}

renderMovieHome();

const modalContainerHome = document.querySelector('.modal-overlay');

export function fetchMoviIdHome(movieId) {
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
      modalContainerHome.innerHTML = modalMarkupHome(res);
      console.log(res);

      // Додаємо обробник для кнопки закриття
      const closeButton = modalContainerHome.querySelector('.modal-close');
      closeButton.addEventListener('click', () => {
        modalContainerHome.classList.add('modall-hiden');
      });

      // Додаємо обробник для кліку на фон
      modalContainerHome.addEventListener('click', evt => {
        if (evt.target === modalContainerHome) {
          modalContainerHome.classList.add('modall-hiden');
        }
      });
    })
    .catch(error => {
      console.error('Помилка під час запиту:', error.message);
      throw error;
    });
}

containerMowieHome.addEventListener('click', onLearnMoreClick);

function onLearnMoreClick(evt) {
  // Шукаємо найближчий елемент з класом 'learn-more-button'
  const button = evt.target.closest('.learn-more-button-home');
  console.log(button);

  // Якщо кнопка не знайдена, виходимо з функції
  if (!button) return;

  // Отримуємо ID фільму з data-id
  const movieId = button.dataset.id;

  // Очищаємо вміст модального вікна
  modalContainerHome.innerHTML = '';

  // Показуємо модальне вікно
  modalContainerHome.classList.remove('modall-hiden');

  // Викликаємо функцію для отримання даних фільму
  fetchMoviIdHome(movieId);

  // Виводимо ID фільму в консоль
  console.log(movieId);
}
