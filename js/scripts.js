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

  $("img.twitter").hover(function() {
    $("p.twitter").fadeToggle();
  });
  $("img.instagram").hover(function() {
    $("p.instagram").fadeToggle();
  });
  $("img.facebook").hover(function() {
    $("p.facebook").fadeToggle();
  });

  $("img.bz1").hover(function() {
    $("p.bz1").fadeToggle();
  });
  $("img.bz2").hover(function() {
    $("p.bz2").fadeToggle();
  });
  $("img.bz3").hover(function() {
    $("p.bz3").fadeToggle();
  });
  $("img.bz4").hover(function() {
    $("p.bz4").fadeToggle();
  });
  $("img.bz5").hover(function() {
    $("p.bz5").fadeToggle();
  });
  $("img.bz6").hover(function() {
    $("p.bz6").fadeToggle();
  });

  $("form#contact").submit(function(event) {
    event.preventDefault();
    $("form#contact").slideToggle();
    $("p.thankyou").show();
  });

  $("form#byo").submit(function(event) {
    event.preventDefault();

    var bunsTotal = parseInt($("#rice").val())+parseInt($("#taro").val())+parseInt($("#sesame").val());
    var extrasTotal = parseInt($("#mushroom").val())+parseInt($("#veggies").val())+parseInt($("#bamboo").val())+parseInt($("#bokchoy").val())+parseInt($("#celery").val())+parseInt($("#egg").val());
    var proteinTotal = parseInt($("#pork").val())+parseInt($("#shrimp").val())+parseInt($("#tofu").val());
    var saucesTotal = parseInt($("#sweet").val())+parseInt($("#spicy").val())+parseInt($("#garlicky").val());

    console.log(bunsTotal);
    console.log(proteinTotal);
    console.log(extrasTotal);
    console.log(saucesTotal);

    $("span#total").empty();
    $("span#total").append(bunsTotal + proteinTotal + extrasTotal + saucesTotal);
  });

});
