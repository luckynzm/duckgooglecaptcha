// ==UserScript==
// @name duckgooglecaptcha
// @namespace Violentmonkey Scripts
// @match *://www.google.com/sorry/*
// @author luckynzm
// @version 0.1
// @description Go to duckduckgo when google makes you do captcha
// @grant none
// @run-at       document-start
// ==/UserScript==

var urlraw = window.location.href;
var urldec = decodeURIComponent(urlraw);
var trimurl = urldec.substr(urldec.indexOf("=") + 1,urldec.length);
trimurl = trimurl.substr(trimurl.indexOf("?"),trimurl.length);
var query = ""
for(var i = 0; i<trimurl.length;i++) {
  if(trimurl.charAt(i) == "&") {
    break;
  }
  query += trimurl.charAt(i);
}
query += "&";
location.replace("https://www.duckduckgo.com/" + query);
