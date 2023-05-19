
// var list = document.querySelectorAll(".list a")

// function activeLInk() {
//   list.forEach((item) => 
//   item.classList.remove("active"))

//   this.classList.add("active")
// }

// list.forEach((item) => 
// item.addEventListener("click", activeLInk))


var cursor = document.querySelector(".cursor")
    cursorScale = document.querySelectorAll(".cursor-scale")

    mouseX = 0
    mouseY = 0

  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      })
    }
  })
  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX,
    mouseY = e.clientY
  })
  cursorScale.forEach(link => {
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow")
      cursor.classList.remove("grow-small")
    })
    link.addEventListener("mousemove", () => {
      cursor.classList.add("grow")
      if(link.classList.contains("smaLL")){
        cursor.classList.remove("grow")
        cursor.classList.add("grow-small")
      }
      // else{
      //   cursor.classList.remove("grow-small")
      //   cursor.classList.add("grow")
      // }
    })
    // cursor.classList.remove("grow-small")
  })


var typed = new Typed('.heading', {
    strings: ['Md Imran Hossen', 'A Freelacher', 'A Designer'],
    smartBackspace: true,
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
  });


  VanillaTilt.init(document.querySelectorAll(".about-img"), {
    max: 20,
    speed: 400,
    glare: true,
    "max-glare": 0.2, 
  });




// Get all the sections in the document
const sections = document.querySelectorAll('.experience-main');

// Add an event listener to the window object to detect when the user scrolls
window.addEventListener('scroll', () => {
  // Loop through each section and check if it's in view
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    // If the section is in view, add the active class to its animation element
    if (isVisible) {
      const circle0 = section.querySelectorAll('circle')[0];
      const circle1 = section.querySelectorAll('circle')[1];
      const circle2 = section.querySelectorAll('circle')[2];
      const circle3 = section.querySelectorAll('circle')[3];
      const circle4 = section.querySelectorAll('circle')[4];
      circle0.classList.add('active');
      circle1.classList.add('active');
      circle2.classList.add('active');
      circle3.classList.add('active');
      circle4.classList.add('active');
    }
  });
});




// animation
const obsever = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    }
    else {
      entry.target.classList.remove("show")
    }
  })
})

const hiddenEliments = document.querySelectorAll(".hidden")
hiddenEliments.forEach((el) => obsever.observe(el))

const hiddenBlur = document.querySelectorAll(".hidden-blur")
hiddenBlur.forEach((el) => obsever.observe(el))

const sliderRight = document.querySelectorAll(".slider-right")
sliderRight.forEach((el) => obsever.observe(el))

const sliderLeft = document.querySelectorAll(".slider-left")
sliderLeft.forEach((el) => obsever.observe(el))

const latterSpacing = document.querySelectorAll(".letter-spacing")
latterSpacing.forEach((el) => obsever.observe(el))

const scale = document.querySelectorAll(".scale")
scale.forEach((el) => obsever.observe(el))

const toP = document.querySelectorAll(".top")
toP.forEach((el) => obsever.observe(el))

const scaleX = document.querySelectorAll(".scaleX")
scaleX.forEach((el) => obsever.observe(el))





// let card1 = document.querySelector(".s-card-1")
// let icon = document.querySelector(".s-card-1 i")

// let t1 = gsap.timeline({paused: true, reversed: true})

// card1.addEventListener("click", (e) => {
//   event.stopPropagation()
//   t1.play()
// })
// icon.addEventListener("click", (e) => {
//   event.stopPropagation()
//   t1.reverse()
// })

// t1.to(
//   ".s-card-1",{
//     ease:Power1.easeInOut,
//     width: 250,
//     height: 450,
//     top: 0,
//     left: 0,
//     margin: 0,
//     duration: 1,
//   }
// )

// t1.to(
//   ".s-card-1 h4",{
//     ease:Power1.easeInOut,
//     margin: "50px",
//     y: 100,
//   },
//   0.1
// )
// t1.to(
//   ".s-card-1 p",{
//     ease:Power1.easeInOut,
//     margin: "10px",
//     y: -500,
//     duration: 0.5,
//     // padding: 24,
//     // marginLeft: 8,
//     width: 200,
//   },
//   0.1
// )

// t1.to(
//   ".s-card-1 i",{
//     ease:Power1.easeInOut,
//     margin: "10px",
    
//     // padding: 24,
//     // marginLeft: 8,
//   },
//   0.1
// )


$('.testimonial-text-box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.testimonial-slider'
});
$('.testimonial-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  asNavFor: '.testimonial-text-box',
  centerMode: true,
  centerPadding: '20px',
});



VanillaTilt.init(document.querySelectorAll(".nav-main ul"), {
  max: 20,
  speed: 400,
  glare: true,
  "max-glare": 0.2, 
});


VanillaTilt.init(document.querySelectorAll(".experience-items"), {
  max: 20,
  speed: 400,
  glare: true,
  "max-glare": 0.2, 
});



VanillaTilt.init(document.querySelectorAll(".offer-over"), {
  max: 20,
  speed: 400,
  glare: true,
  "max-glare": 0.2, 
});



VanillaTilt.init(document.querySelectorAll(".design-sub-main"), {
  max: 20,
  speed: 400,
  glare: true,
  "max-glare": 0.2, 
});


VanillaTilt.init(document.querySelectorAll(".form-input"), {
  max: 20,
  speed: 400,
  glare: true,
  "max-glare": 0.2, 
});



  VanillaTilt.init(document.querySelectorAll(".talk-icon"), {
    max: 20,
    speed: 400,
    glare: true,
    "max-glare": 0.2, 
  });



  VanillaTilt.init(document.querySelectorAll(".form-main form button"), {
    max: 20,
    speed: 400,
    glare: true,
    "max-glare": 0.2, 
  });



  VanillaTilt.init(document.querySelectorAll(".testimonial-display"), {
    max: 20,
    speed: 400,
    glare: true,
    "max-glare": 0.2, 
  });



const scrollBtn = document.querySelector(".scroll-btn-main")
scrollBtn.addEventListener('click', () => {
  window.scrollBy(0, 500);
});



$(window).scroll(function(){
  var scrolling = $(this).scrollTop()

  if(scrolling > 40){
    $(".scroll-top").fadeIn(500)
  }
  else{
    $(".scroll-top").fadeOut(500)
  }
})

$(".scroll-top").click(function(){
  $('body, html').animate({
    scrollTop: 0
  })
})