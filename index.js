/* selectors */
//shop, side menues
const shop_button = document.querySelector('#shop');
const side_menu = document.querySelector('.fa-stack');
const side_menu_content = document.querySelector('.side-menu-container')
const side_menu_close = document.querySelector('.fas.fa-times');

//searchbar
const searchbar_search_button = document.querySelector('#search');
const searchbar = document.querySelector('.search-box');
const searchbar_close_button = document.querySelector('#close-icon');

//country button
const country_button = document.querySelector('#country-label-container');
const country_options = document.querySelector('#country-options');
const country_label = document.querySelector('#country-label');

//country options box
const countries = document.querySelectorAll('#country-options ul li');

console.log(countries);

/* calling addEventListeners */
side_menu_toggle();
searchbar_show();
searchbar_close();
country_button_toggle();
country_select();

/* functions */
//side menues
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

//searchbar 
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

//country button
function country_button_toggle() {
  country_button.addEventListener('click', () => {
    country_options.classList.toggle('hide_display');
  })
}

function country_select() {
  let selected = null;

   countries.forEach(country => {
     country.addEventListener('click', () => {
        console.log(country.textContent);
        country_label.textContent = country.textContent;
        country_options.classList.toggle('hide_display');
     })

      country.addEventListener('keydown', (e) => {
        // country_options.classList.toggle('hide_display');
        console.log(e)
      })

   })

  //  countries.addEventListener('escape', () => {
  //    country_options.classList.toggle('hide_display');
  //  })
  
}

document.querySelector('.header').addEventListener('keydown', e => {
    console.log(e);
}) 

function Element(element) {
  this.element = element;
  this.value = element.textContent; 
}

// const element = new Element(document.querySelector('#about_4moms'));

// console.log(element)
// element.textContent.addEventListener('click', e => {
//   console.log(e);
// });

document.querySelector('#about_4moms a').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('hello');
});