$(':text').focusin(function () {
    $(this).css('background-color','gray');
}).blur(function () {
    $(this).css('background-color','#fff');
});
