window.addEventListener("load", function (event) {
  // your code ....
  const form = document.getElementById("form");
  const submitButton = document.getElementById("submit");
  console.log(form, submitButton);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwuRe2wy6YjZ9zc1r4ozwIFrRhybULVIyjUpxPp1afhsv_7bMLzucM34pBXu6Ex4eY1/exec";

  form.addEventListener("submit", (e) => {
    submitButton.disabled = true;
    e.preventDefault();
    let requestBody = new FormData(form);
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
