// ==UserScript==
// @name        Trakt link to Ask4Movie
// @description Direct link to show or movie to watch. I do not condone piracy, this script is for educational purposes. Use at your own risk.
// @namespace   ask4movie
// @author      @wadforth
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @license     Unlicense; http://unlicense.org/
// @version     0.2
// @updateURL   https://github.com/wadforth/Trakt.tv-Ask4Movie/raw/main/Trakt%20link%20to%20Ask4Movie.user.js
// @match       *://trakt.tv/*
// @run-at document-start
// @inject-into     page
/* global $ */
// ==/UserScript==

$(function() {
    'use strict'

    var url2String = window.location.href.toString();
    const element = document.getElementsByClassName('mobile-title')[0];
    const certification = document.getElementsByClassName('certification')[0];
    certification.remove();
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = '<img src="https://ask4movie.cc/wp-content/uploads/2018/04/the-logo.png" style="display: block; margin-left: auto; margin-right: auto; width: 50%;"/>';
    button.className = 'btn-styled';
    console.log(element.innerText);

    //Searches show direct, should show all seasons
    if (url2String.contains('shows')) {
        button.onclick = function() {
        window.location.href = 'https://ask4movie.io/?s=' + element.innerText;
        console.log(url2String + element.innerText);
    };
   }
    //Links directly to the movie if its available on website
    else if (url2String.contains('movies')) {
    button.onclick = function() {
    var baseUrl = window.location = url2String.replace('trakt.tv/movies/', 'ask4movie.io/');
    console.log(baseUrl);
    };
    }
element.appendChild(button);
})();
