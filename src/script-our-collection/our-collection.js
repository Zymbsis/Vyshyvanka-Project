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
  if (e.target === e.currentTarget) {
    return;
  }

  document.body.classList.add('scrollBan');
  lightboxInstance.show(i => {
    onShowLightbox(i, e);
  });
  window.addEventListener('resize', () => {
    const basicLightbox = document.querySelector('.basicLightbox');
    const container = document.querySelector('.lightbox-container');
    if (window.innerHeight < container.offsetHeight) {
      basicLightbox.classList.add('basicLightbox-scroll');
    } else {
      basicLightbox.classList.remove('basicLightbox-scroll');
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
  if (e.target.nodeName === 'IMG') {
    lightboxRefs.img.innerHTML = e.target.parentElement.innerHTML;
  } else if (e.target.nodeName === 'H3' || e.target.nodeName === 'P') {
    lightboxRefs.img.innerHTML =
      e.target.parentElement.firstElementChild.innerHTML;
  }
  fillTheTag(lightboxRefs.title, '.collection-subtitle', e);
  fillTheTag(lightboxRefs.desc, '.visually-hidden', e);
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
  if (e.target.nodeName === 'IMG') {
    tagForFill.innerHTML =
      e.target.parentElement.parentElement.querySelector(
        originTagClassName
      ).textContent;
  } else if (e.target.nodeName === 'H3' || e.target.nodeName === 'P') {
    tagForFill.innerHTML =
      e.target.parentElement.querySelector(originTagClassName).textContent;
  }
}
