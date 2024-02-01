let showPopup = document.getElementById("show-poup");
let myBtn = document.getElementById("myBtn");

function openPopup() {
  showPopup.classList.add("openpoup");
  window.scrollTo(0, 0);
}

function closePopup() {
  showPopup.classList.remove("openpoup");
}

$(document).ready(function () {
  $(".nav-btn").on("click", function (event) {
    event.preventDefault();
    /* Act on the event */
    $(".sidebar").slideToggle("fast");

    window.onresize = function () {
      if ($(window).width() >= 768) {
        $(".sidebar").show();
      } else {
        $(".sidebar").hide();
      }
    };
  });
});
