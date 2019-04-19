
 $('.curn').each(function () {
     var item = $(this).text();

     var num = Number(item).toLocaleString('en');    

     if (Number(item) < 0) {
         num = num.replace('-','');
         $(this).addClass('negMoney');
     }else{
         $(this).addClass('enMoney');
     }
     
     $(this).text(num);
 });


$('#foroshviZhebtn').click(function () {


    $('#daste2').hide()
    $('#pishnahadvizhe').hide()
    $('#foroshviZhe').fadeIn(400)


    $('.menu div').removeClass('active1');
    $('#foroshviZhebtn').addClass('active1');
    // sliderTime()
});
$('#daste2btn').click(function () {
    $('#daste2').fadeIn();
    $('#pishnahadvizhe').hide();
    $('#foroshviZhe').hide();

    $('.menu div').removeClass('active1');
    $('#daste2btn').addClass('active1')
    // sliderTime()
})
$('#pishnahadvizhebtn').click(function () {
    $('#pishnahadvizhe').fadeIn()
    $('#daste2').hide()
    $('#foroshviZhe').hide()


    $('.menu div').removeClass('active1');
    $('#pishnahadvizhebtn').addClass('active1')
    // sliderTime();

})
$('.vorod').click(function () {
    $('.modal-body2').hide();
    $('.modal-body1').fadeIn();
    $(this).find('p').addClass('border');
    $('.sabtenam p').removeClass('border')


})
$('.sabtenam').click(function () {
    $('.modal-body1').hide();
    $('.modal-body2').fadeIn();
    $(this).find('p').addClass('border');
    $('.vorod p').removeClass('border');
})
// function sliderTime() {
//     setInterval(function () {
//         setTimeout(function () {
//             $('#foroshviZhebtn').click()
//         }, 20000)
//         setTimeout(function () {
//             $('#daste2btn').click()
//         }, 40000)
//         setTimeout(function () {
//             $('#pishnahadvizhebtn').click()
//         }, 60000)
//     }, 60000)
// }
// sliderTime()


$(document).ready(function () {
    $('.owl-carousel1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});
$(document).ready(function () {
    $('.owl-carousel2').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout:4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});
$(document).ready(function () {
    $('.owl-carousel3').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})
$(document).ready(function () {
    $('.owl-carousel4').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    })
});
$(document).ready(function () {
    $('.owl-carousel5').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    })
});
$(document).ready(function () {
    $('.owl-carousel6').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    })
});
$(document).ready(function () {
    $('.owl-carousel7').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

});
new WOW().init();
// $(document).ready(function () {
//
//
//     $(window).scroll(function () {
//
//         if ($(this).scrollTop() > 2) {
//             $('.logo').addClass('logo2');
//
//         } else {
//             $('.logo').removeClass('logo2');
//
//
//         }
//     })
// })


$(document).ready(function () {

    $("a").on('click', function (event) {


        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});
$('.doen').click(function () {
    if ($(window).scrollTop() < 1600) {
        $('html,body').animate({
            scrollTop: $(window).scrollTop() + 700
        }, 3000);
    }

});
$('.top').click(function () {
    if ($(window).scrollTop() > 0) {
        $('html,body').animate({
            scrollTop: $(window).scrollTop() - 700
        }, 3000);
    }

});
$(document).ready(function () {
    setTimeout(function () {
        $('.loding').slideUp('slow');
        $('.body').slideDown('slow');
    }, 1000)

});
// ;
$('.dashbord-buton button').click(function () {
    var dashbord = $('.dashbord-buton button');
    // console.log(this.parentNode.childNodes.length);
    for (i = 0; i < this.parentNode.childNodes.length; i++) {
  //      console.log(i)  
        var bb=i%2;
        if (bb!=0) {

            if (this.parentNode.childNodes[i] === this) {
                switch (i) {
                    case 1:
                        y = 0;
                        break;
                    case 3:
                        y = 1;
                        break;
                    case 5:
                        y = 2;
                        break;
                    case 7:
                        y = 3;
                        break;
                    case 9:
                        y = 4;
                        break;
                    case 11:
                        y = 5;
                        break;
                    case 13:
                        y = 6;
                        break;
                    case 15:
                        y = 7;
                        break;
                    case 17:
                        y = 8;
                        break;
                    case 19:
                        y = 9;
                        break;
                    case 21:
                        y = 10;
                        break;
                    case 23:
                        y = 11;
                        break;
                    case 25:
                        y = 12;
                        break;
                     


                }
                var b = $('.shudhiiden');
                $(b).hide();

                $(b[y]).fadeIn('slow');
            } else {
                var a = this.parentNode.childNodes[i]
                $(a).removeClass('active');
                $(this).addClass('active');

            }
        }
    }
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

