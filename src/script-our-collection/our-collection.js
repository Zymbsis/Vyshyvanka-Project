import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { lightboxMarkup } from './our-collection-markup';

const collectContainer = document.querySelector('.collection-list');
const lightboxInstance = basicLightbox.create(lightboxMarkup, {
  onClose: () => {
    document.body.classList.remove('scrollBan');
  },
});

collectContainer.addEventListener('click', onClickCollectContainer);

function onClickCollectContainer(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  document.body.classList.add('scrollBan');
  lightboxInstance.show(i => {
    onShowLightbox(i, e);
  });
  window.addEventListener('orientationchange', () => {
    const basicLightbox = document.querySelector('.basicLightbox');
    const container = document.querySelector('.lightbox-container');
    console.log(window.innerHeight > container.offsetHeight);

    if (window.innerHeight < container.offsetHeight) {
      basicLightbox.classList.remove('basicLightbox-scroll');
    } else {
      basicLightbox.classList.add('basicLightbox-scroll');
    }
  });
}

function onShowLightbox(i, e) {
  const lightboxRefs = {
    basicLightbox: document.querySelector('.basicLightbox'),
    container: i.element().querySelector('.lightbox-container'),
    img: i.element().querySelector('.lightbox-img'),
    title: i.element().querySelector('.lightbox-desc-title'),
    desc: i.element().querySelector('.lightbox-desc-text'),
    price: i.element().querySelector('.lightbox-desc-price'),
    closeBtn: i.element().querySelector('.lightbox-close-button'),
    orderLink: i.element().querySelector('.lightbox-order-link'),
  };

  lightboxRefs.img.innerHTML = e.target.parentElement.innerHTML;
  fillTheTag(lightboxRefs.title, '.collection-subtitle', e);
  fillTheTag(lightboxRefs.desc, '.collection-desc', e);
  fillTheTag(lightboxRefs.price, '.collection-text', e);

  if (window.innerHeight < lightboxRefs.container.offsetHeight) {
    lightboxRefs.basicLightbox.classList.add('basicLightbox-scroll');
  } else {
    lightboxRefs.basicLightbox.classList.remove('basicLightbox-scroll');
  }

  lightboxRefs.closeBtn.addEventListener('click', () => {
    i.close();
    document.body.classList.remove('scrollBan');
  });
  lightboxRefs.orderLink.addEventListener('click', () => {
    i.close();
    document.body.classList.remove('scrollBan');
  });
}

function fillTheTag(tagForFill, originTagClassName, e) {
  tagForFill.innerHTML =
    e.target.parentElement.parentElement.querySelector(
      originTagClassName
    ).textContent;
}
