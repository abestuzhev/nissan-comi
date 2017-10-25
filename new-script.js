$(function(){
    $(".popup-learn-more input[type='checkbox']").on('change', function(){
        if($('#learn-more_personal-check').prop('checked')){
            $(".popup-learn-more .btn").removeAttr('disabled');
        }else {
            $(".popup-learn-more .btn").attr('disabled', 'disabled');
        }
    });

    $('.avn_pagelist_btn-more').on('click', function(e){
        e.preventDefault();
        $('.popup-learn-more').addClass('popup-show');
        $('.popup-bg').addClass('bg-show');
        $('body').css({
            'overflow':'hidden'
        });
        $('body').css({
            'padding-right':'16px'
        });
    });

    $('.popup-close, .popup-bg').on('click', function(e){
        e.preventDefault();
        $('.popup-learn-more').removeClass('popup-show');
        $('.popup-bg').removeClass('bg-show');
        $('body').css({
            'overflow':'auto'
        });
        $('body').css({
            'padding-right':'0'
        });
    });
});