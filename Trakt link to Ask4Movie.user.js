// ==UserScript==
// @name        Trakt link to Ask4Movie
// @description Direct link to show or movie to watch. I do not condone piracy, this script is for educational purposes. Use at your own risk.
// @namespace   ask4movie
// @author      @wadforth
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @license     Unlicense; http://unlicense.org/
// @version     0.1
// @match       *://trakt.tv/*
// @run-at document-start
// @inject-into     page
/* global $ */
// ==/UserScript==

$(function() {
    'use strict'

    const element = document.getElementsByClassName('mobile-title')[0];
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = '<img src="https://ask4movie.cc/wp-content/uploads/2018/04/the-logo.png" style="display: block; margin-left: auto; margin-right: auto; width: 50%;"/>';
    button.className = 'btn-styled';

    button.onclick = function() {
    var getUrl = window.location.href.toString();
    var baseUrl = window.location = getUrl.replace('trakt.tv/movies/', 'ask4movie.io/');
    console.log(baseUrl);
    };

    element.appendChild(button);
})();
