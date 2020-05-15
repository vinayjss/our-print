// WINDOW LOGIC
window.onresize = function () {
  if (window.innerWidth < 1000) {
    $.fn.fullpage.destroy('all');
  }
};
anime({
  targets: '.section1_col_left h1',
  duration: 1000,
  easing: 'easeInOutCubic',
  opacity: [0, 1],
  translateY: [20, 0]
});

anime({
  targets: '.section1_col_left p',
  duration: 1000,
  easing: 'linear',
  opacity: [0, 1],
  translateY: [20, 0],
  delay: 500,
});

anime({
  targets: '.section1_col_left .apps',
  duration: 1000,
  easing: 'linear',
  opacity: [0, 1],
  translateY: [20, 0],
  delay: 1000,
});
anime({
  targets: '.section1_col_right img',
  duration: 1000,
  easing: 'linear',
  opacity: [0, 1],
  translateY: [20, 0],
  delay: 1400,
});


// FULLPAGE
var navbar = document.getElementById('nav');
let fp1;
const FullPage = () => {
  fp1 = new fullpage('#fullpage', {
    scrollingSpeed: 1000,
    easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
    navigation: true,
    // responsiveWidth: 1000,
    onLeave: function (origin, nextIndex, direction) {
      animateBackground(origin.index, nextIndex.index, direction);
      shadowNavbar(nextIndex.index);
      exploreConfig(nextIndex.index);
      if (direction == 'down') {
        $('.section').removeClass('animated');
        $($('.section').get(nextIndex.index)).addClass('animated');
      }
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

FullPage();
FullPage2();



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
    document.querySelector('.exploreBtn').style.border = '1.5px solid white';
    document.querySelector('.exploreImg').src = './assets/img/next2.svg';
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




//ANIMATION LOGIC
var bg = document.querySelector('.animation-bg');
let bubbles = document.querySelectorAll('.photo-wrapper img');
let bgEasing = 'cubicBezier(1, 0.2, 0.2, 1)';
let bgDuration = 1000;
let animateBackground = (origin, nextSlide, direction) => {
  if (nextSlide == 0) {
    anime({
      targets: bg,
      duration: bgDuration,
      easing: bgEasing,
      left: 0,
      width: '100%',
    });
    if (origin == 5) {
      anime({
        targets: bg,
        duration: bgDuration,
        easing: bgEasing,
        left: 0,
        top: 0,
      });
    }
  }
  if (nextSlide == 1) {
    anime({
      targets: bg,
      duration: bgDuration,
      easing: bgEasing,
      left: '50%',
      top: 0,
    });
    if (direction == "down") {
      anime({
        targets: '.feature_container1',
        duration: 1000,
        easing: 'linear',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 400,
      });
      anime({
        targets: '.feature_container2',
        duration: 1000,
        easing: 'linear',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 800,
      });
      anime({
        targets: '.feature_container3',
        duration: 1000,
        easing: 'linear',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 1200,
      });
      anime({
        targets: '.section2_col_right img',
        duration: 1000,
        easing: 'linear',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 1600,
      });
    }
  }
  if (nextSlide == 2) {
    if (direction == 'down') {
      anime({
        targets: bg,
        duration: bgDuration,
        easing: bgEasing,
        left: '100%',
      });
      anime({
        targets: '#process1',
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeInOutCubic',
        delay: 500
      });
      anime({
        targets: '#process2',
        translateX: [-250, 0],
        duration: 2000,
        opacity: [0.2, 1],
        easing: 'easeInOutCubic',
        delay: 500
      });
      anime({
        targets: '#process2 p',
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeInOutCubic',
        delay: 500
      });
      anime({
        targets: '#process3',
        translateX: [-250, 0],
        opacity: [0.2, 1],
        duration: 2000,
        easing: 'easeInOutCubic',
        delay: 1000
      });
      anime({
        targets: '#process3 p',
        opacity: [0, 1],
        duration: 3000,
        easing: 'easeInOutCubic',
        delay: 1000
      });
    }
    if (direction == 'up') {
      anime({
        targets: bg,
        duration: bgDuration,
        easing: bgEasing,
        left: '100%',
        width: '100%',
        top: 0,
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
      top: 0,
    });
    if (direction == "down") {
      anime({
        targets: '.mob_version h1',
        duration: 1000,
        easing: 'linear',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(300),
      });
    }
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
      anime({
        targets: '.users .user',
        duration: 1500,
        easing: bgEasing,
        opacity: [0, 1],
        delay: anime.stagger(500),
      });
      anime({
        targets: '.testimonial_content h2',
        duration: 1000,
        easing: 'linear',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 800,
      });
      anime({
        targets: '.testimonial_content p',
        duration: 1000,
        easing: 'linear',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 1200,
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
      top: '62%',
      left: 0,
      width: '100%',
    });

    setTimeout(() => {
      Counter(counters[0], 200, 50)
      Counter(counters[1], 50, 50)
      Counter(counters[2], 1, 100)
    }, 300);
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

// COUNTER
let counters = document.querySelectorAll('.counter');
function Counter(element, increment, speed) {
  let target = +element.getAttribute('data-target');
  let count = +element.innerHTML;
  if (count < target) {
    setInterval(() => {
      if (count < target) {
        count += increment
        element.innerHTML = count
      }
      else {
        clearInterval()
      }
    }, speed);
  }
}



//FORM SUBMISSION
let contactForm = document.getElementById('contact_form');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let description = document.getElementById('description');

contactForm.onsubmit = function (e) {
  e.preventDefault()
  axios.post('http://7t6.in:8383/api/contact_us/', {
    full_name: name.value,
    mobile: phone.value,
    email: email.value,
    details_of_enquiry: description.value
  })
    .then(function (response) {
      console.log(response.data);
      Swal.fire({
        title: 'Submitted',
        text: 'Thank you contacting us. We will get back to you.',
        icon: 'success',
        confirmButtonText: 'Ok',
        timer: 4000,
        showClass: {
          popup: 'animate__animated animate__fadeInUp'
        },
      })
    })
    .catch(function (error) {
      console.log(error);
    })
}
