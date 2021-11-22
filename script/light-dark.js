document.addEventListener("DOMContentLoaded", function () {
  const dmbutton2 = document.getElementById("dmbutton2");
  const dmbutton = document.getElementById("dmbutton");
  const navdesktop = document.getElementById("navdesktop");

  let darkmode = false;

  dmbutton.addEventListener("click", function() {
    console.log();
    darkmode = !darkmode;
    navdesktop.style.backgroundColor = "#292929";
    dmbutton2.style.display = "block";
    dmbutton.style.display = "none";
  });

  dmbutton2.addEventListener("click", function (e) {
    console.log(e);
    darkmode = !darkmode;
    navdesktop.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    dmbutton2.style.display = "none";
    dmbutton.style.display = "block";
  });
});
