import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import lightboxCloseIcon from '../img/icons.svg#menu-close';
import lightboxOrderIcon from '../img/icons.svg#arrow';
const mainContainer = document.querySelector('.collection-list');

function markupLightboxSizeChart(arr) {
  return arr
    .map(
      item =>
        `<li class="lightbox-size-item">
        <span class="lightbox-size-text">${item}</span>
      </li>`
    )
    .join('');
}

function lightboxTextContent(className, e) {
  return e.target.parentNode.parentNode.querySelector(className).textContent;
}

/******************************************************/

function createLightboxInstance(e) {
  const instance = basicLightbox.create(
    `<div class="lightbox-container">
    <button class="lightbox-close-button" type="button"><svg width="26" height="26" class="lightbox-close-icon"><use href=${lightboxCloseIcon}>
    </use><svg></button>
    <div class="lightbox-img-wrapper">
    <picture class="lightbox-img" ${e.target.parentNode.innerHTML}</picture>
    <ul class="lightbox-size-list">
    ${markupLightboxSizeChart([
      'XXS',
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
      'XXXL',
    ])}
    </ul>
    <div class="lightbox-hand-made">
    <img class="lightbox-hand-made-img" src="../img/tablet/Hero/star-tab-desk1x.png" alt="Star symbol" width="49" height="49">
    <p class="lightbox-hand-made-text">all embroidery is made by hand</p></div></div>

    <div class="lightbox-desc-wrapper">
    <h2 class="lightbox-desc-title">${lightboxTextContent(
      '.collection-subtitle',
      e
    )}</h2>
    <p class="lightbox-desc-text">${lightboxTextContent(
      '.collection-desc',
      e
    )}</p>
    <p class="lightbox-desc-price">${lightboxTextContent(
      '.collection-text',
      e
    )}</p>
    <a class="lightbox-order-link" href="#order">
          Order
          <svg class="lightbox-order-icon" width="26" height="10">
            <use href=${lightboxOrderIcon}></use>
          </svg>
        </a>
    </div>
    </div>`
  );

  return instance;
}

/***********************************************************************/

mainContainer.addEventListener('click', e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  createLightboxInstance(e).show();
});
