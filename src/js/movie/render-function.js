export function createMarkup(movies) {
  return movies
    .map(
      ({ poster_path, release_date, original_title, vote_average, id }) => `
      <li class="movie-card data-id="${id}">
         
           <img class="poster-movie" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}">
           <div class="movie-info">
               <h2 class="name-movie">${original_title}</h2>
               <p class="release-date">Release date: ${release_date}</p>
               <p class="rating-movie">Rating: ${vote_average}</p>
               
           </div>
           <button class="learn-more-button" data-id="${id}">Learn more</button>
         
      </li>`
    )
    .join('');
}

export function modalMarkup({
  poster_path,
  release_date,
  original_title,
  vote_average,
  overview,
}) {
  return `
      <div class="modal-title-movie">
        <button class="modal-close">x</button>
        <div class="modal-content">
          <img class="img-modal" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}">
          <div class="container-title-modal">
            <h2>${original_title}</h2>
            <p>${overview}</p>
            <p><strong>Release date: </strong> ${release_date}</p>
            <p><strong>Rating: </strong> ${vote_average}</p>
          </div>
        </div>
      </div>
    
    `;
}
