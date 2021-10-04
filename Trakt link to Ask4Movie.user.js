// ==UserScript==
// @name        Trakt link to Ask4Movie
// @description Direct link to show or movie to watch. I do not condone piracy, this script is for educational purposes. Use at your own risk.
// @namespace   ask4movie
// @author      @wadforth
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @license     Unlicense; http://unlicense.org/
// @version     1.2
// @updateURL   https://github.com/wadforth/Trakt.tv-Ask4Movie/raw/main/Trakt%20link%20to%20Ask4Movie.user.js
// @match       *://trakt.tv/*
// @match       *://trakt.tv/shows/*/seasons/*
// @run-at document-start
// @inject-into     page
/* global $ */
// ==/UserScript==
$(function() {
    'use strict'

    var url2String = window.location.href.toString();
    const element = document.getElementsByClassName('mobile-title')[0];
    const certification = document.getElementsByClassName('certification')[0];
    const streaming = document.getElementsByClassName('streaming-links')[0];
    const streamingalt = document.getElementsByClassName('btn-watch-now')[0];
    const date = document.getElementsByClassName('year')[0];
    if ($(".certification")[0]){
    certification.remove();
    }

    var button = document.createElement('div');

    //Searches show direct, should show all seasons
    if (url2String.contains('shows') && !url2String.contains('seasons')) {
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

    if (url2String.contains('seasons') && !url2String.contains('episodes')) {
        date.remove();
        const show = element.childNodes[0].textContent.split(" ").join("-");
        const seasons = element.childNodes[1].textContent.split(" ").join("-");;
        button.onclick = function() {

            window.location.href = 'https://ask4movie.io/' + show + "-" + seasons;
        }
    }
    if ($(".streaming-links")[0]){
    button.innerHTML = '<a href=""><img src="https://ask4movie.io/wp-content/uploads/2021/09/cropped-Icon-Logo-32x32.png" style="display: block; margin-left: auto; margin-right: auto; width: 50%;"/></a>';
    streaming.appendChild(button);
} else {
    button.innerHTML = '<a href=""><img src="https://ask4movie.io/wp-content/uploads/2021/09/cropped-Icon-Logo-32x32.png" style="display: block; margin-left: auto; margin-right: auto; width: 25%;"/></a>';
    streamingalt.appendChild(button);
}
});
