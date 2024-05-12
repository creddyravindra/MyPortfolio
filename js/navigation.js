// navigation.js

// Get the current URL path
var path = window.location.pathname;

// Get the filename from the path
var page = path.split("/").pop();

// Remove any query parameters from the filename
page = page.split("?")[0];

// Select the navigation links
var navLinks = document.querySelectorAll(".nav-link");

// Loop through each link
navLinks.forEach(function(link) {
    // Get the href attribute value
    var href = link.getAttribute("href");

    // Check if the href matches the current page filename
    if (href === page || (href === 'index.html' && page === '')) {
        // Add the 'active' class to the link
        link.classList.add("active");
    }
});
