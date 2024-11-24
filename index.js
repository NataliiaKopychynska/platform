import"./assets/manu-BKy-hVqk.js";/* empty css                      */import{a as i}from"./assets/vendor-Kt0AZ5QJ.js";const r="https://api.themoviedb.org/3",l="/trending/movie/day",m="3305064ea972acdb0e395953537191ad";async function d(o=1){try{const{data:t}=await i(`${r}${l}`,{params:{api_key:m,page:o}});return console.log(t),t}catch(t){throw console.error("Помилка під час запиту:",t.message),t}}function h(o){return o.map(({poster_path:t,original_title:e,id:s})=>`
      <li class=" movie-card-home">

           <img class="poster-home" src="https://image.tmdb.org/t/p/w500/${t}" alt="${e}">
           <div class="movie-info-home">
               <h3 class="name-movie-home text-muvie-js">${e}</h3>

           </div>
           <button class="learn-more-button-home" data-id="${s}">Learn more</button>

      </li>`).join("")}function u({poster_path:o,release_date:t,original_title:e,vote_average:s,overview:c}){return`
      <div class="modal-title-movie">
        <button class="modal-close">Закрити</button>
        <div class="modal-content">
          <img class="img-modal" src="https://image.tmdb.org/t/p/w500/${o}" alt="${e}">
          <div class="container-title-modal">
            <h2>${e}</h2>
            <p>${c}</p>
            <p><strong>Дата виходу:</strong> ${t}</p>
            <p><strong>Рейтинг:</strong> ${s}</p>
          </div>
        </div>
      </div>
    
    `}const a=document.querySelector(".gallery-top-movie-js");function p(o,t=20){const e=o.textContent;e.length>t&&(o.textContent=e.slice(0,t)+"...")}async function v(o){try{const t=await d(o);a.insertAdjacentHTML("beforeend",h(t.results)),document.querySelectorAll(".text-muvie-js").forEach(s=>p(s,18))}catch(t){alert(t.message)}}v();const n=document.querySelector(".modal-overlay");function g(o){const t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzA1MDY0ZWE5NzJhY2RiMGUzOTU5NTM1MzcxOTFhZCIsIm5iZiI6MTczMTk2NDMxNy4yNzI0ODUsInN1YiI6IjY3MmUxNDJiYTgxODcxM2JkZjQ5NDliNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujyy7e_t_8kU-Sxr8b1pFxTDQi8zc-bo3UZcavZtmkA"}};fetch(`https://api.themoviedb.org/3/movie/${o}`,t).then(e=>e.json()).then(e=>{n.innerHTML=u(e),console.log(e),n.querySelector(".modal-close").addEventListener("click",()=>{n.classList.add("modall-hiden")}),n.addEventListener("click",c=>{c.target===n&&n.classList.add("modall-hiden")})}).catch(e=>{throw console.error("Помилка під час запиту:",e.message),e})}a.addEventListener("click",y);function y(o){const t=o.target.closest(".learn-more-button-home");if(console.log(t),!t)return;const e=t.dataset.id;n.innerHTML="",n.classList.remove("modall-hiden"),g(e),console.log(e)}
//# sourceMappingURL=index.js.map
