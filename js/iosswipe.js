$(document).ready(function() {
  $('#g-photo').swipe({
    swipeLeft: function(){
      window.location = $('.g-paginator .g-text-right a').attr("href");
    },
    swipeRight: function(){
      window.location = $('.g-paginator .g-first a').attr("href");
    },
    allowPageScroll: 'auto',
  });
});