jQuery(document).ready(function() {

    $("#plus").click(function() {
        var currentVal = parseInt($('input[name=quantity]').val());
        if (currentVal < 25) {
            $('input[name=quantity]').val(currentVal + 1);
        } else {
            $('input[name=quantity]').val(25);
        }
    });

    $("#minus").click(function() {
        var currentVal = parseInt($('input[name=quantity]').val());
        if (currentVal > 15) {
            $('input[name=quantity]').val(currentVal - 1);
        } else {
            $('input[name=quantity]').val(15);
        }
    });
});
