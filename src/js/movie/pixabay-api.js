import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/movie/day';
const API_KEY = '3305064ea972acdb0e395953537191ad';

export async function fetchMovies(page = 1) {
  try {
    const { data } = await axios(`${BASE_URL}${END_POINT}`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    console.log(data); // Додайте це, щоб побачити відповідь
    return data;
  } catch (error) {
    console.error('Помилка під час запиту:', error.message);
    throw error;
  }
}
