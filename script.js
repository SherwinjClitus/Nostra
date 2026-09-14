/*MENU FUNCTION */

const menu = document.querySelector(".menu");
const mobileview = document.querySelector(".mobile-menu");

console.log(mobileview.style.display);

menu.addEventListener("click", function () {
  mobileview.style.transform = "translateX(0)";
});

const close = document.querySelector(".close");
close.addEventListener("click", function () {
  mobileview.style.transform = "translateX(-100%)";
});

/*CHECK BOX FILTERING */

const checkboxes = document.querySelectorAll("input[type='checkbox']");

const products = document.querySelectorAll(".collection-product");

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    const selectedOccasions = document.querySelectorAll(
      "input[value='summer']:checked, input[value='party']:checked, input[value='beach']:checked",
    );

    const selectedColors = document.querySelectorAll(
      "input[value='red']:checked, input[value='blue']:checked, input[value='white']:checked, input[value='green']:checked",
    );

    const selectedArrivals = document.querySelectorAll(
      "input[value='new']:checked, input[value='old']:checked",
    );

    products.forEach(function (product) {
      let occasionMatch = true;
      let colorMatch = true;
      let arrivalMatch = true;

      // OCCASION

      if (selectedOccasions.length > 0) {
        occasionMatch = false;

        selectedOccasions.forEach(function (checkbox) {
          if (product.dataset.occasion.toLowerCase() === checkbox.value) {
            occasionMatch = true;
          }
        });
      }

      // COLOR

      if (selectedColors.length > 0) {
        colorMatch = false;

        selectedColors.forEach(function (checkbox) {
          if (product.dataset.color.toLowerCase() === checkbox.value) {
            colorMatch = true;
          }
        });
      }

      // ARRIVAL

      if (selectedArrivals.length > 0) {
        arrivalMatch = false;

        selectedArrivals.forEach(function (checkbox) {
          if (product.dataset.arrival.toLowerCase() === checkbox.value) {
            arrivalMatch = true;
          }
        });
      }

      // SHOW / HIDE

      if (occasionMatch && colorMatch && arrivalMatch) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// OFFER BANNER

const offerBanner = document.querySelector("#offer-banner");
const offerClose = document.querySelector("#offer-close");

if (offerBanner && offerClose) {
  offerClose.addEventListener("click", function () {
    offerBanner.style.display = "none";
  });
}

//SLIDER
const slides = document.querySelector(".slides");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (slides && next && prev) {
  let currentSlide = 0;

  next.addEventListener("click", function () {
    currentSlide++;

    if (currentSlide >= 3) {
      currentSlide = 0;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  });

  prev.addEventListener("click", function () {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = 2;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}

//HEART
const hearts = document.querySelectorAll(".heart");
hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    if (heart.classList.contains("fa-solid")) {
      heart.classList.remove("fa-solid");
      heart.classList.add("fa-regular");
      heart.classList.remove("liked");
    } else {
      heart.classList.add("fa-solid");
      heart.classList.remove("fa-regular");
      heart.classList.add("liked");
    }
  });
});
