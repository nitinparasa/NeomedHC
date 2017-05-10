$(window).scroll(function(){
   if($(document).scrollTop() > 50){
       $('nav').addClass('shrink');
       $('.navbar-brand img').attr('src', 'site_images/logo_scroll_transparent.png');
   }
   else{
       $('nav').removeClass('shrink');
       $('.navbar-brand img').attr('src', 'site_images/main_logo.png');


   }
});