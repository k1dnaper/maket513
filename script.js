let mySwiper;
let button = document.querySelector(".button_show");
let buttonText = document.querySelector(".button_value");
let arrow = document.querySelector(".button_arrow");
let brandList = document.querySelector(".swiper-wrapper");

function enableSwiper() {
  if (window.innerWidth < 768) {
    if (document.querySelector(".swiper")) {
      mySwiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
      });
    }
    if (
      window.innerWidth >= 768 &&
      document.querySelector(".swiper").classList.contains("swiper-initialized")
    ) {
      mySwiper.enable(false);
      mySwiper.destroy(true, true);
      mySwiper = null;
    }
  }
}

enableSwiper();

function hider() {
  if (window.innerWidth > 768 && window.innerWidth < 1120) {
    if (brandList.childElementCount >= 6) {
      for (let i = 6; i < brandList.childElementCount; i++) {
        brandList.children[i].style.display = "none";
        brandList.children[i].classList.add("wasNone");
      }
    }
  }

  if (window.innerWidth > 1120) {
    if (brandList.childElementCount >= 8) {
      for (let i = 8; i < brandList.childElementCount; i++) {
        brandList.children[i].style.display = "none";
        brandList.children[i].classList.add("wasNone");
      }
    }
  }
}
hider();

window.addEventListener("resize", () => {
  enableSwiper();
  hider();
});

button.onclick = function () {
  for (let i = 0; i < brandList.childElementCount; i++) {
    if (brandList.children[i].style.display == "none") {
      brandList.children[i].style.display = "block";
      buttonText.textContent = "Скрыть";
      arrow.style.transform = "rotate(" + 180 + "deg)";
    } else {
      if (brandList.children[i].classList.contains("wasNone")) {
        brandList.children[i].style.display = "none";
      }
      buttonText.textContent = "Показать все";
      arrow.style.transform = "rotate(" + 180 + "deg)";
    }
  }
};
