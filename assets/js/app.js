$('.change').on('click', function(e) {
     e.preventDefault;
    console.log('click');
    $('.change').removeClass('active');
    $(this).addClass('active');
   var selectCurrent=  $(this).data('id');
   console.log(selectCurrent);
    $('.info').css('display','none');
    $('div[data-info='+selectCurrent+']').css('display','inline-block');
});
