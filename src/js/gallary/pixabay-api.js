import '../../css/styles.css';

// pixabay-api.js
import axios from 'axios';

const API_KEY = '46929874-64df5169043d6b6fbb8fb2b93';

// export async function fetchImages(query, page = 1) {
//   const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;

//   try {
//     const response = await axios.get(url);
//     return response.data.hits; // Повертаємо масив зображень
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     return [];
//   }
// }

export async function fetchImages(query, page = 1) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;

  try {
    const response = await axios.get(url);
    return response.data.hits; // Повертаємо масив зображень
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}
