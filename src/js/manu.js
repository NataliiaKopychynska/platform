const OpenMenu = document.querySelector('.icon-burger');

OpenMenu.addEventListener('click', toglleMenu);
const menu = document.querySelector('.menu-container');

// const dashboardMenu = document.querySelector('.dashboard-menu');
// const popularMovieMenu = document.querySelector('.popular-movie-menu');
// const galleryMenu = document.querySelector('.gallery-menu');

function openMenu() {
  menu.classList.remove('menu-hidden');
}

function closeMenu() {
  menu.classList.add('menu-hidden');
}

function toglleMenu(evt) {
  evt.preventDefault();
  if (menu.classList.contains('menu-hidden')) {
    openMenu();
  } else {
    closeMenu();
  }
}

const optionsContainer = document.querySelectorAll('.options-container');
optionsContainer.forEach(container => {
  container.addEventListener('click', openPageMenu);
});

function openPageMenu(evt) {
  const url = evt.currentTarget.dataset.url;
  if (url) {
    window.open(url, '_self');
  }
}

menu.addEventListener('mouseleave', () => {
  closeMenu();
});

document.addEventListener('click', event => {
  if (!menu.contains(event.target) && !OpenMenu.contains(event.target)) {
    closeMenu();
  }
});

// const logoOpenMenu = document.querySelector('.nav-logo');

// logoOpenMenu.addEventListener('click', toglleMenu);
// const menu = document.querySelector('.menu-container');

// // const dashboardMenu = document.querySelector('.dashboard-menu');
// // const popularMovieMenu = document.querySelector('.popular-movie-menu');
// // const galleryMenu = document.querySelector('.gallery-menu');

// function openMenu() {
//   menu.classList.remove('menu-hidden');
// }

// function closedMenu() {
//   menu.classList.add('menu-hidden');
// }

// function toglleMenu(evt) {
//   evt.preventDefault();
//   if (menu.classList.contains('menu-hidden')) {
//     openMenu();
//   } else {
//     closedMenu();
//   }
// }

// const optionsContainer = document.querySelectorAll('.options-container');
// optionsContainer.forEach(container => {
//   container.addEventListener('click', openPageMenu);
// });

// function openPageMenu(evt) {
//   const url = evt.currentTarget.dataset.url;
//   if (url) {
//     window.open(url, '_self');
//   }
// }
