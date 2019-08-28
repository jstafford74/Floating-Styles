//float js
$(document).ready(function () {

    $(":radio").click(function () {
        var input = $('input[name=color]:checked').attr('id');
        console.log(input);
        if (input == 'red') {
            $("section.left").css({
                background: "red"
            });
        }
        else if (input == 'blue') {
            $("section.left").css({
                background: "blue"
            });
        }
        else if (input == 'green') {
            $("section.left").css({
                background: "green"
            });
        }
        else {
            $("section.left").css({
                background: "white"
            });
        }
    });
});  

