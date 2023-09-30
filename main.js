let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".previous");

const circle = document.querySelectorAll(".circle");
let indicator = document.querySelector(".progress_indicator");
let currentStep = 1;

function stepUp() {
  currentStep++;

  circle.forEach((e, ind) => {
    if (ind < currentStep) {
      circle[ind].classList.add("active");
    }
  });

  indicator.style.width =
    `${((currentStep - 1) / (circle.length - 1)) * 100}` + "%";

  if (currentStep === circle.length) {
    nextBtn.disabled = true;
    console.log("d");
  }

  prevBtn.disabled = false;
}
function stepDown() {
  currentStep--;

  circle.forEach((e, ind) => {
    if (ind <= currentStep) {
      circle[currentStep].classList.remove("active");
    }
  });
  indicator.style.width =
    `${((currentStep - 1) / (circle.length - 1)) * 100}` + "%";

  if (currentStep == 1) {
    prevBtn.disabled = true;
  }
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", stepUp);
prevBtn.addEventListener("click", stepDown);
