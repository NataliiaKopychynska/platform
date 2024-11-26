import"./assets/manu-BKy-hVqk.js";/* empty css                      */import{a as i}from"./assets/vendor-Kt0AZ5QJ.js";const r="https://api.themoviedb.org/3",l="/trending/movie/day",m="3305064ea972acdb0e395953537191ad";async function d(o=1){try{const{data:e}=await i(`${r}${l}`,{params:{api_key:m,page:o}});return console.log(e),e}catch(e){throw console.error("Помилка під час запиту:",e.message),e}}function h(o){return o.map(({poster_path:e,original_title:t,id:s})=>`
      <li class=" movie-card-home">

           <img class="poster-home" src="https://image.tmdb.org/t/p/w500/${e}" alt="${t}">
           <div class="movie-info-home">
               <h3 class="name-movie-home text-muvie-js">${t}</h3>

           </div>
           <button class="learn-more-button-home" data-id="${s}">Learn more</button>

      </li>`).join("")}function u({poster_path:o,release_date:e,original_title:t,vote_average:s,overview:a}){return`
      <div class="modal-title-movie">
        <button class="modal-close">Закрити</button>
        <div class="modal-content">
          <img class="img-modal" src="https://image.tmdb.org/t/p/w500/${o}" alt="${t}">
          <div class="container-title-modal">
            <h2>${t}</h2>
            <p>${a}</p>
            <p><strong>Release date:</strong> ${e}</p>
            <p><strong>Rating: </strong> ${s}</p>
          </div>
        </div>
      </div>
    
    `}const c=document.querySelector(".gallery-top-movie-js");function p(o,e=20){const t=o.textContent;t.length>e&&(o.textContent=t.slice(0,e)+"...")}async function v(o){try{const e=await d(o);c.insertAdjacentHTML("beforeend",h(e.results)),document.querySelectorAll(".text-muvie-js").forEach(s=>p(s,18))}catch(e){alert(e.message)}}v();const n=document.querySelector(".modal-overlay");function g(o){const e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzA1MDY0ZWE5NzJhY2RiMGUzOTU5NTM1MzcxOTFhZCIsIm5iZiI6MTczMTk2NDMxNy4yNzI0ODUsInN1YiI6IjY3MmUxNDJiYTgxODcxM2JkZjQ5NDliNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujyy7e_t_8kU-Sxr8b1pFxTDQi8zc-bo3UZcavZtmkA"}};fetch(`https://api.themoviedb.org/3/movie/${o}`,e).then(t=>t.json()).then(t=>{n.innerHTML=u(t),console.log(t),n.querySelector(".modal-close").addEventListener("click",()=>{n.classList.add("modall-hiden")}),n.addEventListener("click",a=>{a.target===n&&n.classList.add("modall-hiden")})}).catch(t=>{throw console.error("Помилка під час запиту:",t.message),t})}c.addEventListener("click",y);function y(o){const e=o.target.closest(".learn-more-button-home");if(console.log(e),!e)return;const t=e.dataset.id;n.innerHTML="",n.classList.remove("modall-hiden"),g(t),console.log(t)}
//# sourceMappingURL=index.js.map
