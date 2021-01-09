var scl = 10;
var cols, rows;
var inc = 0.1;
var fr;
var zoff = 0;
var particles = [];
var flowfield ;


function setup() {
    createCanvas(800, 600);
    cols = floor(width/scl);
    rows = floor(height/scl);
    fr = createP('');

    flowfield = new Array(cols * rows);

    for (let i = 0; i < 1500; i++) {
        particles[i] = new Particle();
    }

    background('#f1f1f1');
    
  }
  
  function draw() {
    // fill('#000000');
    // background('#f1f1f1');
    var yoff = 0;

    for (let y = 0; y < rows; y++) {

        var xoff = 0;

        for (let x = 0; x < cols; x++) {
            // background('#f1f1f1');
            var index = x + y * cols;
            noiseDetail(6, 0.2);
            var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;

            var v = p5.Vector.fromAngle(angle);
            v.setMag(0.4);

            flowfield[index] = v;

            stroke(0, 100);
            
            push();
            translate(x * scl, y * scl);
            rotate(v.heading());
            strokeWeight(1);
            line(0, 0, scl, 0);
            pop();

            // rect(x * scl, y * scl, scl, scl);

            xoff += inc;
        }
        yoff += inc;
    }
    // var x = 200;
    // // x = random(width);
    // x = map(noise(xoff1), 0, 1, 0, width);
    // y = map(noise(xoff2), 0, 1, 0, width);

    // xoff1 += 0.02;
    // xoff2 += 0.02;
    // ellipse(x, y, 24, 24);
    // noLoop();
    zoff += 0.0009;

    for (let i = 0; i < particles.length; i++) {
        // particles[i].follow(flowfield);
        // particles[i].update();
        // particles[i].edges();
        // particles[i].show();
    }

    

    fr.html(floor(frameRate()));
    
  }