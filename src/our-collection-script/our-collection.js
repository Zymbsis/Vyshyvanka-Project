import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { lightboxMarkup } from './our-collection-markup';

const mainContainer = document.querySelector('.collection-list');

const instance = basicLightbox.create(lightboxMarkup, {
  onClose: () => {
    document.body.classList.remove('scrollBan');
  },
});

console.log(instance);

function fillTheTag(tagForFill, originTagClassName, e) {
  tagForFill.innerHTML =
    e.target.parentElement.parentElement.querySelector(
      originTagClassName
    ).textContent;
}

function onShowLightbox(i, e) {
  const lightboxImg = i.element().querySelector('.lightbox-img');
  const lightboxTitle = i.element().querySelector('.lightbox-desc-title');
  const lightboxDesc = i.element().querySelector('.lightbox-desc-text');
  const lightboxPrice = i.element().querySelector('.lightbox-desc-price');
  const lightboxCloseBtn = i.element().querySelector('.lightbox-close-button');
  const lightboxOrderLink = i.element().querySelector('.lightbox-order-link');
  lightboxImg.innerHTML = e.target.parentElement.innerHTML;
  fillTheTag(lightboxTitle, '.collection-subtitle', e);
  fillTheTag(lightboxDesc, '.collection-desc', e);
  fillTheTag(lightboxPrice, '.collection-text', e);
  lightboxCloseBtn.addEventListener('click', () => {
    i.close();
    document.body.classList.remove('scrollBan');
  });
  lightboxOrderLink.addEventListener('click', () => {
    i.close();
    document.body.classList.remove('scrollBan');
  });
}

mainContainer.addEventListener('click', e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  document.body.classList.add('scrollBan');

  onShowLightbox(instance, e);
  instance.show(i => {
    const basicLightbox = document.querySelector('.basicLightbox');
    const lightboxContainer = i.element().querySelector('.lightbox-container');

    if (window.innerHeight < lightboxContainer.offsetHeight) {
      basicLightbox.classList.add('basicLightbox-scroll');
    } else {
      basicLightbox.classList.remove('basicLightbox-scroll');
    }
  });
});

/******************************************************/

// function createLightboxInstance(e) {
//   const instance = basicLightbox.create(
//     `<div class="lightbox-container">
//     <button class="lightbox-close-button" type="button"><svg width="26" height="26" class="lightbox-close-icon"><use href=${lightboxIcons}#menu-close>
//     </use><svg></button>
//     <div class="lightbox-img-wrapper">
//     <picture class="lightbox-img" ${e.target.parentElement.innerHTML}</picture>
//     <ul class="lightbox-size-list">
//     ${markupLightboxSizeChart([
//       'XXS',
//       'XS',
//       'S',
//       'M',
//       'L',
//       'XL',
//       'XXL',
//       'XXXL',
//     ])}
//     </ul>
//     <div class="lightbox-hand-made">
//     <img class="lightbox-hand-made-img" src="${lightboxStar}" alt="Star symbol" width="49" height="49">
//     <p class="lightbox-hand-made-text">all embroidery is made by hand</p></div></div>

//     <div class="lightbox-desc-wrapper">
//     <h2 class="lightbox-desc-title">${lightboxTextContent(
//       '.collection-subtitle',
//       e
//     )}</h2>
//     <p class="lightbox-desc-text">${lightboxTextContent(
//       '.collection-desc',
//       e
//     )}</p>
//     <p class="lightbox-desc-price">${lightboxTextContent(
//       '.collection-text',
//       e
//     )}</p>
//     <a class="lightbox-order-link" href="#order">
//           Order
//           <svg class="lightbox-order-icon" width="26" height="10">
//             <use href=${lightboxIcons}#arrow></use>
//           </svg>
//         </a>
//     </div>
//     </div>`,
//     {
//       onShow: instance => {
//         console.log(instance.element().querySelector('.lightbox-close-button'));
//         instance
//           .element()
//           .querySelector('.lightbox-close-button')
//           .addEventListener('click', () => instance.close());
//       },
//       onClose: instance => {
//         console.log(instance.element());
//       },
//     }
//   );

//   return instance;
// }

/***********************************************************************/
