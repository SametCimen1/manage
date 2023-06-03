$(document).ready(function(){
    $(".hamburger-icon").click(function(){
      $(".menu-active").toggle();
      $(".close-icon").show();
      $('.hamburger-icon').hide()
    });

    $(".close-icon").click(function(){
        $(".menu-active").toggle();
        $(".close-icon").hide();
        $('.hamburger-icon').show()
      });
  
});