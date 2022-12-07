$(document).ready(function() {
    // --- our code goes here ---
    $('textarea').on('input', function (event) {
        $('.error').hide();

        //Decrements the counter on input
        const counter = $(this).closest('form').find('.counter')[0];

        counter.value = 140 - this.value.length;

        //if counter exceeds character limit change the color to red
        counter.value < 0 ? $(counter).css("color", "red") : $(counter).css("color", "#545149");
    })
});