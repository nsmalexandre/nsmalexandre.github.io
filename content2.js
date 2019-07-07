//------------------CHANGEIMAGE------------//

 var mysrc = "pir1.jpg";
 var srcnr = 1;

  function changeImage() {
    if (mysrc == "pir1.jpg") {
        document.images["pic"].src = "images/pir2.jpg";
        document.images["pic"].alt = "pir2";
        mysrc = "pir2.jpg";
        document.getElementById("srcnr").innerHTML = "2/4";
  } else if (mysrc == "pir2.jpg"){
        document.images["pic"].src = "images/pir3.jpg";
        document.images["pic"].alt = "pir3";
        mysrc = "pir3.jpg";
        document.getElementById("srcnr").innerHTML = "3/4";
  } else if (mysrc == "pir3.jpg"){
        document.images["pic"].src = "images/pir4.jpg";
        document.images["pic"].alt = "pir4";
        mysrc = "pir4.jpg";
        document.getElementById("srcnr").innerHTML = "4/4";
  } else if (mysrc == "pir4.jpg"){
        document.images["pic"].src = "images/pir1.jpg";
        document.images["pic"].alt = "pir1";
        mysrc = "pir1.jpg";
        document.getElementById("srcnr").innerHTML = "1/4";
  }
}

//--------------------CURSOR ADDAPT FROM Party Parrot Conga Cursor Trail by Desiree S at CodePen.io----------------------//
if (window.innerWidth > 640) {

var PARROTS_NUM = 12,
      SIZE = 25,
      SPACING = 1.9
      DIAMETER = 15,
      ROTATION = -0.03,
      SPEED = 0.1,
      OFFSET = 15;

var parrots = [],
    a = Math.round(SIZE * DIAMETER * 0.208333),
    current = OFFSET,
    mouse = {
      x: a + OFFSET,
      y: a + OFFSET
    };

//---------------MULTIPLYCURSOR------------//
for (let i = 0; i < PARROTS_NUM; i++) {
  parrots[i] = new Parrot(i);
}


function Parrot(i) {
  this.x = 0;
  this.y = 0;
  this.X = 0;
  this.Y = 0;
  this.div = document.createElement('div');
  this.div.id = 'parrot-' + i;
  this.div.className = 'parrot-' + getRandom(1,12);
  document.body.appendChild(this.div);
  console.log(this.div);
};

function placeParrot(parrot, x, y) {
  parrot.x = x;
  parrot.y = y;
  parrot.div.style.left = parrot.x + 'px';
  parrot.div.style.top = parrot.y + 'px';
}

function makeCircle() {
  let parrot;
  current -= ROTATION;
  for (let i = PARROTS_NUM - 1; i > -1; --i) {
    parrot = parrots[i];
    parrot.div.style.top = Math.round(parrot.y + a * Math.sin((current + i) / SPACING) - 15) + 'px';
    parrot.div.style.left = Math.round(parrot.x + a * Math.cos((current + i) / SPACING)) + 'px';
  }
}

addEventListener("mousemove", function(e){
  mouse.x = e.pageX;
  mouse.y = e.pageY;
});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function draw() {
  let parrot = parrots[0];
  let prevParrot = parrots[0];
  parrot.x = parrot.X += (mouse.x - parrot.X) * SPEED;
  parrot.y = parrot.Y += (mouse.y - parrot.Y) * SPEED;
  for (let i = PARROTS_NUM - 1; i > 0; --i) {
    parrot = parrots[i];
    prevParrot = parrots[i-1];
    parrot.x = parrot.X += (prevParrot.x - parrot.X) * SPEED;
    parrot.y = parrot.Y += (prevParrot.y - parrot.Y) * SPEED;
  }
  makeCircle();
  requestAnimationFrame(draw);
}

draw();

}

//----------------------------Back to Top - by CodyHouse.co — Copyright (c) 2011-2019 Amber Creative Lab, Ltd.-----------------------------------//

(function(){
  var backTop = document.getElementsByClassName('js-cd-top')[0],
    // browser window scroll (in pixels) after which the "back to top" link is shown
    offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offsetOpacity = 1200,
    scrollDuration = 700,
    scrolling = false;
  if( backTop ) {
    //update back to top visibility on scrolling
    window.addEventListener("scroll", function(event) {
      if( !scrolling ) {
        scrolling = true;
        (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
      }
    });
    //smooth scroll to top
    backTop.addEventListener('click', function(event) {
      event.preventDefault();
      (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : scrollTop(scrollDuration);
    });
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    ( windowTop > offset ) ? addClass(backTop, 'cd-top--show') : removeClass(backTop, 'cd-top--show', 'cd-top--fade-out');
    ( windowTop > offsetOpacity ) && addClass(backTop, 'cd-top--fade-out');
    scrolling = false;
  }
  
  function scrollTop(duration) {
      var start = window.scrollY || document.documentElement.scrollTop,
          currentTime = null;
          
      var animateScroll = function(timestamp){
        if (!currentTime) currentTime = timestamp;        
          var progress = timestamp - currentTime;
          var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
          window.scrollTo(0, val);
          if(progress < duration) {
              window.requestAnimationFrame(animateScroll);
          }
      };

      window.requestAnimationFrame(animateScroll);
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };

  //class manipulations - needed if classList is not supported
  function hasClass(el, className) {
      if (el.classList) return el.classList.contains(className);
      else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
  function addClass(el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.add(classList[0]);
    else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
  }
  function removeClass(el, className) {
    var classList = className.split(' ');
      if (el.classList) el.classList.remove(classList[0]);  
      else if(hasClass(el, classList[0])) {
        var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
        el.className=el.className.replace(reg, ' ');
      }
      if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
  }
})();