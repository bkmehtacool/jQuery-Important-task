$(':text').focusin(function () {
    $(this).css('background-color','gray');
}).blur(function () {
    $(this).css('background-color','#fff');
});

$(':submit').click(function () {
    $(this).attr('value','please Wait...');
});
