const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.b-right');
const prevButton = document.querySelector('.b-left');
const dotNav = document.querySelector('.carousel-nav');
const dots = document.querySelectorAll('.carousel-indicator');
var slideNumber = 0;
var currentSlide = track.querySelector('.current-slide');

var slideWidth = slides[0].getBoundingClientRect().width;

var slideTransitionTime = slides[0].style.transition;
slides.forEach(e =>{
    $(e).css('transition', 'none');
});

function moveSlide(){
    slideWidth = slides[0].getBoundingClientRect().width;
    var pxToMove =  slideNumber * (slideWidth * -1);

    slides.forEach(e =>{
        $(e).css('left', pxToMove + 'px');
        pxToMove += slideWidth;
    })

    dots.forEach(i =>{
        $(i).removeClass('active-slide');
    })

    $(dots[slideNumber]).addClass('active-slide');
}

$(nextButton).click(()=>{
    if(slideNumber + 1 < slides.length){
        slideNumber++;
    }
    else{
        slideNumber = 0;
    }
    moveSlide();
})

$(prevButton).click(() =>{
    if(slideNumber > 0){
        slideNumber--;
    }
    else{
        slideNumber = slides.length - 1;
    }
    moveSlide();
})

$(dotNav).mousedown((e)=>{
    if(e.target != dotNav){
        let target = e.target;
    let x = 0;
    for(let i = 0; i < dots.length; i++){
        if(dots[i] == target){
            slideNumber = i;
        }
    }
    moveSlide();
    }
})

$(window).resize( moveSlide);

moveSlide();

setTimeout(() => {
    slides.forEach(e =>{
        $(e).css('transition', slideTransitionTime)
    });
}, 100)
