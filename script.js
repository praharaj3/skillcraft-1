document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('.menu-item');

    // Open the menu when the menu button is clicked
    menuButton.addEventListener('click', function() {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.classList.add('show');
        } else {
            menu.classList.remove('show');
            menu.classList.add('hidden');
        }
    });

    // Close the menu when the user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('show');
            menu.classList.add('hidden');
        }
    });

    // Close the menu when a menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.remove('show');
            menu.classList.add('hidden');
        });
    });
});
