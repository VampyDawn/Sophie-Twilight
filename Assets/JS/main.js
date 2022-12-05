const aniShows = document.querySelectorAll('.aniShow');
const header = document.getElementById('header');
const progress = document.getElementById('progress');
const home = document.getElementById('home');
const hobbies = document.getElementById('hobbies');
const personality = document.getElementById('personality');
const age = document.getElementById('age');
const hobbiesList = document.querySelectorAll('.hobby');


window.onload = () => {
    var diff_ms = Date.now() - new Date(2000, 1, 1).getTime();
    var age_dt = new Date(diff_ms);
    var fullAge = Math.abs(age_dt.getUTCFullYear() - 1970);
    age.textContent = fullAge;
}

$('.owl-carousel').owlCarousel({
    loop: true,
    progress: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 15000,
    autoHeight: true,
    items: 1,
    margin:0,
    singleItem:true,
    stagePadding: 0
});

const showOpt = {
    threshold: 0.3,
    rootMargin: "0px 0px -10px 0px"
};


const showOnScroll = new IntersectionObserver(function(entries, showOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('show');
            showOnScroll.unobserve(entry.target);
        }
    })
},
showOpt);

aniShows.forEach(elm => {
    showOnScroll.observe(elm);
});

window.addEventListener('scroll', () => {
  if(window.pageYOffset <= 300) {
    progress.classList.remove("noShadow");
  } else if (window.pageYOffset >= 300) {
    progress.classList.add("noShadow");
  } 
})

var bannerHeight = header.offsetHeight;
var aboutHeight = home.offsetHeight;
var hobbiesHeight = hobbies.offsetHeight;
var personalityHeight = personality.offsetHeight;

window.onscroll = () => { updateProgress(); }

function updateProgress() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = ((scrollTop) / (docHeight - winHeight))*100;
    progress.style.background = "linear-gradient(to right, #977FD7 " + scrollPercent + "%, #F5A9CB 0%)";
}

hobbiesList.forEach(hobby => {
    hobby.addEventListener('click', (hobby) => {
        var text = hobby.target.querySelector('.hobby-info_text');
        var showTxt = hobby.target.querySelector('.hobby-info_more');
        if(!text.classList.contains('show-more')) {
            text.classList.add('show-more');
            showTxt.classList.add('show-more');
        } else {
            text.classList.remove('show-more');
            showTxt.classList.remove('show-more');
        }
    })
})