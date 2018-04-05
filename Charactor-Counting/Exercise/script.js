$(document).ready(function () {
    var maxLength=55;
    $('#txt').keyup(function () {
        var textLength= $('#txt').val().length;
        // console.log(textLength);
        $('#pt').html((maxLength-textLength)+'  Text Remaining ');
    })
})