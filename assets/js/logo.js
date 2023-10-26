// document.addEventListener('DOMContentLoaded', function () {
//     const defaultLogo = document.querySelector('.default-logo');
//     const alternateLogo = document.querySelector('.alternate-logo');

//     window.addEventListener('scroll', function () {
//         if (window.scrollY > 100) { // Change this value as needed
//             defaultLogo.classList.add('hidden');
//             alternateLogo.classList.remove('hidden');
//         } else {
//             defaultLogo.classList.remove('hidden');
//             alternateLogo.classList.add('hidden');
//         }
//     });
// });




$(document).ready(function () {
    var header = $("header");
    var logo = $("#logo");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { 
            logo.attr("src", "assets/images/sdjf-removebg-preview.png"); 
        } else {
            logo.attr("src", "assets/images/white quadplace.png"); 
        }
    });
}); 

