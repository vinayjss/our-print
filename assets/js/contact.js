
$('#fullpage2').fullpage({
  scrollingSpeed: 1000,
  easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
  navigation: true,
  onLeave: function (index, nextIndex, direction) {
    animateBackground2(nextIndex.index, direction);
    shadowNavbar(nextIndex.index);
    exploreConfig2(nextIndex.index);
  },
})


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
      top: '100%',
      right: 0,
    });
    setTimeout(() => {
      Counter(counters[0], 2000, 50);
      Counter(counters[1], 50, 50);
      Counter(counters[2], 1, 100);
    }, 300);
  }
}

//EXPLORE CONFIG2
function exploreConfig2(nextIndex) {
  if (nextIndex == 2) {
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
  fullpage_api.moveSectionDown();
}

//BACK TO TOP2
function backToTop2() {
  fullpage_api.moveTo(1, 0);
}




// COUNTER
let counters = document.querySelectorAll('.counter');
function Counter(element, increment, speed) {
  let target = +element.getAttribute('data-target');
  let count = +element.innerHTML;
  if (count < target) {
    setInterval(() => {
      if (count < target) {
        count += increment;
        element.innerHTML = count;
      } else {
        clearInterval();
      }
    }, speed);
  }
}


window.onload = function () {
  if (window.innerWidth < 992) {
    fullpage_api.destroy('all');
  }
  setTimeout(() => {
    document.querySelector('.loader_container').style.display = "none"
  }, 2000);
}


//FORM SUBMISSION
let contactForm = document.getElementById('contact_form');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let description = document.getElementById('description');

contactForm.onsubmit = function (e) {
  e.preventDefault();
  axios
    .post('http://7t6.in:8383/api/contact_us/', {
      full_name: name.value,
      mobile: phone.value,
      email: email.value,
      details_of_enquiry: description.value,
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
          popup: 'animate__animated animate__fadeInUp',
        },
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};