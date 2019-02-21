$ = jQuery;


var header = $("header");

// When the user scrolls the page, add background color to fixed navbar.
window.onscroll = function() {addBackgroundToNavbarOnScroll()};


//check if page is scrolled, add 'scrolled' class to header
function addBackgroundToNavbarOnScroll() {
    if (window.pageYOffset > 20) {


        header.addClass("scrolled");

    } else {

        header.removeClass("scrolled");
    }
}

//init header background . if page rendered on some section- add background to the header
addBackgroundToNavbarOnScroll();



// init the navbar
var nav = responsiveNav(".nav-collapse");
