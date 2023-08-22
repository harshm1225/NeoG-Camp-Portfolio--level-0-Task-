const blogContent = document.querySelector(".blog-content");
const showBtn = document.querySelector(".show-btn");
const dynamicBtnContent = document.querySelector(".dynamic-btn-cont");
const blogContent2 = document.querySelector(".blog-content-2");
const showBtn2 = document.querySelector(".show-btn-2");
const dynamicBtnContent2 = document.querySelector(".dynamic-btn-cont-2");

function showBtnClickHandler() {
  blogContent.classList.toggle("open");

  let isOpenPresent = blogContent.classList.contains("open");
  if (isOpenPresent) {
    dynamicBtnContent.innerHTML = "Hide";
  } else {
    dynamicBtnContent.innerHTML = "Show";
  }
}
function showBtn2clickHandler() {
  blogContent2.classList.toggle("open");
  let isOpenPresent2 = blogContent2.classList.contains("open");
  if (isOpenPresent2) {
    dynamicBtnContent2.innerHTML = "Hide";
  } else {
    dynamicBtnContent2.innerHTML = "Show";
  }
}
showBtn.addEventListener("click", showBtnClickHandler);
showBtn2.addEventListener("click", showBtn2clickHandler);
