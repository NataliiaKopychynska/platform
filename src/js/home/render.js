export function createMarkupHome(movies) {
  return movies
    .map(
      ({ poster_path, original_title, id }) => `
      <li class=" movie-card-home">

           <img class="poster-home" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}">
           <div class="movie-info-home">
               <h3 class="name-movie-home text-muvie-js">${original_title}</h3>

           </div>
           <button class="learn-more-button-home" data-id="${id}">Learn more</button>

      </li>`
    )
    .join('');
}

export function modalMarkupHome({
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
            <p><strong>Release date:</strong> ${release_date}</p>
            <p><strong>Rating: </strong> ${vote_average}</p>
          </div>
        </div>
      </div>
    
    `;
}
