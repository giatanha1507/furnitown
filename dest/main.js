//show menu header
$(document).on("scroll", function () {
    let heightSrollTop = $(".scroll-top").height();
    let heightMenuMain = $(".menu-main").height();
    let scrollY = $(window).scrollTop();
    if (scrollY > heightSrollTop / 2 + heightMenuMain / 2) {
        $("nav.menu").addClass("active");
    } else {
        $("nav.menu").removeClass("active");
    }
    closeMenu();
});
$(".back-to-top span").on("click", function () {
    $(window).scrollTop({
        top: 0,
    });
});

//menu-toggle
let btnMenu = $(".menu-main"),
    nav = $(".menu-toggle"),
    closeBtn = $(
        ".menu-toggle .menu-toggle__body .menu-toggle__body-left .close"
    ),
    overlay = $(".overlay"),
    main = $("main");
function closeMenu() {
    nav.removeClass("active");
    overlay.removeClass("active");
    main.removeClass("active");
    btnMenu.removeClass("active");
}
nav.click(function (e) {
    e.stopPropagation();
});
closeBtn.on("click", function (e) {
    e.preventDefault();
    closeMenu();
});
$(document).click(function (e) {
    e.stopPropagation();
    closeMenu();
});
btnMenu.click(function (e) {
    e.stopPropagation();
    nav.toggleClass("active");
    overlay.toggleClass("active");
    main.toggleClass("active");
    btnMenu.toggleClass("active");
});

$(window).resize(function () {
    closeMenu();
});

let itemMenu = $(".menu-toggle .menu-toggle__body-right ul li a");
itemMenu.hover(
    function () {
        $(this).parent().siblings().find("a").addClass("op");
    },
    function () {
        itemMenu.removeClass("op");
    }
);

$(".menu-mb .menu-mb__header .btn-menu .hamburger-menu").click(function () {
    $(this).toggleClass("clicked");
    $(".menu-mb .menu-mb__body").toggleClass("active");
});

let $carousel = $(".billboard .billboard__wrap");
$carousel.flickity({
    //options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    preveNextButtons: false,
    on: {
        ready: function () {
            let dotted = $(".flickity-page-dots");
            paging = $(".slider__bottom .paging .paging__dotted");
            dotted.appendTo(paging);
        },
        change: function (index) {
            {
                let number = $(".slider__bottom .paging__number");
                let indexPage = index + 1;
                number.text(indexPage.toString().padStart(2, 0));
            }
        },
    },
});

//previous
$(".controls .--prev").on("click", function () {
    $carousel.flickity("previous");
});

//next
$(".controls .--next").on("click", function () {
    $carousel.flickity("next");
});
