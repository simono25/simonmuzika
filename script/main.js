document.addEventListener("DOMContentLoaded", function () {
  const navmobile = document.getElementById("navmobile");
  const checkb = document.getElementById("checkb");

  let isopen = false;

  document.addEventListener("click", function (e) {
    console.log(e);
    if (isopen) {
      if (!navmobile.contains(e.target)) {
        checkb.checked = false;
        isopen = false;
      }
    }
  });

  checkb.addEventListener("click", function (e) {
    console.log(e);
    isopen = !isopen;
  });
});
