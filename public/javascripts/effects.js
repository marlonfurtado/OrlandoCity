$(document).ready(function(){

  $(".thumbnails").owlCarousel({
    // autoplay: 3000,
    items: 5
  });

  var owl = $(".thumbnails").data('owlCarousel');

  $('#btn-news-prev').on('click', function(){
    owl.prev();
  });
  $('#btn-news-next').on('click', function(){
    owl.next();
  });

});
