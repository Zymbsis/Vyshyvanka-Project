import lightboxIcons from '../img/icons.svg';
import lightboxStar from '../img/tablet/Hero/star-tab-desk1x.png';

export const lightboxMarkup = `<div class="lightbox-container">
<button class="lightbox-close-button" type="button"><svg width="26" height="26" class="lightbox-close-icon"><use href=${lightboxIcons}#menu-close>
</use><svg></button>
<div class="lightbox-img-wrapper">
    <picture class="lightbox-img"></picture>
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
    <img class="lightbox-hand-made-img" src="${lightboxStar}" alt="Star symbol" width="49" height="49">
    <p class="lightbox-hand-made-text">all embroidery is made by hand</p></div></div>
    <div class="lightbox-desc-wrapper">
    <h2 class="lightbox-desc-title"></h2>
    <p class="lightbox-desc-text"></p>
    <span class="lightbox-desc-text">Crafted using only 100% pure organic materials (flax, cotton)</span>
    <p class="lightbox-desc-price"></p>
    <a class="lightbox-order-link" href="#order">
    Order
    <svg class="lightbox-order-icon" width="26" height="10">
    <use href=${lightboxIcons}#arrow></use>
    </svg>
    </a>
    </div>
    </div>`;

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
