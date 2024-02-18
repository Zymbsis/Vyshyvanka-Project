(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function h(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=h(t);fetch(t.href,r)}})();function p(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var x={},C={get exports(){return x},set exports(n){x=n}};(function(n,u){(function(h){n.exports=h()})(function(){return function h(d,t,r){function l(o,s){if(!t[o]){if(!d[o]){var b=typeof p=="function"&&p;if(!s&&b)return b(o,!0);if(g)return g(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var e=t[o]={exports:{}};d[o][0].call(e.exports,function(c){return l(d[o][1][c]||c)},e,e.exports,h,d,t,r)}return t[o].exports}for(var g=typeof p=="function"&&p,i=0;i<r.length;i++)l(r[i]);return l}({1:[function(h,d,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var r=function(i){var o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s=document.createElement("div");return s.innerHTML=i.trim(),o===!0?s.children:s.firstChild},l=function(i,o){var s=i.children;return s.length===1&&s[0].tagName===o},g=function(i){return(i=i||document.querySelector(".basicLightbox"))!=null&&i.ownerDocument.body.contains(i)===!0};t.visible=g,t.create=function(i,o){var s=function(e,c){var a=r(`
		<div class="basicLightbox `.concat(c.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),m=a.querySelector(".basicLightbox__placeholder");e.forEach(function(E){return m.appendChild(E)});var y=l(m,"IMG"),L=l(m,"VIDEO"),w=l(m,"IFRAME");return y===!0&&a.classList.add("basicLightbox--img"),L===!0&&a.classList.add("basicLightbox--video"),w===!0&&a.classList.add("basicLightbox--iframe"),a}(i=function(e){var c=typeof e=="string",a=e instanceof HTMLElement==1;if(c===!1&&a===!1)throw new Error("Content must be a DOM element/node or string");return c===!0?Array.from(r(e,!0)):e.tagName==="TEMPLATE"?[e.content.cloneNode(!0)]:Array.from(e.children)}(i),o=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((e=Object.assign({},e)).closable==null&&(e.closable=!0),e.className==null&&(e.className=""),e.onShow==null&&(e.onShow=function(){}),e.onClose==null&&(e.onClose=function(){}),typeof e.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof e.className!="string")throw new Error("Property `className` must be a string");if(typeof e.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof e.onClose!="function")throw new Error("Property `onClose` must be a function");return e}(o)),b=function(e){return o.onClose(f)!==!1&&function(c,a){return c.classList.remove("basicLightbox--visible"),setTimeout(function(){return g(c)===!1||c.parentElement.removeChild(c),a()},410),!0}(s,function(){if(typeof e=="function")return e(f)})};o.closable===!0&&s.addEventListener("click",function(e){e.target===s&&b()});var f={element:function(){return s},visible:function(){return g(s)},show:function(e){return o.onShow(f)!==!1&&function(c,a){return document.body.appendChild(c),setTimeout(function(){requestAnimationFrame(function(){return c.classList.add("basicLightbox--visible"),a()})},10),!0}(s,function(){if(typeof e=="function")return e(f)})},close:b};return f}},{}]},{},[1])(1)})})(C);const N="/Vyshyvanka-Project/assets/icons-433e1a2e.svg#menu-close",S="/Vyshyvanka-Project/assets/icons-433e1a2e.svg#arrow",O=document.querySelector(".collection-list");function q(n){return n.map(u=>`<li class="lightbox-size-item">
        <span class="lightbox-size-text">${u}</span>
      </li>`).join("")}function v(n,u){return u.target.parentNode.parentNode.querySelector(n).textContent}function M(n){return x.create(`<div class="lightbox-container">
    <button class="lightbox-close-button" type="button"><svg width="26" height="26" class="lightbox-close-icon">${N}<svg></button>
    <div class="lightbox-img-wrapper">
    <picture class="lightbox-img" ${n.target.parentNode.innerHTML}</picture>
    <ul class="lightbox-size-list">
    ${q(["XXS","XS","S","M","L","XL","XXL","XXXL"])}
    </ul>
    <div class="lightbox-hand-made">
    <img class="lightbox-hand-made-img" src="./img/tablet/Hero/star-tab-desk1x.png" alt="Star symbol" width="49" height="49">
    <p class="lightbox-hand-made-text">all embroidery is made by hand</p></div></div>

    <div class="lightbox-desc-wrapper">
    <h2 class="lightbox-desc-title">${v(".collection-subtitle",n)}</h2>
    <p class="lightbox-desc-text">${v(".collection-desc",n)}</p>
    <p class="lightbox-desc-price">${v(".collection-text",n)}</p>
    <a class="lightbox-order-link" href="#order">
          Order
          <svg class="lightbox-order-icon" width="26" height="10">
            ${S}
          </svg>
        </a>
    </div>
    </div>`)}O.addEventListener("click",n=>{n.target.nodeName==="IMG"&&(M(n).show(),console.log(document.querySelector(".lightbox-size-list")))});
