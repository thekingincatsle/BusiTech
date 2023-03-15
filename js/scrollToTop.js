var myButton = document.getElementById("btn-back-to-top");

myButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
