// ==UserScript==
// @name     Bloquear anuncios de YouTube
// @version  1.0
// @grant    none
// @match    https://www.youtube.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Oculta el elemento del anuncio
    function hideAd(element) {
        element.style.display = 'none';
    }

    // Selecciona y oculta los elementos de anuncios en la página de YouTube
    function hideAds() {
        // Selecciona los elementos que contienen anuncios
        var adElements = document.querySelectorAll('.ytd-display-ad-renderer, .ytp-ad-module, .video-ads');

        // Oculta cada elemento de anuncio encontrado
        for (var i = 0; i < adElements.length; i++) {
            hideAd(adElements[i]);
        }
    }

    // Ejecuta la función para ocultar los anuncios cuando la página se carga o cambia
    window.addEventListener('load', hideAds);
    window.addEventListener('spfdone', hideAds);
})();
