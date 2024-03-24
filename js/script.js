'use strict';

// loading will be end after document is loaded

const preload = document.querySelector("[data-preaload]");

window.addEventListener("load", function(){
    preload.classList.add("loaded");
    document.body.classList.add("loaded");
});


// add Event Listener on multiple elements

const addevent = function(elements, eventtype, callback){
    for(let i=0, len = elements.length; i<len; i++){
        elements[i].addEventListener(eventtype,callback);
    }
}


// Navbar


const navbar = document.querySelector("[data-navbar]");
const navtoggle = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglenavbar = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addevent(navtoggle, "click", togglenavbar);


// header


const header = document.querySelector("[data-header]");

let lastscroll = 0;

const hideheader = function(){
    const isscroll = lastscroll < window.scrollY;
    if(isscroll){
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastscroll = window.scrollY;
}

window.addEventListener("scroll", function(){
    if(window.scrollY >= 50){
        header.classList.add("active");
        hideheader();
    } else {
        header.classList.remove("active");
    }
})

