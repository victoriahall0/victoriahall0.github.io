console.log("test");

const x = 2;
const y = 2;

if (x === y) {
    console.log("SUCCESS");
}
else {
    console.log("FAIL");
}


const btn = document.querySelector("button");
const canvas = querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener
("DOMContentLoaded", () => {
    canvas.width = document, documentElement.clientwidth;
    canvas.height = document, documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random () * number);
}


function draw () {
    // console.log("test"); 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i<100; i++) {
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let color = "rgba("+red+","+green+","+blue+",0.5)"
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.arc(
            random(canvas.width), 
            random(canvas.height),
            random(100),
            0,
            2 * Math.PI,
            );
            ctx.fill();
    }
}
btn.addEventListener("click", draw);

