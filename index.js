/* empty css                      */import{S as d}from"./assets/vendor-CgTBfC_f.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="46929874-64df5169043d6b6fbb8fb2b93";async function u(o){const a=`https://pixabay.com/api/?key=${p}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(a);if(!t.ok)throw new Error("Network response was not ok");return(await t.json()).hits}catch(t){return console.error("Error fetching images:",t),[]}}function f(o){const a=document.querySelector(".gallery");a.innerHTML="",i(!0),o.forEach(t=>{const s=document.createElement("a");s.href=t.largeImageURL,s.classList.add("gallery-item");const e=document.createElement("img");e.src=t.webformatURL,e.alt=t.tags,e.classList.add("image");const r=document.createElement("div");r.classList.add("image-info"),r.innerHTML=`
    <p class="paragraf-text">
    <span class="span-text">Likes:</span> ${t.likes}
    </p>
    <p class="paragraf-text">
    <span class="span-text">Views:</span> ${t.views}
    </p>
    <p class="paragraf-text">
    <span class="span-text">Comments:</span> ${t.comments}
    </p>
    <p class="paragraf-text">
    <span class="span-text">Downloads:</span> ${t.downloads}
    </p>
    `,s.appendChild(e),s.appendChild(r),a.appendChild(s)}),i(!1),new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function c(o){iziToast.error({title:"Error",message:o,position:"topRight",timeout:5e3})}function i(o){const a=document.querySelector(".loading-indicator");a.style.display=o?"block":"none"}const m=document.getElementById("searchForm"),l=document.getElementById("searchInput");m.addEventListener("submit",async o=>{o.preventDefault();const a=l.value.trim();if(!a){c("Please enter a search query.");return}try{const t=await u(a);t.length===0?c("Sorry, there are no images matching your search query. Please try again."):f(t)}catch{c("An error occurred while fetching images. Please try again later.")}l.value=""});
//# sourceMappingURL=index.js.map
