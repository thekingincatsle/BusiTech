const bgNavChangeOnscroll = () => {
    const navbar = document.getElementsByClassName('navbar').item(0);
    const navHeight = navbar.offsetHeight;
    window.onscroll = function () {
        if (document.body.scrollTop > navHeight || document.documentElement.scrollTop >= navHeight) {
            navbar.classList.add('bg-primary')
        } else navbar.classList.remove('bg-primary')
    }
}

const implementDropdownMenu = () => {
    const btn = document.getElementsByClassName('dropdownBtn').item(0);
    const dropdownContent = document.getElementsByClassName('dropdownContent').item(0);
    btn.addEventListener('click', () => {
        dropdownContent.classList.toggle('active')
    })
}

setTimeout(() => {
    bgNavChangeOnscroll();
    implementDropdownMenu();
}, 100);
