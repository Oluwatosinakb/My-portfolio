function togglemenu(){
    const menu = document.queryselector(".menu-links")
    const icon = document.queryselector(".hamburger-icon")
    menu.classlist.toggle("open")
    icon.classlist.toggle("open")
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
