$(document).ready(function () {
    // all
    $('.portfolio__btn[filter="all"]').click(function () {
        $('.portfolio__btn').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.portfolio__btn').removeClass('focused');
        $(this).addClass('focused');
        $('.portfolio__images > div').show(100);
    });
    // web design
    $('.portfolio__btn[filter="wd"]').click(function () {
        if($(this).attr('val')==='off') {
            $('.portfolio__btn').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.portfolio__btn').removeClass('focused');
            $(this).addClass('focused');
            $('.portfolio__images > div').hide(100);
            $('.portfolio__images > div[filter="wd"]').show(100);
        }
    });
    // Ui/Ux design
    $('.portfolio__btn[filter="ud"]').click(function () {
        if($(this).attr('val')==='off') {
            $('.portfolio__btn').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.portfolio__btn').removeClass('focused');
            $(this).addClass('focused');
            $('.portfolio__images > div').hide(100);
            $('.portfolio__images > div[filter="ud"]').show(100);
        }
    });
    // Mockups
    $('.portfolio__btn[filter="moc"]').click(function () {
        if($(this).attr('val')==='off') {
            $('.portfolio__btn').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.portfolio__btn').removeClass('focused');
            $(this).addClass('focused');
            $('.portfolio__images > div').hide(300);
            $('.portfolio__images > div[filter="moc"]').show(300);
        }
    });
});
