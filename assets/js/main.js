//ANIMATE BG BUSINESS
var bg = document.querySelector('.animation-bg');
let bgEasing = 'cubicBezier(1, 0.2, 0.2, 1)';
let bgDuration = 1500;
let animateBackground = (nextSlide, direction) => {
  if (nextSlide == 0) {
    anime({
      targets: bg,
      opacity: 1,
      duration: 0,
    });

    anime({
      targets: bg,
      rotate: 0,
      top: '100%',
      duration: bgDuration,
      easing: bgEasing,
    });
  }

  if (nextSlide == 1) {
    if (direction == 'down') {
      anime({
        targets: bg,
        duration: 0,
        rotate: 0,
        top: '100%',
        opacity: 1,
      });
      anime({
        targets: bg,
        rotate: 90,
        top: '80%',
        duration: bgDuration,
        easing: bgEasing,
        complete: function () {},
      });
    } else if (direction == 'up') {
      anime({
        targets: bg,
        rotate: -90,
        duration: bgDuration,
        easing: bgEasing,
        complete: function () {
          $('html, body').css('background-color', '#2041f8');
          anime({
            targets: bg,
            background: '#fff',
            rotate: 90,
            duration: 0,
          });
        },
      });
    }
  }

  if (nextSlide == 2) {
    if (direction == 'down') {
      $('html, body').css('background-color', '#fff');
      anime({
        targets: bg,
        rotate: -90,
        duration: 0,
        opacity: 1,
        background: '#2041F8',
      });
      anime({
        targets: bg,
        rotate: 90,
        width: '300%',
        duration: bgDuration,
        easing: bgEasing,
      });
    } else if (direction == 'up') {
      anime({
        targets: bg,
        width: '300%',
        duration: bgDuration,
        easing: bgEasing,
      });
    }
  }

  if (nextSlide == 3) {
    if (direction == 'up') {
      anime({
        targets: bg,
        opacity: 1,
        duration: 1,
        delay: 1000,
        width: '400%',
        background: '#2041F8',
        top: '80%',
        rotate: 90,
        complete: function () {
          $('html, body').css('background-color', '#fff');
        },
      });
    } else if (direction == 'down') {
      anime({
        targets: bg,
        rotate: 90,
        duration: 0,
        opacity: 1,
        background: '#2041F8',
      });

      anime({
        targets: bg,
        width: '400%',
        top: '80%',
        duration: bgDuration,
        easing: bgEasing,
      });
    }
  }
};

// FULLPAGE
new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true,
  scrollingSpeed: 1000,
  easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
  navigation: true,
  parallax: true,
  lazyLoading: true,
  onLeave: function (index, nextIndex, direction) {
    animateBackground(nextIndex.index, direction);
  },
});
