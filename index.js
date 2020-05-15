var maxIterations = 80;
var zoom = 240;

function setup () {
  console.clear();
  colorMode(HSB, 100);
  var width = 600;
  var height = 500;
  noStroke();
  createCanvas(width, height);
  translate(width * 0.7, height * 0.5);
}

function draw () {
  resizeCanvas(width, height);
  translate(width * 0.7, height * 0.5);
  for (var i = width * -0.7; i < width * 0.5; i++) {
    for (var j = height * -0.5; j < height * 0.5; j++) {
      let cnum = new ComplexNumber(i / zoom, j / zoom);
      let m = mandelbrot(cnum);
      let hue = 0;
      let saturation = 0;
      let brightness = (m < maxIterations) ? 100 * sqrt(m / maxIterations) : 0;
      fill(hue, saturation, brightness);
      rect(i, j, 1, 1);
    }
  }
}

$(document).ready(() => {
  attachSliderEvents();
})

function attachSliderEvents () {
  $("#widthslider").on("input", function(){
    let val = parseFloat($(this).val());
    width = val;
    $("#widthvalue").text(val);
  })
  $("#heightslider").on("input", function(){
    let val = parseFloat($(this).val());
    height = val;
    $("#heightvalue").text(val);
  })
  $("#zoomslider").on("input", function(){
    let val = parseFloat($(this).val());
    zoom = val;
    $("#zoomvalue").text(val);
  })
}
