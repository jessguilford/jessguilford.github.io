$(document).ready(function() {
  $(".item-label").click(function(event) {
    $("#info-" + this.id).fadeToggle(200);
    $("#x-toggle-" + this.id).toggleClass("item-x-rotated");
  });
});

$(window).scroll(function() {
  if( $(this).scrollTop()>130) {
    $(".masthead").fadeOut();
  } else {
    $(".masthead").fadeIn();
  }
});
