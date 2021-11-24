document.addEventListener("DOMContentLoaded", function () {
  const btn1 = document.getElementById("btn1");

  let darkmode = false;

  btn1.addEventListener("click", function (e) {
    console.log(e);
    if (darkmode === false) {
      btn1.style.backgroundImage = "url('images/sun.png')";
      darkmode = true;
    } else if (darkmode === true) {
      btn1.style.backgroundImage = "url('images/moon.png')";
      darkmode = false;
    }
  });
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


salut