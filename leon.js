let up = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 250) {
    up.classList.add("show")
  } else {
    up.classList.remove("show")
  }
}
up.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior:"smooth",
  })
});