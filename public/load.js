window.webpackPublicPath = 'https://localhost:8080/';
var script = document.createElement('script');
script.onload = function() {
    window.SCB.B2C.HomePage.default("xyz");
};
script.src = "https://localhost:8080/render.bundle.js";
document.getElementsByTagName('head')[0].appendChild(script);