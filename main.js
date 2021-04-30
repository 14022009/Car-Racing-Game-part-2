canvas = document.getElementById("user_canvas");
ctx = canvas.getContext("2d");
//Var Section
var car_1_2_width = 141;
var car_1_2_height = 70;

var x2 = 15;
var x1 = 15;

var y1 = 70;
var y2 = 160;

var background_image = "Bg.png";

var car_1_img = "Red.png";
var car_2_img = "Blue.png";

var rdcwon = "Red Car Won";
var becwon = "Blue Car Won"
//Var Section End

//Function uploading 
function img_to_canvas() {
    background_img_tag = new Image();
    background_img_tag.onload = upload_background;
    background_img_tag.src = background_image;

    car_1_img_tag = new Image();
    car_1_img_tag.onload = upload_car_1;
    car_1_img_tag.src = car_1_img;

    car_2_img_tag = new Image();
    car_2_img_tag.onload = upload_car_2;
    car_2_img_tag.src = car_2_img;

}

function upload_background() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function upload_car_1() {
    ctx.drawImage(car_1_img_tag, x1, y1, car_1_2_width, car_1_2_height);
}

function upload_car_2() {
    ctx.drawImage(car_2_img_tag, x2, y2, car_1_2_width, car_1_2_height);
}
// Function Uploading End

// Function Keys and If
window.addEventListener("keydown", user_keydown);

function user_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if (key_pressed == '37') {
        console.log(
            "Left is pressed"
        );
        left();
    }

    if (key_pressed == '38') {
        console.log(
            "Up is pressed"
        );
        up();
    }

    if (key_pressed == '39') {
        console.log(
            "Right is pressed"
        );
        right();
    }

    if (key_pressed == '40') {
        console.log(
            "Down is pressed"
        );
        down();
    }
    if (key_pressed == '87') {
        console.log(
            "W is pressed"
        );
        w();
    }

    if (key_pressed == '65') {
        console.log(
            "A is pressed"
        );
        a();
    }

    if (key_pressed == '83') {
        console.log(
            "S is pressed"
        );
        s();
    }
    if (key_pressed == '68') {
        console.log(
            "D is pressed"
        );
        d();
    }

    if (x1 > 1165 && x2 < 1175) {
        console.log("rdcwon");
        document.getElementById('game_status').innerHTML = rdcwon;
    }

    if (x2 > 1165 && x1 < 1175) {
        console.log("becwon");
        document.getElementById('game_status').innerHTML = becwon;
    }
}



// Function Keys and If End

// Function Key working 
function up() {

    if (y1 >= 30) {
        y1 = y1 - 10;
        upload_background();
        upload_car_1();
        upload_car_2();

    }
}

function down() {
    if (y1 <= 210) {
        y1 = y1 + 10;
        upload_background();
        upload_car_1();
        upload_car_2();
    }

}

function left() {
    if (x1 >= 15) {
        x1 = x1 - 10;
        upload_background();
        upload_car_1();
        upload_car_2();
    }

}

function right() {
    if (x1 <= 1170) {
        x1 = x1 + 10;
        upload_background();
        upload_car_2();
        upload_car_1();
    }
}

function w() {

    if (y2 >= 30) {
        y2 = y2 - 10;
        upload_background();
        upload_car_2();
        upload_car_1();

    }
}

function s() {
    if (y2 <= 210) {
        y2 = y2 + 10;
        upload_background();
        upload_car_2();
        upload_car_1();
    }

}

function a() {
    if (x2 >= 15) {
        x2 = x2 - 10;
        upload_background();
        upload_car_2();
        upload_car_1();
    }

}

function d() {
    if (x2 <= 1170) {
        x2 = x2 + 10;
        upload_background();
        upload_car_2();
        upload_car_1();
    }
}
// Function Key Working End

/*
// Function Sound
var pressed = {},
    audio = document.getElementById('sound'),
    output = document.getElementById('output'),
    maxValue = 1,
    duration,
    volume;

document.onkeydown = function (e) {
    if (pressed[e.which]) return;
    pressed[e.which] = e.timeStamp;
};

document.onkeyup = function (e) {
    if (!pressed[e.which]) return;

    // 39 = Left Arrow
    // 68 = d
    if (e.keyCode == 39, 68) {

        // Calculate press time
        duration = (e.timeStamp - pressed[e.which]) / 0;

        // Calculate new volume
        if (duration >= maxValue) {
            volume = 1;
        } else {
            volume = duration / maxValue;
        }

        // Set the volume and play the track
        audio.volume = volume;
        audio.play();

        pressed[e.which] = 0;

        // Log press duration and resulting volume
        output.innerHTML += '<p>Key ' + e.which + ' was pressed for ' + duration + ' seconds. Volume is set to ' + (volume * 100).toFixed(2) + '%</p>';

        return false;
    }

}; 
*/