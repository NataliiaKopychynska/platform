import '../css/styles.css';
const API_KEY = '46929874-64df5169043d6b6fbb8fb2b93';

export async function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits; // Повертаємо масив зображень
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}
