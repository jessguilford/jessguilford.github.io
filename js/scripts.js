$(document).ready(function() {
  $(".item-label").click(function(event) {
    $("#info-" + this.id).fadeToggle(200);
    $("#x-toggle-" + this.id).toggleClass("item-x-rotated");
  });
});
