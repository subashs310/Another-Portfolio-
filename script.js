$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [" Web Developer " ],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["👋 Hi, I’m Subash"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    
    });



// Get the submit button
const submitBtn = document.getElementById('submitBtn');

// Get the small photos container
const smallPhotosContainer = document.getElementById('smallPhotosContainer');

// Add click event listener to the submit button
submitBtn.addEventListener('click', function() {
    // Toggle the visibility of the small photos container
    smallPhotosContainer.style.display = smallPhotosContainer.style.display === 'none' ? 'block' : 'none';
    
   
    // smallPhotosContainer.style.top = '50%';
    // smallPhotosContainer.style.left = '50%';
    // smallPhotosContainer.style.transform = 'translate(-50%, -50%)';
    
    // Return the container after a few seconds
    setTimeout(function() {
        smallPhotosContainer.style.display = 'none';
    }, 1000); 
});


});
