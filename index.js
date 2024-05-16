// JavaScript for closing the menu when a link is clicked
document.querySelectorAll('.menuContent a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('menuToggle').checked = false;
    });
});