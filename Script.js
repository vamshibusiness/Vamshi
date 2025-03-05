function openSlider(artImg, originalImg) {
    document.getElementById("sliderFront").src = artImg;
    document.getElementById("sliderBack").src = originalImg;
    document.getElementById("imageSlider").style.display = "flex";
}

function closeSlider() {
    document.getElementById("imageSlider").style.display = "none";
}
