// selectors
const shop_button = document.querySelector('#shop');
const side_menu = document.querySelector('.fa-stack');
const side_menu_content = document.querySelector('.side-menu-container')
const side_menu_close = document.querySelector('.fas.fa-times');


const searchbar_search_button = document.querySelector('#search');
const searchbar = document.querySelector('.search-box');
const searchbar_close_button = document.querySelector('#close-icon');

side_menu_toggle();
searchbar_show();
searchbar_close();

function side_menu_toggle() {
  shop_button.addEventListener('click', () => {
    toggle_sidemenu()
  })

  side_menu.addEventListener('click', () => {
    toggle_sidemenu()
  })

  function toggle_sidemenu() {
       if (side_menu_content.classList.contains('hide_display')) {
      side_menu_content.classList.remove('hide_display');
      side_menu_close.classList.remove('hide_display');
    }
    else {
      side_menu_content.classList.add('hide_display');
      side_menu_close.classList.add('hide_display');
    }
  }
}

function searchbar_show() {
  searchbar_search_button.addEventListener('click', () => {
    searchbar.classList.remove('hide_display');
  })
}

function searchbar_close() {
  searchbar_close_button.addEventListener('click', () => {
    searchbar.classList.add('hide_display');
  })
}