var aframe = false;
var three = false;

function addAframe() {
  if (aframe == false) {
    $("head").append(
      '<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>'
    );
    alert("aframe has been added");
    aframe = true;
  } else {
    alert("Already added!");
  }
}

function addThree() {
  if (three == false) {
    $("head").append(
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r123/three.min.js" integrity="sha512-Q+IG0h7As6sfqE2t1Xf5IeamNyCXb4EXxGCA9Mlbpv7xtwurVHNdVDbyWeSQ3ulPf2FRlqeu77Ec3SJDdIR63w==" crossorigin="anonymous"></script>'
    );
    alert("three.js has been added");
    three = true;
  } else {
    alert("Already added!");
  }
}
