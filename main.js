// populat search
var government = document.querySelector("#government div");
var arrow = document.getElementsByClassName("arrow");
var view = document.getElementById("view");
function viewAll() {
  government.classList.toggle("test");

  if (view.textContent.includes("View Less")) {
    view.innerHTML =
      'View More <span class="arrow down"><i class="fa-solid fa-chevron-down"></i></span> ';
  } else {
    view.innerHTML =
      ' View Less <span class="arrow up"><i class="fa-solid fa-angle-up"></i></span>';
  }
}
// end popular search
