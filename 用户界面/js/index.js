$(document).ready( function() {
  
  $('body').on("click", ".larg div h3", function(){
    if ($(this).children('span').hasClass('close')) {
      $(this).children('span').removeClass('close');
    }
    else {
      $(this).children('span').addClass('close');
    }
    $(this).parent().children('p').slideToggle(250);
  });
  
  $('body').on("click", "nav ul li a", function(){
    var title = $(this).data('title');
    $('.title').children('h2').html(title);
  });
});
function x_admin_show(url){
  window.open(url,'_blank',"width=" + 600 + ",height=" + 400 +
  ",top=" + 300 + ",left=" + 600 + ",toolbar=no, status=no, menubar=no, resizable=yes, scrollbars=yes");
}