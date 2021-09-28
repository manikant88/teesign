var imageLoader = document.getElementById("imageLoader");
imageLoader.addEventListener("change", handleImage, false);

var canvas = document.getElementById("imageCanvas");

var ctx = canvas.getContext("2d");

var shapeCanvas = document.getElementById("shapeCanvas");

var sctx = shapeCanvas.getContext("2d");

var canvas2 = document.getElementById("patternCanvas");
canvas2.height = 500;
canvas2.width = 500;

var ctx2 = canvas2.getContext("2d");

var tempCanvas = document.createElement("canvas");

var tCtx = tempCanvas.getContext("2d");

var testCanvas = document.getElementById("testCanvas");

var _ctx = testCanvas.getContext("2d");

var angleInDegrees = 0;
var displayDeg = document.getElementById("displayDeg");
var slider = document.getElementById("myRange");
var output = document.getElementById("degreeValue");

output.innerHTML = slider.value;

// ctx.mozImageSmoothingEnabled = false;
// ctx.webkitImageSmoothingEnabled = false;
// ctx.msImageSmoothingEnabled = false;
// ctx.imageSmoothingEnabled = false;

var img = new Image();

function handleImage(e) {
  var reader = new FileReader();
  reader.onload = function (event) {
    img.src = event.target.result;
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      drawPattern(this, 150);
    };
  };
  reader.readAsDataURL(e.target.files[0]);
}

slider.oninput = function () {
  output.innerHTML = this.value;
  drawRotated(this.value);
};

function drawRotated(degrees) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((degrees * Math.PI) / 180);
  ctx.drawImage(img, -img.width / 2, -img.width / 2);
  ctx.restore();

  // Pattern Canvas
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.save();

  tempCanvas.width = 150;
  tempCanvas.height = 150;

  ctx2.translate(0, 0);
  tCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2);
  tCtx.rotate((degrees * Math.PI) / 180);
  tCtx.translate(-tempCanvas.width / 2, -tempCanvas.height / 2);
  tCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 150, 150);

  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.fillStyle = ctx2.createPattern(tempCanvas, "repeat");

  ctx2.beginPath();
  ctx2.rect(0, 0, canvas2.width, canvas2.height);
  ctx2.fill();

  ctx2.restore();

  // HEX Rotate
  //   _ctx.clearRect(0, 0, testCanvas.width, testCanvas.height);
  //   _ctx.save();

  //   _ctx.translate(testCanvas.width / 2, testCanvas.height / 2);
  //   _ctx.rotate((degrees * Math.PI) / 180);
  //   _ctx.drawImage(img, -img.width / 2, -img.width / 2);

  //   _ctx.restore();
  drawHex(degrees);
}

function drawPattern(img, size) {
  tempCanvas.width = size;
  tempCanvas.height = size;
  tCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, size, size);
  //   tCtx.drawImage(img, 0, 0, 100, 100, 0, 0, size, size);

  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.fillStyle = ctx2.createPattern(tempCanvas, "repeat");

  ctx2.beginPath();
  ctx2.rect(0, 0, canvas2.width, canvas2.height);
  ctx2.fill();
}

function drawHexOveraly() {
  let height = 100 * Math.cos(Math.PI / 6);

  sctx.beginPath();

  sctx.moveTo(23, 21);
  sctx.lineTo(276, 21);
  sctx.lineTo(150, 215 - height);
  sctx.closePath();

  sctx.lineWidth = 2;
  sctx.strokeStyle = "blue";
  sctx.stroke();

  // clip
  drawHex();
}

function drawHex(degrees = 0) {
  let height = 100 * Math.cos(Math.PI / 6);
  //   testCanvas.width = img.width;
  //   testCanvas.height = img.height;

  //   testCanvas.width = 284;
  //   testCanvas.height = 284;
  //   console.log(img.width, img.width);

  _ctx.beginPath();
  //   _ctx.moveTo(23, 40);
  //   _ctx.lineTo(260, 40);
  //   _ctx.lineTo(142, 331 - height);

  // backup
  _ctx.moveTo(23, 21);
  _ctx.lineTo(276, 21);
  _ctx.lineTo(150, 215 - height);

  _ctx.closePath();
  _ctx.clip();
  _ctx.drawImage(img, 0, 0, testCanvas.width, testCanvas.height);

  //   _ctx.clearRect(0, 0, testCanvas.width, testCanvas.height);
  //   _ctx.save();

  //   _ctx.translate(testCanvas.width / 2, testCanvas.height / 2);
  //   _ctx.rotate((degrees * Math.PI) / 180);
  //   _ctx.drawImage(img, -img.width / 2, -img.width / 2);

  //   _ctx.restore();
}

//
//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// To be used

function scaledImage(img) {
  var canvas2 = document.getElementById("patternCanvas");
  canvas2.height = 500;
  canvas2.width = 500;
  var ctx2 = canvas2.getContext("2d");

  ctx2.mozImageSmoothingEnabled = false;
  ctx2.webkitImageSmoothingEnabled = false;
  ctx2.msImageSmoothingEnabled = false;
  ctx2.imageSmoothingEnabled = false;

  //   var img = new Image();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 3; j++) {
      //   ctx2.drawImage(img, j * 150, i * 150, 150, 150);
      ctx2.drawImage(img, j * 50, i * 38, 50, 38);
    }
  }
}
