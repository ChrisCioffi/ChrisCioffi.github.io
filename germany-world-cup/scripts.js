$(document).ready(function() {
  $("#legendhide").click(function() {
      $(".overlaybox").toggle();
      $("#show").toggle();
      $("#hidden").toggle();
      $("#legendhide").toggleClass("btn-primary btn-danger");
    });
  $("#togglequarterfinalists").click(function(){
    $("#togglequarterfinalists span").toggle();
    $("#togglequarterfinalists").toggleClass("btn-primary btn-danger");
    var series = winlosschart.series[1];
    if (series.visible) {
    series.hide();
    }
    else {
    series.show();
    };
});
});
