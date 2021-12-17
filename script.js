var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButton = document.getElementById("random");

// Save the Random Hex Number Generator here for later

//Generate Random number between 0 and 15.
const randNum = () => {
    const number = Math.floor(Math.random() * 15);
    return number;
}

// Take the randNum and format to hex values and return values as strings.
const hexNum = () => {
    let number = randNum();
    switch (number) {
        case 10: return 'a';
        case 11: return 'b';
        case 12: return 'c';
        case 13: return 'd';
        case 14: return 'e';
        case 15: return 'f';
        default: return number.toString();
    }
}

// Take hexNum and generate a HexColor value (as a string that starts with #).
const hexColor = () => {
    let colorValue = '#';
    for (let i = 0; i < 6; i++) {
        colorValue = colorValue.concat(hexNum());
    }
    return(colorValue);
}

const randGradient = () => {
    color1.value = hexColor();
    color2.value = hexColor();
    setGradient();
}

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

randButton.addEventListener("click", randGradient);


/* Save the Random Hex Number Generator here for later

//Generate Random number between 0 and 15.
const randNum = () => {
    const number = Math.floor(Math.random() * 15);
    return number;
}

// Take the randNum and format to hex values and return values as strings.
const hexNum = () => {
    let number = randNum();
    switch (number) {
        case 10: return 'a';
        case 11: return 'b';
        case 12: return 'c';
        case 13: return 'd';
        case 14: return 'e';
        case 15: return 'f';
        default: return number.toString();
    }
}

// Take hexNum and generate a HexColor value (as a string that starts with #).
const hexColor = () => {
    let colorValue = '#';
    for (let i = 0; i < 6; i++) {
        hexColor.concat(hexNum());
    }
    return colorValue;
}

*/
