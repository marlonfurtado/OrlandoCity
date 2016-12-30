$(document).ready(function(){

  $(".thumbnails").owlCarousel({
    items: 5
  });

  var owl = $(".thumbnails").data("owlCarousel");

  $("#btn-news-prev").on("click", function(){
    owl.prev();
  });
  $("#btn-news-next").on("click", function(){
    owl.next();
  });

  $("#page-up").on("click", function(event){
    $("body").animate({
      scrollTop:0
    }, 1000);

    event.preventDefault();

  });

  $("#btn-bars").on("click", function(){
    $("header").toggleClass("open-menu");
  });

  $("#menu-mobile-mask, .bar-close").on("click", function(){
    $("header").removeClass("open-menu");
  });
  
  $('#btn-search').on('click', function() {
    $('header').toggleClass('open-search');
    $('#input-search-mobile').focus();
  });

});
