window.onload = function () {
  let myButton;

  myButton = document.getElementById("btn-back-to-top");

  window.onscroll = function () {
    scrollFunction();
  };

  window.scroll({
    top: 2500,
    left: 0,
    behavior: "smooth",
  });

  window.scrollBy({
    top: 100,
    left: 0,
    behavior: "smooth",
  });

  function scrollFunction() {
    if (
      document.body.scrollTop > document.body.clientHeight / 2 ||
      document.documentElement.scrollTop > document.body.clientHeight / 2
    ) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }

  myButton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};
