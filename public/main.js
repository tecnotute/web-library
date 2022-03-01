// toggle top nav function

// function ToggleNav() {
//     var toggle = document.getElementById("TopNav");
//     if (toggle.className = ("un_responsive-navbar")) {
//         toggle.className = ("responsive-navbar")
//     } else {
//         toggle.className = ("un_responsive-navbar")
//     }
//     console.log("toggle nav function run successfully");
// };
document.getElementById("switchStyle").addEventListener('click', function() {
    var switchStyle = "JS switchstyle work perfectly"
    var TopNav = document.getElementById("TopNav");
    // If "un_responsive-nav" exist, overwrite it with "responsive-navbar"
    if (TopNav.className === "z-50 fixed w-screen top-0 un_responsive-navbar duration-500 ease-in-out") {
        TopNav.className = "z-50 responsive-navbar duration-500 ease-in-out fixed w-screen top-0";
    } else {
        TopNav.className = "z-50 fixed w-screen top-0 un_responsive-navbar duration-500 ease-in-out";
    }
    console.log(switchStyle);
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("TopNav").style.top = "0";
    } else {
        document.getElementById("TopNav").style.top = "-280px";
    }
    prevScrollpos = currentScrollPos;
}


// var NavToggle = document.getElementById('switchStyle')
// NavToggle.addEventListener('click', function() {
//     let Toggleclass = document.getElementById('TopNav').classList;
//     if (Toggleclass == 'un_responsive-navbar') {
//         Toggleclass.classList.remove('un_responsive-nav');
//         // localStorage.removeItem('theme')
//     } else {
//         NavToggle.classList.add('responsive-navbar');
//         // localStorage.theme = 'dark';
//     }
// });

// import 'tw-elements';

// $(function() {
//     $("#header").load("html/header.txt");
//     $("#footer").load("html/footer.txt");
//     $("#end-signature").load("html/end-signature.txt");
//     $("#sidebar").load("html/sidebar.html");
// });



// $({ Counter: 0 }).animate({
//     Counter: $('.AnimateNumber').text()
// }, {
//     duration: 1000,
//     easing: 'swing',
//     step: function() {
//         $('.AnimateNumber').text(Math.ceil(this.Counter));
//     }
// });


// not working                                                                   : )
// $('.AnimateNumber').each(function() {
//     jQuery({ Counter: 0 }).animate({ Counter: $(this).text() }, {
//         duration: 1000,
//         easing: 'swing',
//         step: function() {
//             $(this).text(Math.ceil(this.Counter));
//         }
//     });
// });



// owl carousel startup trying :)
// $('document').ready(function() {
//     $('#owl-demo').owlCarousel({
//         items: 1,
//         loop: true,
//         autoplay: true,
//         autoplayHoverPause: true,
//         animateOut: 'fadeOut',
//         animateIn: 'fadeIn',
//     });
// });
$('document').ready(function() {

    var work = $("#carousel-work");

    work.owlCarousel({
        items: 3, //10 items above 1000px browser width
        // itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        // itemsDesktopSmall: [900, 2], // between 900px and 601px
        // itemsTablet: [600, 1], //2 items between 600 and 0
        // itemsMobile: [300, 1], // itemsMobile disabled - inherit from itemsTablet option
        loop: true, // itemsMobile disabled - inherit from itemsTablet option
        autoplayHoverPause: true,
        autoplay: true,
        dots: true,
        nav: false,
        // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                // nav:true
            },
            300: {
                items: 1
            },
            // 400: {
            //     items: 4
            // },
            600: {
                items: 2
            },
            // 800: {
            //     items: 8,
            //     // nav:false
            // },
            1000: {
                items: 3,
                // nav:true,
                // loop:false
            }
        },
        // itemsText: [""],
    });
});
// $(document).ready(function() {

//     $("#owl-demo").owlCarousel();

// });
$('document').ready(function() {

    var links = $("#owl-links");

    links.owlCarousel({
        // items: 10, //10 items above 1000px browser width
        // itemsDesktop: [1024, 8], //5 items between 1000px and 901px
        // itemsDesktopSmall: [768, 8], // between 900px and 601px
        // itemsTablet: [428, 6], //2 items between 600 and 0
        // itemsMobile: [320, 4], // itemsMobile disabled - inherit from itemsTablet option
        loop: true, // itemsMobile disabled - inherit from itemsTablet option
        autoplayHoverPause: true,
        autoplay: true,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            300: {
                items: 2,
                nav: false
            },
            400: {
                items: 4,
                nav: false
            },
            600: {
                nav: false,
                items: 6,
            },
            800: {
                nav: false,
                items: 8,
                // nav:false
            },
            1000: {
                items: 10,
                nav: false,
                // nav:true,
                // loop:false
            }
        },
        // itemsText: [""],
    });
});
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// });

$('document').ready(function() {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // between 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        loop: true, // itemsMobile disabled - inherit from itemsTablet option
        autoplayHoverPause: true,
        autoplay: true,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });

    // Custom Navigation Events
    $('.next').click(function() {
        owl.trigger('owl.next');
    })
    $(".prev").click(function() {
        owl.trigger('owl.prev');
    })
    $(".play").click(function() {
        owl.trigger('owl.play', 2000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function() {
        owl.trigger('owl.stop');
    })

});


$(function() {
    $(".owl-carousel").owlCarousel();
});



// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
// } else {
//     document.documentElement.classList.remove('dark')
// }

// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')


document.getElementById('switchTheme').addEventListener('click', function() {
    let htmlClasses = document.querySelector('html').classList;
    if (localStorage.theme == 'dark') {
        htmlClasses.remove('dark');
        localStorage.removeItem('theme')
    } else {
        htmlClasses.add('dark');
        localStorage.theme = 'dark';
    }
});

document.getElementById("ToggleSvg").addEventListener("click", function() {
    var ToggleSvg = document.getElementById("ToggleSvg");
    var SwitchSvg = "JS switchSvg function running completely";
    if (ToggleSvg.className === "ToggleSvg fa fa-sun") {
        ToggleSvg.className = "ToggleSvg fa fa-moon";
    } else {
        ToggleSvg.className = "ToggleSvg fa fa-sun"
    }
    console.log(SwitchSvg);
});

document.getElementById("toggleSvg").addEventListener("click", function() {
    var toggleSvg = document.getElementById("toggleSvg");
    var switchSvg = "JS switchSvg function running completely";
    if (toggleSvg.className === "fa fa-sun") {
        toggleSvg.className = "fa fa-moon";
    } else {
        toggleSvg.className = "fa fa-sun"
    }
    console.log(switchSvg);
});

Window.onload
if (document.querySelector("html").className = "dark") {
    document.getElementById("ToggleSvg").className = "fa fa-moon";
    document.getElementById("toggleSvg").className = "fa fa-moon"
} else {
    document.getElementById("ToggleSvg").className = "fa fa-sun";
    document.getElementById("toggleSvg").className = "fa fa-sun"
}

document.getElementById("ToggleBars").addEventListener("click", function() {
    var ToggleBars = document.getElementById("ToggleBars");
    var SwitchBars = "JS switchbars function running completely";
    if (ToggleBars.className === "fa fa-bars") {
        ToggleBars.className = "fa fa-cross";
    } else {
        ToggleBars.className = "fa fa-bars"
    }
    console.log(SwitchBars);
});


if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.add('dark')
} else if (localStorage.theme === 'dark') {
    document.querySelector('html').classList.add('dark')
};


$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(function() {
    $("#CodeOutput").resizable({
        animate: true,
        // grid: 50,
        containment: '#codeSection',
        // minHeight: 150,
        // maxHeight: 900,
        maxWidth: 1600,
        minWidth: 200,
    });
});

var CodeSection = document.getElementById("CodeSection");
var CodeOutput = document.getElementById("CodeOutput");

// CodeSection.style.minWidth = '--webkit-fill-available'
// CodeSection.style.minWidth = '--webkit-fill-available'
CodeOutput.style.minHeight = 'max-content'
CodeOutput.style.maxHeight = 'max-content'