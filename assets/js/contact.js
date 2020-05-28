let fp2 = new fullpage('#fullpage2', {
  scrollingSpeed: 1000,
  easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
  navigation: true,
  onLeave: function (index, nextIndex, direction) {
    animateBackground2(nextIndex.index, direction);
    shadowNavbar(nextIndex.index);
    exploreConfig2(nextIndex.index);
  },
});

//CONTACT ANIMATION BG
var contactbg = document.querySelector('.contact-animation-bg');
let bgEasing = 'cubicBezier(1, 0.2, 0.2, 1)';
let bgDuration = 1000;
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

//EXPLORE CONFIG2
function exploreConfig2(nextIndex) {
  if (nextIndex == 1) {
    document.querySelector('.contactexplore').style.display = 'none';
  } else {
    document.querySelector('.contactexplore').style.display = 'block';
  }
}


//SHADOW NAVBAR
function shadowNavbar(index) {
  if (index > 0) {
    nav.classList.add('section2active');
  } else {
    nav.classList.remove('section2active');
  }
}

//MOVE ONE SLIDE DOWN2
function moveSlideDown2() {
  fp2.moveSectionDown();
}

//BACK TO TOP2
function backToTop2() {
  fp2.moveTo(1, 0);
}