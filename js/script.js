const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const icons = document.querySelector(".arrow");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active__link")) {
        menu.classList.remove("active__link");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = `<img src="../assets/images/icon-hamburger.svg" />`;
        icons.querySelector('img').attributes('src') = "../assets/images/icon-arrow-dark.svg"
    } else {
        menu.classList.add("active__link");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = `<img src="../assets/images/icon-close.svg" />`;
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

/**Disable right click */

document.addEventListener('contextmenu', event => event.preventDefault());