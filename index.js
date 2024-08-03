// menu opening and closing
const menu = document.getElementById("menu");
const openIcon = document.getElementById("openIcon");


// removes openIcon when resizing from smaller screen
window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        openIcon.style.display = 'none';
    }
    else {
        openIcon.style.display = 'block';
    }
});

// open and close menu 
function openMenu() {
    menu.style.right = "0";
    openIcon.style.display = "none";
}

function closeMenu() {
    menu.style.right = "-200px";
    if (window.innerWidth <= 600) {
        openIcon.style.display = "block";
    }
}

// close menu when clicking outside of menu
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !openIcon.contains(event.target)) {
        closeMenu();
    }
});