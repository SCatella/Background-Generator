var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButton = document.getElementById("randomButton");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

        css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randButton.addEventListener("click", function() {
    color1.value = "#" + randHex;
    color2.value = "#" + randHex;
})
