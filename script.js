const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const downArrow = document.querySelector(".down-arrow");
const accordionItems = document.querySelectorAll(".accordion-item");
const accordionContent = document.querySelector(".accordion-content");
const header = document.querySelector("header");

let count = 0;

function sliderAnimation(slider) {
  if (count === slider.length - 1) {
    count = 0;
    slider[slider.length - 1].style.display = "none";
    slider[0].style.display = "block";
    return;
  }

  slider[count].style.display = "none";
  slider[count + 1].style.display = "block";
  count += 1;
}

function intervalFn() {
  sliderAnimation(slides);
}

let interval = setInterval(intervalFn, 3000);

leftArrow.addEventListener("click", () => {
  clearInterval(interval);
  if (count === 0) {
    slides[count].style.display = "none";
    count = slides.length - 1;
    slides[count].style.display = "block";
  } else {
    slides[count].style.display = "none";
    count -= 1;
    slides[count].style.display = "block";
  }
  interval = setInterval(intervalFn, 3000);
});

rightArrow.addEventListener("click", () => {
  clearInterval(interval);
  if (count === slides.length - 1) {
    slides[count].style.display = "none";
    count = 0;
    slides[count].style.display = "block";
  } else {
    slides[count].style.display = "none";
    count += 1;
    slides[count].style.display = "block";
  }
  interval = setInterval(intervalFn, 3000);
});

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    const itemContent = item.querySelector(".accordion-content");
    const itemArrow = item.querySelector(".down-arrow");
    itemContent.classList.toggle("none");
    itemArrow.classList.toggle("rotate");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    header.style.backgroundColor = "rgba(26, 30, 31, .9)";
  }
});