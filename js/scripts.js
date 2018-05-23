$(document).ready(function() {
  $("a.find").click(function() {
    $(".jumbotron.find").toggle();
    $(".jumbotron.contact").hide();
    $(".jumbotron.follow").hide();
  });
  $("a.contact").click(function() {
    $(".jumbotron.contact").toggle();
    $(".jumbotron.find").hide();
    $(".jumbotron.follow").hide();
  });
  $("a.follow").click(function() {
    $(".jumbotron.follow").toggle();
    $(".jumbotron.contact").hide();
    $(".jumbotron.find").hide();
  });
});
