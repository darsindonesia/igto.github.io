let x = 0;
let y = 0;
let a = 50;
let b = 50;


// function setup() {
//     createCanvas(640, 640);
//     background(100);
// }


function setup() {
    // membuat kanvas ukuran 400 x 400
    let myCanvas = createCanvas(400, 400);
    angleMode(DEGREES);
    myCanvas.parent('myContainer');
}



function draw() {

    // membuat kartesius
    strokeWeight(3.0);
    cursor(CROSS);
    strokeCap(ROUND);

    background(255);
    line(width / 2, 0, width / 2, height);
    line(width / 2, 0, (width / 2) - 5, 5);
    line(width / 2, 0, (width / 2) + 5, 5);

    line(0, height / 2, width, height / 2);
    line(width, height / 2, width - 5, (height / 2) - 5);
    line(width, height / 2, width - 5, (height / 2) + 5);


    // membuat panah horizontal

    line(50, 50, mouseX, 50);
    if (mouseX > a) {
        line(mouseX - 5, a - 5, mouseX, a);
        line(mouseX - 5, a + 5, mouseX, a);
    } else {
        line(mouseX + 5, a - 5, mouseX, a);
        line(mouseX + 5, a + 5, mouseX, a);

    };

    // membuat panah vertikal
    line(50, 50, 50, mouseY);
    if (mouseY > b) {
        line(b - 5, mouseY - 5, b, mouseY);
        line(b + 5, mouseY - 5, b, mouseY);
    } else {
        line(b + 5, mouseY + 5, b, mouseY);
        line(b - 5, mouseY + 5, b, mouseY);

    }


    noFill();
    // ellipse(y, height / 2, 100, 100);
    // arc(width / 2, height / 2, 600, 600, 0, mouseX, PIE);
    // rect(300, 100, 55, 55);
    // rect(mouseX, mouseY, 55, 55);
    // triangle(30, 75, 58, 20, 86, 75);
    // // point(mouseX, mouseY);
    // line(width / 2, height / 2, mouseX, mouseY);



    // x = x + 0.01;
    // y = y + 1;


}