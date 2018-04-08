$(document).ready(function () {
    $('#inpt').attr('disabled','disabled');
    $('#txt').scroll(function () {
        var height= $(this)[0].scrollHeight;
        var scrollHeight= height-$(this).innerHeight();
        var currHeight = $(this).scrollTop();
        if (scrollHeight==currHeight){
            $('#inpt').removeAttr('disabled');
        }
        $('#num').text(height +'  '+currHeight+'  '+scrollHeight);
    });
});