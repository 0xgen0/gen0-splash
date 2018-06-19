const OPTS = {
  fill: 'none',
  radius: 25,
  strokeWidth: { 0: 5, 100 : 10 },
  scale: { 0: 1 },
  duration: 500,
  left: 0,
  top: 0,
  easing: 'cubic.out',
};



const cross = new mojs.Shape({
  ...OPTS,
  shape: 'cross',
  stroke: '#FB1FC2',
  delay: 1000,
  duration: 1000,
  repeat: 9999,
}).play();


var repositionShapes = function () {
  // Cross
  var elFeature = document.getElementById('feature').getElementsByTagName('h1')[0];
  cross.el.style.top = (elFeature.offsetTop - 0) + 'px';
  cross.el.style.left = (elFeature.offsetLeft - 32) + 'px';
};


window.onload = function () {
  repositionShapes();
};

window.onresize = function () {
  repositionShapes();
};
