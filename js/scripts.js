$(document).ready(function() {
  $("a.find").click(function() {
    $(".jumbotron.find").slideToggle();
    $(".jumbotron.contact").hide();
    $(".jumbotron.follow").hide();
  });
  $("a.contact").click(function() {
    $(".jumbotron.contact").slideToggle();
    $(".jumbotron.find").hide();
    $(".jumbotron.follow").hide();
  });
  $("a.follow").click(function() {
    $(".jumbotron.follow").slideToggle();
    $(".jumbotron.contact").hide();
    $(".jumbotron.find").hide();
  });
});
