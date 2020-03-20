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





    noFill();
    arc(width / 2, height / 2, 600, 600, 0, mouseX, PIE);
    rect(300, 100, 55, 55);
    rect(mouseX, mouseY, 55, 55);




}