const modalCall = $("[data-modal]");
modalCall.on("click", function(event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function() {
        $(modalId).find(".modal__dialog").css({
            transform: "scale(1)"
        });
    }, 200);
});

const modalClose = $("[data-close]");
modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
        transform: "scale(0)"
    });

    setTimeout(function() {
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    }, 200);
});

$(".modal").on("click", function(event) {
    let $this = $(this);

    $this.find(".modal__dialog").css({
        transform: "scale(0)"
    });

    setTimeout(function() {
        $this.removeClass('show');
        $("body").removeClass('no-scroll');
    }, 200);

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
});

/* Slider: https://kenwheeler.github.io/slick/
=====================*/

const worksSlider = $('[data-slider="slick"]');

worksSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
});

$(".slickPrev").on("click", function(event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickPrev");
});

$(".slickNext").on("click", function(event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickNext");
});
