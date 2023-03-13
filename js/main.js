window.addEventListener("load", function (event) {
  // your code ....
  const form = document.getElementById("form");
  const submitButton = document.getElementById("submit");
  const loadingIcon = document.getElementById("loading-icon");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzxlG0MkZOAeEcZctc3FjI8pFzLpPGV5t5UffpQ6oXX_p35Fo5qp2HiLAa2pF97Cdr-Kw/exec";

  form.addEventListener("submit", (e) => {
    submitButton.disabled = true;
    e.preventDefault();
    const inputs = document.querySelectorAll(".input-field");
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    let requestBody = new FormData(form);

    // clear input value after submit
    inputs.forEach((input) => {
      input.value = "";
    });
    checkbox.forEach((i) => (i.checked = false));

    loadingIcon.classList.remove("hidden");
    fetch(scriptURL, { method: "POST", body: requestBody })
      .then((response) => {
        loadingIcon.classList.add("hidden");
        alert("Your application form is sent successfully!", response);
        submitButton.disabled = false;
      })
      .catch((error) => {
        alert("Error!", error.message);
        submitButton.disabled = false;
      });
  });
});
