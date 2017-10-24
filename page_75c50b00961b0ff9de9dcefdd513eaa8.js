
; /* Start:"a:4:{s:4:"full";s:76:"/local/components/leeft/old-cars/templates/.default/script.js?14912908543659";s:6:"source";s:61:"/local/components/leeft/old-cars/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var sort = "PROPERTY_FILTER_PRICE";
var sortType = "ASC";
$(document).ready(function(){
    $(document).on('change', '.filterfull_wrapper input[type="checkbox"]', function () {
        UpdateCarsList();
    });
    //
    // setTimeout(function(){
    //     if($('.js_rangeslider').length > 0){
    //         $('.js_rangeslider').each(function(){
    //             var slider = $(this).data('ionRangeSlider');
    //             slider.options.onFinish = function(){
    //                 UpdateCarsList();
    //             }
    //         });
    //     }
    //
    // }, 50);

    /*$(".sort_list li .sort_item").click(function(){
        $(this).click(function(){
            var _this = $(this).parent();
            var name = _this.find("input").attr("name");
            var val = _this.find("input").attr("value");

            console.log(name+"/"+val);
        });
        return false;
    });*/

    $(document).on('click', '#used-cars-sort-list li.list_item a', function(){
        if($(this).hasClass('active')){
            if($(this).hasClass('up')){
                $('#used-cars-sort-list li.list_item a').removeClass('active').removeClass('up').removeClass('down').removeClass('hasicon');
                $(this).addClass('active').removeClass('up').addClass('hasicon').addClass('down');
                $(this).next().val('DESC');
                UpdateCarsList();
            }else{
                $('#used-cars-sort-list li.list_item a').removeClass('active').removeClass('up').removeClass('down').removeClass('hasicon');
                $(this).addClass('active').removeClass('down').addClass('hasicon').addClass('up');
                $(this).next().val('ASC');
                UpdateCarsList();
            }
        }else{
            $('#used-cars-sort-list li.list_item a').removeClass('active').removeClass('up').removeClass('down').removeClass('hasicon');
            $(this).addClass('active').addClass('hasicon').addClass('up');
            $(this).next().val('ASC');
            UpdateCarsList();
        }
        return false;
    });

    $(document).on('click', '.js_clear_filter', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.filterfull_wrapper input[type="checkbox"]').each(function(){
            if($(this).parent().hasClass('checked')) {
                $(this).prop('checked', false);
                $(this).parent().removeClass('checked');
            }
        });
        if($('.js_rangeslider').length > 0){
            $('.js_rangeslider').each(function(){
                var slider = $(this).data('ionRangeSlider');
                slider.update({
                    from: slider.result.min,
                    to: slider.result.max
                })
            });
        }
        UpdateCarsList();
    });
});

function UpdateCarsList()
{
    var strOrder = 'SORT[' + $('#used-cars-sort-list li.list_item a.active').next().attr('name') + ']';
    var strBy = $('#used-cars-sort-list li.list_item a.active').next().val();
    $('.filterfull_wrapper, #used-cars-sort-list .sort_list').addClass('has_preloader').append('<div class="preloader_item"></div>').spin('small');
    $.ajax({
        type: "POST",
        url: "",
        data: $(".carsAvtoFilter").serialize()+ '&' + strOrder + '=' + strBy,
        success: function(html) {
            $('.filterfull_wrapper, #used-cars-sort-list .sort_list').removeClass('has_preloader').spin(false);
            $('div.preloader_item').remove();

            $(".ajaxLoaderContent").html(html);

            $('.js_slick').not('.slick-initialized').slick({
                easing: 'easeOutQuart',
                arrows: true,
                dots: false,
                infinite: true,
                touchThreshold: 7,
                speed: 750,
                autoplay: false,
                swipeToSlide: true,
                adaptiveHeight: true
            });
        }
    });
}
/* End */
;; /* /local/components/leeft/old-cars/templates/.default/script.js?14912908543659*/