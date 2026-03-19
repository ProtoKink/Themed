// ==UserScript==
// @name Themed BC
// @namespace https://www.bondageprojects.com/
// @version 1.8.0
// @description Bondage Club with themes!
// @author  dDeepLb
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match https://bondageprojects.com/*
// @match https://www.bondageprojects.com/*
// @match http://localhost:*/*
// @match http://localhost/BondageClub/*

// @grant none
// @run-at document-end
// ==/UserScript==

(function () {
  'use strict';
  const ending = 'themed.js';
  const prodPath = 'https://ddeeplb.github.io/Themed-BC/';
  const devPath = `${prodPath}dev/`;
  const localPath = 'http://localhost:45001/';

  const isDev = window.location.search.includes('TMD=dev');
  const isLocal = window.location.search.includes('TMD=local');
  const isPublic = isDev || !isLocal;

  let modLink = prodPath;
  if (isDev) modLink = devPath;
  else if (isLocal) modLink = localPath;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.setAttribute('crossorigin', 'anonymous');
  script.src = `${modLink}${ending}${isPublic ? '?' + Date.now() : ''}`;
  document.head.appendChild(script);
})();
