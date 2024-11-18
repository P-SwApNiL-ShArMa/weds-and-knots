let menu = document.querySelector('#menu-icon'); // Select the menu icon
let navlist = document.querySelector('.navlist'); // Select the navigation list

// Toggle the menu icon and navigation list on click
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Toggle class for the menu icon (for animation)
    navlist.classList.toggle('open'); // Toggle the 'open' class for the navlist
};

// Select the header element
const header = document.querySelector("header");

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    // Add or remove 'sticky' class based on scroll position
    header.classList.toggle('sticky', window.scrollY > 160);
});
