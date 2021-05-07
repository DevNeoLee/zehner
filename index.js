
const side_menu = document.querySelector('.fa-stack');
const side_menu_content = document.querySelector('.side-menu-container')
const fa_times = document.querySelector('.fas.fa-times');

side_menu_toggle();

function side_menu_toggle() {
  side_menu.addEventListener('click', () => {
    if (side_menu_content.classList.contains('hide_display')) {
      side_menu_content.classList.remove('hide_display');
      fa_times.classList.remove('hide_display');
    }
    else {
      side_menu_content.classList.add('hide_display');
      fa_times.classList.add('hide_display');
    }
  })
}
