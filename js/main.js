window.addEventListener("load", function (event) {
  // your code ....
  const form = document.getElementById("form");
  const submitButton = document.getElementById("submit");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzxlG0MkZOAeEcZctc3FjI8pFzLpPGV5t5UffpQ6oXX_p35Fo5qp2HiLAa2pF97Cdr-Kw/exec";

  form.addEventListener("submit", (e) => {
    submitButton.disabled = true;
    e.preventDefault();
    console.log(form);
    let requestBody = new FormData(form);
    console.log(requestBody);
    // requestBody.source = requestBody.source.toString();
    fetch(scriptURL, { method: "POST", body: requestBody })
      .then((response) => {
        alert("Success!", response);
        submitButton.disabled = false;
      })
      .catch((error) => {
        alert("Error!", error.message);
        submitButton.disabled = false;
      });
  });
});
