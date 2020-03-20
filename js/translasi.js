let x = 0;
let y = 0;
let a = 300;
let b = 100;


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

let m = color(25, 204, 0);
let n = color('green');


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


    noFill();
    ellipseMode(RADIUS);
    fill('green');
    ellipse(a, b, 15, 15);
    ellipseMode(RADIUS);
    fill('red');
    ellipse(mouseX, b, 15, 15);

    if (mouseX > a) {
        textSize(20);
        text('translasi positif', 10, 30);
        fill(0, 102, 153);
    } else {
        textSize(20);
        text('translasi negatif', 10, 30);
        fill(0, 102, 153);

    };
    // membuat panah horizontal

    line(a, b, mouseX, b);
    if (mouseX > a) {
        line(mouseX - 5, b - 5, mouseX, b);
        line(mouseX - 5, b + 5, mouseX, b);
    } else {
        line(mouseX + 5, b - 5, mouseX, b);
        line(mouseX + 5, b + 5, mouseX, b);

    };


    // membuat panah vertikal
    // line(50, 50, 50, mouseY);
    // if (mouseY > b) {
    //     line(b - 5, mouseY - 5, b, mouseY);
    //     line(b + 5, mouseY - 5, b, mouseY);
    // } else {
    //     line(b + 5, mouseY + 5, b, mouseY);
    //     line(b - 5, mouseY + 5, b, mouseY);

    // }


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