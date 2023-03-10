setTimeout(() => {
    const navbar = document.getElementsByClassName('navbar').item(0);
    const navHeight = navbar.offsetHeight;
    window.onscroll = function () {
        if (document.body.scrollTop > navHeight || document.documentElement.scrollTop >= navHeight) {
            navbar.classList.add('bg-primary')
        } else navbar.classList.remove('bg-primary')
    }
}, 50);




