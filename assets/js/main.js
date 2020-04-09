// FULLPAGE
var navbar = document.getElementById('nav');

let fp1;
const FullPage = () => {
  fp1 = new fullpage('#fullpage', {
    scrollingSpeed: 1000,
    easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
    navigation: true,
    // responsiveWidth: 1000,
    onLeave: function (index, nextIndex, direction) {
      animateBackground(nextIndex.index, direction);
      shadowNavbar(nextIndex.index);
      exploreConfig(nextIndex.index);
    },
  });
};

let fp2;
const FullPage2 = () => {
  fp2 = new fullpage('#fullpage2', {
    scrollingSpeed: 1000,
    easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
    navigation: true,
    onLeave: function (index, nextIndex, direction) {
      animateBackground2(nextIndex.index, direction);
      shadowNavbar(nextIndex.index);
      exploreConfig2(nextIndex.index);
    },
  });
};

window.onload = function () {
  if (window.innerWidth > 1000) {
    FullPage();
    FullPage2();
  }
};

//BACK TO TOP
function backToTop() {
  fp1.moveTo(1, 0);
}

//MOVE ONE SLIDE DOWN
function moveSlideDown() {
  fp1.moveSectionDown();
}

//BACK TO TOP2
function backToTop2() {
  fp2.moveTo(1, 0);
}

//MOVE ONE SLIDE DOWN2
function moveSlideDown2() {
  fp2.moveSectionDown();
}

//SHADOW NAVBAR
function shadowNavbar(index) {
  if (index > 0) {
    nav.classList.add('section2active');
  } else {
    nav.classList.remove('section2active');
  }
}

//EXPLORE CONFIG BUSINESS
function exploreConfig(nextIndex) {
  if (nextIndex === 0) {
    document.querySelector('.exploreBtn').style.border = '1.5px solid black';
    document.querySelector('.exploreImg').src = './assets/img/next.svg';
    document.querySelector('.exploreText').style.opacity = 1;
  }
  if (nextIndex === 1 || nextIndex === 4) {
    document.querySelector('.exploreBtn').style.border = '1.5px solid white';
    document.querySelector('.exploreImg').src = './assets/img/next2.svg';
    document.querySelector('.exploreText').style.opacity = 0;
  }
  if (nextIndex === 2 || nextIndex === 3) {
    document.querySelector('.exploreBtn').style.border = '1.5px solid black';
    document.querySelector('.exploreImg').src = './assets/img/next.svg';
    document.querySelector('.exploreText').style.opacity = 0;
  }
  if (nextIndex === 5) {
    document.querySelector('.explore').style.display = 'none';
  } else {
    document.querySelector('.explore').style.display = 'block';
  }
}

//EXPLORE CONFIG2
function exploreConfig2(nextIndex) {
  if (nextIndex == 1) {
    document.querySelector('.contactexplore').style.display = 'none';
  } else {
    document.querySelector('.contactexplore').style.display = 'block';
  }
}

//ANIMATE BG BUSINESS
var bg = document.querySelector('.animation-bg');
let bgEasing = 'cubicBezier(1, 0.2, 0.2, 1)';
let bgDuration = 1000;
let animateBackground = (nextSlide, direction) => {
  if (nextSlide == 0) {
    anime({
      targets: bg,
      duration: 0,
      left: '50%',
    });
    anime({
      targets: bg,
      duration: bgDuration,
      easing: bgEasing,
      left: '100%',
    });
  }
  if (nextSlide == 1) {
    anime({
      targets: bg,
      duration: 0,
      left: '100%',
    });
    anime({
      targets: bg,
      duration: bgDuration,
      easing: bgEasing,
      left: '50%',
    });
  }
  if (nextSlide == 2) {
    if (direction == 'down') {
      anime({
        targets: bg,
        duration: 0,
        left: '50%',
      });
      anime({
        targets: bg,
        duration: bgDuration,
        easing: bgEasing,
        left: '100%',
      });
    }
    if (direction == 'up') {
      anime({
        targets: bg,
        duration: bgDuration,
        easing: bgEasing,
        left: '100%',
      });
    }
  }
  if (nextSlide == 3) {
    anime({
      targets: bg,
      duration: bgDuration,
      easing: bgEasing,
      left: 0,
      width: '50%',
    });
  }
  if (nextSlide == 4) {
    if (direction == 'down') {
      anime({
        targets: bg,
        duration: bgDuration,
        easing: bgEasing,
        left: 0,
        width: '100%',
      });
    }
    if (direction == 'up') {
      anime({
        targets: bg,
        duration: bgDuration,
        easing: bgEasing,
        top: 0,
      });
    }
  }
  if (nextSlide == 5) {
    anime({
      targets: bg,
      duration: bgDuration,
      easing: bgEasing,
      top: '65%',
    });
    if (window.innerWidth < 1300) {
      anime({
        targets: bg,
        duration: bgDuration,
        easing: bgEasing,
        top: '68%',
      });
    }
  }
};

//CONTACT ANIMATION BG
var contactbg = document.querySelector('.contact-animation-bg');
function animateBackground2(nextIndex) {
  if (nextIndex == 0) {
    anime({
      targets: contactbg,
      duration: bgDuration,
      easing: bgEasing,
      top: 0,
      right: '50%',
    });
  }
  if (nextIndex == 1) {
    anime({
      targets: contactbg,
      duration: bgDuration,
      easing: bgEasing,
      top: '65%',
      right: 0,
    });
  }
}
