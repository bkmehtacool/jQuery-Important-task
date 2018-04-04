// $(document).ready(function () {
//     $('#file').change(function () {
//         $('#submit').removeAttr('disabled');
//     });
// });

//           second method
// --------------------------------------


$(document).ready(function () {
    $('input[type="file"]').change(function () {
        $(this).next().removeAttr('disabled');
    }).next().attr('disabled','disabled');
});