import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import lightboxIcons from '../img/icons.svg';

const navigationElem = document.querySelector('.header-nav');
const addressElem = document.querySelector('.header-address');
const mobMenuBtnOpen = document.querySelector('.open-menu-btn');

const mobMenuMarkup = `<div class="mobMenu-container">
      <button type="button" class="mobMenu-button-close">
      <svg width="18" height="18" class="mobMenu-icon-close">
      <use href=${lightboxIcons}#menu-close></use>
      </svg>
      </button>
      <address class="mobMenu-address">${addressElem.innerHTML}
      </address>
      <nav class="mobMenu-nav-list">
      ${navigationElem.innerHTML}
      </nav>
    </div>`;

const mobMenuInstance = basicLightbox.create(mobMenuMarkup, {
  className: 'mobMenu-lightbox',
});
mobMenuBtnOpen.addEventListener('click', () =>
  mobMenuInstance.show(i => {
    const mobMenuBtnClose = i.element().querySelector('.mobMenu-button-close');
    mobMenuBtnClose.addEventListener('click', () => i.close());
  })
);
