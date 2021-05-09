var button = document.querySelector('.page-header__menu');
var line = document.querySelector('.page-header__line');
var nav = document.querySelector('.page-header__nav');
var list = document.querySelector('.page-header__list');

nav.classList.remove('no-js');

list.classList.remove('page-header__list--no-js');

button.addEventListener('click', function() {
   if(line.classList.contains('page-header__line--open')) {
      line.classList.remove('page-header__line--open');
      nav.classList.add('page-header__nav--open');
      line.classList.add('page-header__line--closed')
   } else {
      line.classList.remove('page-header__line--closed');
      nav.classList.remove('page-header__nav--open');
      line.classList.add('page-header__line--open')
   }
})

