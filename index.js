function openMenu() {
    document.body.classList += " menu--open"
    console.log("opened the menu")
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}