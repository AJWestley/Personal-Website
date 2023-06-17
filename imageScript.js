const image = document.getElementById("sourceImage"); // source
const canvas = document.getElementById("canvas"); // edited
const context = canvas.getContext("2d");
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const brightnessSlider = document.getElementById("brightness-slider");
const contrastSlider = document.getElementById("contrast-slider");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

function upload(event) {
  // Set the source of the image from the uploaded file
  image.src = URL.createObjectURL(event.target.files[0]);

  image.onload = function () {
    // Set the canvas the same width and height of the image
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.crossOrigin = "anonymous";
    apply();
  };

  // Show the image editor controls and hide the help text
  document.querySelector(".save-reset").style.display = "flex";
  canvas.style.opacity = 1;
  //document.querySelector(".image-controls").style.display = "block";
  //document.querySelector(".preset-filters").style.display = "block";
}

function save() {
  let linkElement = document.getElementById("link");
  linkElement.setAttribute("download", "edited_image.png");
  let canvasData = canvas.toDataURL("image/png");
  canvasData.replace("image/png", "image/octet-stream");
  linkElement.setAttribute("href", canvasData);
  linkElement.click();
}

function reset() {
  brightnessSlider.value = 100;
  contrastSlider.value = 100;
  apply();
}

function apply() {
  let filter = `brightness(${brightnessSlider.value}%) 
                contrast(${contrastSlider.value}%)`;

  context.filter = filter;
  context.drawImage(image, 0, 0);
}
