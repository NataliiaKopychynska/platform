import axios from 'axios';

const BASE_URL2 = 'https://api.themoviedb.org/3';
const END_POINT2 = '/trending/movie/day';
const API_KEY2 = '3305064ea972acdb0e395953537191ad';

export async function fetchMoviesHome(page = 1) {
  try {
    const { data } = await axios(`${BASE_URL2}${END_POINT2}`, {
      params: {
        api_key: API_KEY2,
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
