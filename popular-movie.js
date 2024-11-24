import"./assets/manu-BKy-hVqk.js";/* empty css                      */import{a as m}from"./assets/vendor-Kt0AZ5QJ.js";const p="https://api.themoviedb.org/3",u="/trending/movie/day",h="3305064ea972acdb0e395953537191ad";async function v(o=1){try{const{data:e}=await m(`${p}${u}`,{params:{api_key:h,page:o}});return console.log(e),e}catch(e){throw console.error("Помилка під час запиту:",e.message),e}}function g(o){return o.map(({poster_path:e,release_date:t,original_title:s,vote_average:n,id:c})=>`
      <li class="movie-card data-id="${c}">
         
           <img class="poster-movie" src="https://image.tmdb.org/t/p/w500/${e}" alt="${s}">
           <div class="movie-info">
               <h2 class="name-movie">${s}</h2>
               <p class="release-date">Release date: ${t}</p>
               <p class="rating-movie">Rating: ${n}</p>
               
           </div>
           <button class="learn-more-button" data-id="${c}">Learn more</button>
         
      </li>`).join("")}function b({poster_path:o,release_date:e,original_title:t,vote_average:s,overview:n}){return`
      <div class="modal-title-movie">
        <button class="modal-close">x</button>
        <div class="modal-content">
          <img class="img-modal" src="https://image.tmdb.org/t/p/w500/${o}" alt="${t}">
          <div class="container-title-modal">
            <h2>${t}</h2>
            <p>${n}</p>
            <p><strong>Дата виходу:</strong> ${e}</p>
            <p><strong>Рейтинг:</strong> ${s}</p>
          </div>
        </div>
      </div>
    
    `}const l=document.querySelector(".js-movie-list"),i=document.querySelector(".js-load-more");let r=1;async function d(o=1){try{const e=await v(o);l.insertAdjacentHTML("beforeend",g(e.results)),e.page<e.total_pages?i.classList.replace("load-more-hiden","button"):i.classList.replace("button","load-more-hiden")}catch(e){alert(e.message)}}i.addEventListener("click",async()=>{r+=1,i.disabled=!0,await d(r),i.disabled=!1});d();const a=document.querySelector(".modal-overlay");l.addEventListener("click",M);function M(o){const e=o.target.closest(".learn-more-button");if(!e)return;const t=e.dataset.id;a.innerHTML="",a.classList.remove("modall-hiden"),y(t)}function y(o){const e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzA1MDY0ZWE5NzJhY2RiMGUzOTU5NTM1MzcxOTFhZCIsIm5iZiI6MTczMTk2NDMxNy4yNzI0ODUsInN1YiI6IjY3MmUxNDJiYTgxODcxM2JkZjQ5NDliNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujyy7e_t_8kU-Sxr8b1pFxTDQi8zc-bo3UZcavZtmkA"}};fetch(`https://api.themoviedb.org/3/movie/${o}`,e).then(t=>t.json()).then(t=>{a.innerHTML=b(t),console.log(t),a.querySelector(".modal-close").addEventListener("click",()=>{a.classList.add("modall-hiden")}),a.addEventListener("click",n=>{n.target===a&&a.classList.add("modall-hiden")})}).catch(t=>{throw console.error("Помилка під час запиту:",t.message),t})}
//# sourceMappingURL=popular-movie.js.map
