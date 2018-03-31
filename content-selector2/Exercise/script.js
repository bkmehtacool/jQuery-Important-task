$(document).ready(function () {
    $('#find').keyup(function () {
        name= $(this).val();
        console.log(name);
        $('#name li').removeClass('highlighter');
        if (jQuery.trim(name)!=''){
            $("#name li:contains('"+name+"')").addClass('highlighter');
        }
    });
});