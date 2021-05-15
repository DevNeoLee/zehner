import { render } from './javascript/router.js';

/* selectors */
//shop, side menues
const shop_button = document.querySelector('#shop');
const side_menu = document.querySelector('#main-menu');
const side_menu_content = document.querySelector('#side-menu-container')
const side_menu_close = document.querySelector('.fas.fa-times');

//side menu items
const side_menu_items = document.querySelectorAll('#side-menu-container ul li')

//searchbar
const searchbar_search_button = document.querySelector('#search');
const searchbar = document.querySelector('.search-box');
const searchbar_close_button = document.querySelector('#close-icon');

//country button
const country_button = document.querySelector('#country-label-container');
const country_options = document.querySelector('#country-options');
const country_label = document.querySelector('#country-label');
const country_label_link = document.querySelector('#country-label-container a');

//country options box
const countries = document.querySelectorAll('#country-options ul li');

// document.querySelectorsAll('a').addEventlistener('click', (e) => {
//   e.preventDefault();
// })

/* calling all addEventListeners and hash_router function */
hash_change();
side_menu_toggle();
searchbar_show();
searchbar_close();
country_button_toggle();
country_select();


/* functions */
// as DOM loaded, render function will call on the path address
function hash_change() {
  window.onhashchange = () => render(window.location.hash);
  render(window.location.hash);
}

//side menues
function side_menu_toggle() {
  shop_button.addEventListener('click', (e) => {
    e.preventDefault();
    toggle_sidemenu()
  })

  side_menu.addEventListener('click', (e) => {
    e.preventDefault();
    toggle_sidemenu()
  })

  function toggle_sidemenu() {
    if (side_menu_content.classList.contains('hide_display')) {
      side_menu_content.classList.remove('hide_display');
      side_menu_close.classList.remove('hide_display');
      console.log(side_menu_items.item(0))
      side_menu_items.item(0).focus();
    }
    else {
      side_menu_content.classList.add('hide_display');
      side_menu_close.classList.add('hide_display');
    }
  }
}

//searchbar 
function searchbar_show() {
  searchbar_search_button.addEventListener('click', (e) => {
    e.preventDefault();
    searchbar.classList.remove('hide_display');
  })
}

function searchbar_close() {
  searchbar_close_button.addEventListener('click', (e) => {
    e.preventDefault();
    searchbar.classList.add('hide_display');
  })
}

//country button
function country_button_toggle() {
  country_button.addEventListener('click', (e) => {
    e.preventDefault(e);
    country_options.classList.toggle('hide_display');
    countries.item(0).focus();
  })
}

//country box mouse select feature
function country_select() {
  let selected = null;

   countries.forEach((country, index )=> {
     country.addEventListener('click', () => {
        country_label.textContent = country.textContent;
        country_options.classList.toggle('hide_display');
        country_label_link.focus();
     })

      country.addEventListener('keydown', e => {
        handleKeydown(e, country, index, 12);
      })
   })
}

//preventing default window scroll behaviors on country_options box
country_options.addEventListener("keydown", function(e) {
    if(["ArrowUp","ArrowDown"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

//keyboard control of the menu
function handleKeydown(event, country, index, height) {
  switch(event.key) {
    case 'Enter':
      country_label.textContent = country.textContent;
      country_options.classList.toggle('hide_display');
      country_label_link.focus();
      break;
    case 'Escape':
      country_options.classList.toggle('hide_display');
      country_label_link.focus();
      break;
    case 'ArrowUp':
      if ( index > 0) {
        event.target.previousElementSibling.focus();
        countries.item(index).blur();
        event.target.previousElementSibling.focus();
        country_options.scrollBy(0, -height);
        index = index - 1;
      } 
      break;
    case 'ArrowDown':
      if (countries.item(0) === event.target) {
        countries.item(0).blur();
        event.target.nextElementSibling.focus();
        country_options.scrollBy(0, height);
        index +=1;
      } else if ( index < countries.length - 1) {
        event.target.nextElementSibling.focus();
        country_options.scrollBy(0, height);
        index +=1;
      } 
      break;
    default:
      country_options.classList.toggle('hide_display');
      country_label_link.focus();   
  }
}

