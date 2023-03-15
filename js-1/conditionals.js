function calcularColor(numcolor) {
    var color
    if (numcolor === 1) {
        color = "Black";
    }
    else if (numcolor === 2) {
        color = "White";
    }
    else if (numcolor === 3) {
        color = "Red";
    }
    else {
        color = "Green";
    }

    console.log("The color is " + color);
    return "El color es " + color;
}
calcularColor(3);
