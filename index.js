const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

c.fillStyle = "pink";
c.fillRect(0, 0, canvas.width, canvas.height);

var cookies = 0;

function bakeCookie() {
  cookies += 1;
  document.getElementById("cookie-text").innerHTML = "Cookies: " + cookies;
}
