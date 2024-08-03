// menu opening and closing
const menu = document.getElementById("menu");
const openIcon = document.getElementById("openIcon");

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        openIcon.style.display = 'none';
    }
    else {
        openIcon.style.display = 'block';
    }
});

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