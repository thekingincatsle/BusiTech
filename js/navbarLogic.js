const bgNavChangeOnscroll = () => {
  const navbar = document.getElementsByClassName("navbar").item(0);
  const myButton = document.getElementById("btn-back-to-top");
  const navHeight = navbar.offsetHeight;
  window.onscroll = function () {
    if (
      document.body.scrollTop > navHeight ||
      document.documentElement.scrollTop >= navHeight
    ) {
      navbar.classList.add("bg-primary-theme");
    } else navbar.classList.remove("bg-primary-theme");

    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop >= 200
    ) {
      myButton.classList.remove("hidden");
    } else myButton.classList.add("hidden");
  };
};

const implementDropdownMenu = () => {
  const btn = document.getElementsByClassName("dropdownBtn").item(0);
  const dropdownContent = document
    .getElementsByClassName("dropdownContent")
    .item(0);
  btn.addEventListener("click", () => {
    dropdownContent.classList.toggle("active");
  });
};

setTimeout(() => {
  bgNavChangeOnscroll();
  implementDropdownMenu();
}, 200);
