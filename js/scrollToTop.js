const myButton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  // console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    myButton.classList.remove("hidden");
  } else {
    myButton.classList.add("hidden");
  }
};

myButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
