//------------------CHANGEIMAGE------------//

 var mysrc = "mm3.jpg";
 var srcnr = 1;

  function changeImage() {
    if (mysrc == "mm3.jpg") {
        document.images["pic"].src = "images/mm4.jpg";
        document.images["pic"].alt = "mm4";
        mysrc = "mm4.jpg";
        document.getElementById("srcnr").innerHTML = "2/23";
  } else if (mysrc == "mm4.jpg"){
        document.images["pic"].src = "images/mm5.jpg";
        document.images["pic"].alt = "mm5";
        mysrc = "mm5.jpg";
        document.getElementById("srcnr").innerHTML = "3/23";
  } else if (mysrc == "mm5.jpg"){
        document.images["pic"].src = "images/mm6.jpg";
        document.images["pic"].alt = "mm6";
        mysrc = "mm6.jpg";
        document.getElementById("srcnr").innerHTML = "4/23";
  } else if (mysrc == "mm6.jpg"){
        document.images["pic"].src = "images/mm7.jpg";
        document.images["pic"].alt = "mm7";
        mysrc = "mm7.jpg";
        document.getElementById("srcnr").innerHTML = "5/23";
  } else if (mysrc == "mm7.jpg"){
        document.images["pic"].src = "images/mm8.jpg";
        document.images["pic"].alt = "mm8";
        mysrc = "mm8.jpg";
        document.getElementById("srcnr").innerHTML = "6/23";
  } else if (mysrc == "mm8.jpg"){
        document.images["pic"].src = "images/mm9.jpg";
        document.images["pic"].alt = "mm9";
        mysrc = "mm9.jpg";
        document.getElementById("srcnr").innerHTML = "7/23";
  } else if (mysrc == "mm9.jpg"){
        document.images["pic"].src = "images/mm10.jpg";
        document.images["pic"].alt = "mm10";
        mysrc = "mm10.jpg";
        document.getElementById("srcnr").innerHTML = "8/23";
  } else if (mysrc == "mm10.jpg"){
        document.images["pic"].src = "images/mm11.jpg";
        document.images["pic"].alt = "mm11";
        mysrc = "mm11.jpg";
        document.getElementById("srcnr").innerHTML = "9/23";
  } else if (mysrc == "mm11.jpg"){
        document.images["pic"].src = "images/mm12.jpg";
        document.images["pic"].alt = "mm12";
        mysrc = "mm12.jpg";
        document.getElementById("srcnr").innerHTML = "10/23";
  } else if (mysrc == "mm12.jpg"){
        document.images["pic"].src = "images/mm13.jpg";
        document.images["pic"].alt = "mm13";
        mysrc = "mm13.jpg";
        document.getElementById("srcnr").innerHTML = "11/23";
  } else if (mysrc == "mm13.jpg"){
        document.images["pic"].src = "images/mm14.jpg";
        document.images["pic"].alt = "mm14";
        mysrc = "mm14.jpg";
        document.getElementById("srcnr").innerHTML = "12/23";
  } else if (mysrc == "mm14.jpg"){
        document.images["pic"].src = "images/mm15.jpg";
        document.images["pic"].alt = "mm15";
        mysrc = "mm15.jpg";
        document.getElementById("srcnr").innerHTML = "13/23";
  } else if (mysrc == "mm15.jpg"){
        document.images["pic"].src = "images/mm16.jpg";
        document.images["pic"].alt = "mm16";
        mysrc = "mm16.jpg";
        document.getElementById("srcnr").innerHTML = "14/23";
  } else if (mysrc == "mm16.jpg"){
        document.images["pic"].src = "images/mm17.jpg";
        document.images["pic"].alt = "mm17";
        mysrc = "mm17.jpg";
        document.getElementById("srcnr").innerHTML = "15/23";
  } else if (mysrc == "mm17.jpg"){
        document.images["pic"].src = "images/mm18.jpg";
        document.images["pic"].alt = "mm18";
        mysrc = "mm18.jpg";
        document.getElementById("srcnr").innerHTML = "16/23";
  } else if (mysrc == "mm18.jpg"){
        document.images["pic"].src = "images/mm19.jpg";
        document.images["pic"].alt = "mm19";
        mysrc = "mm20.jpg";
        document.getElementById("srcnr").innerHTML = "17/23";
  } else if (mysrc == "mm20.jpg"){
        document.images["pic"].src = "images/mm21.jpg";
        document.images["pic"].alt = "mm21";
        mysrc = "mm21.jpg";
        document.getElementById("srcnr").innerHTML = "18/23";
  } else if (mysrc == "mm21.jpg"){
        document.images["pic"].src = "images/mm22.jpg";
        document.images["pic"].alt = "mm22";
        mysrc = "mm22.jpg";
        document.getElementById("srcnr").innerHTML = "19/23";
  } else if (mysrc == "mm22.jpg"){
        document.images["pic"].src = "images/mm23.jpg";
        document.images["pic"].alt = "mm23";
        mysrc = "mm23.jpg";
        document.getElementById("srcnr").innerHTML = "20/23";
  } else if (mysrc == "mm23.jpg"){
        document.images["pic"].src = "images/mm24.jpg";
        document.images["pic"].alt = "mm24";
        mysrc = "mm24.jpg";
        document.getElementById("srcnr").innerHTML = "21/23";
  } else if (mysrc == "mm24.jpg"){
        document.images["pic"].src = "images/mm25.jpg";
        document.images["pic"].alt = "mm25";
        mysrc = "mm25.jpg";
        document.getElementById("srcnr").innerHTML = "22/23";
  } else if (mysrc == "mm25.jpg"){
        document.images["pic"].src = "images/mm26.jpg";
        document.images["pic"].alt = "mm26";
        mysrc = "mm26.jpg";
        document.getElementById("srcnr").innerHTML = "23/23";
  } else if (mysrc == "mm26.jpg"){
        document.images["pic"].src = "images/mm3.jpg";
        document.images["pic"].alt = "mm3";
        mysrc = "mm3.jpg";
        document.getElementById("srcnr").innerHTML = "1/23";
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