$(document).ready(function () {
    // all
    $('.portfolio__btn[filter="all"]').click(function () {
        $('.portfolio__btn').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.portfolio__images > div').show(300);
    });
    // web design
    $('.portfolio__btn[filter="wd"]').click(function () {
        if($(this).attr('val')==='off') {
            $('.portfolio__btn').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.portfolio__images > div').hide(300);
            $('.portfolio__images > div[filter="wd"]').show(300);
        }
    });
    // Ui/Ux design
    $('.portfolio__btn[filter="ud"]').click(function () {
        if($(this).attr('val')==='off') {
            $('.portfolio__btn').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.portfolio__images > div').hide(300);
            $('.portfolio__images > div[filter="ud"]').show(300);
        }
    });
    // Mockups
    $('.portfolio__btn[filter="moc"]').click(function () {
        if($(this).attr('val')==='off') {
            $('.portfolio__btn').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.portfolio__images > div').hide(300);
            $('.portfolio__images > div[filter="moc"]').show(300);
        }
    });
});
