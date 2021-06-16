$('tab').click((e) => {
    e.preventDefault();
    var target = $(e.target).data('target');
    $('#' + target).show();
});

$(document).ready(function () {
    $(".slider").owlCarousel({
        nav: false,
        loop: true,
        dotsEach: 3,
        dots: true,
        responsive: {
            1200: {
                items: 4,
            },
            768: {
                items: 2,

            },
            480: {
                items: 1,

            },
            0: {
                items: 1,
            }
        }
    });
});