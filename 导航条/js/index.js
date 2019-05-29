$(function(){
    $('.one ul li').hover(function () {
           if(!$(this).hasClass('active')){
               $('.active').removeClass('active');
               $(this).addClass('active');
           }
            
        }, function () {
            $(this).removeClass('active');
        }
    );
})