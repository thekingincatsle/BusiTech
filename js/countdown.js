const countDownDate = new Date("April 6, 2023").getTime();

const x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementsByClassName("day").item(0).innerHTML =
    days + "<div>Ngày</div>";
  document.getElementsByClassName("hour").item(0).innerHTML =
    hours + "<div>Giờ</div>";
  document.getElementsByClassName("minute").item(0).innerHTML =
    minutes + "<div>Phút</div>";
  document.getElementsByClassName("second").item(0).innerHTML =
    seconds + "<div>Giây</div>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("day").item(0).innerHTML =
      "0" + "<div>Ngày</div>";
    document.getElementsByClassName("hour").item(0).innerHTML =
      "0" + "<div>Giờ</div>";
    document.getElementsByClassName("minute").item(0).innerHTML =
      "0" + "<div>Phút</div>";
    document.getElementsByClassName("second").item(0).innerHTML =
      "0" + "<div>Giây</div>";
  }
}, 1000);
