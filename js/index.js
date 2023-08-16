var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const $aside = document.querySelector(".aside");
$aside.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.addEventListener("scroll", function() {
  let pos = window.scrollY;
  if (pos >= 300) {
    $aside.classList.add("on");
  } else {
    $aside.classList.remove("on");
  }
});