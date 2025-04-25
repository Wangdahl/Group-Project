document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
    })
})