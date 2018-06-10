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

    var name = $("input#name").val();

    $("span#name").empty();
    $("span#name").append(name);

    $("form#contact").slideToggle();
    $("p.thankyou").show();
  });

  function xNan (v) {
    if ( v == null ) {
      return 0;
    }
    return v;
  }

  var bunsTotal;
  var extrasTotal;
  var proteinTotal;
  var saucesTotal;

  $("form#byo").submit(function(event) {
    event.preventDefault();

    bunsTotal = parseFloat(xNan($("input:radio[name=bun]:checked").val()));
    extrasTotal = parseFloat(xNan($("#mushroom:checked").val())) + parseFloat(xNan($("#veggies:checked").val())) + parseFloat(xNan($("#bamboo:checked").val())) + parseFloat(xNan($("#bokchoy:checked").val())) + parseFloat(xNan($("#celery:checked").val())) + parseFloat(xNan($("#egg:checked").val()));
    proteinTotal = parseFloat(xNan($("input:radio[name=protein]:checked").val()));
    saucesTotal = parseFloat(xNan($("input:radio[name=sauce]:checked").val()));

    $("span#totalvalue").text(bunsTotal + proteinTotal + extrasTotal + saucesTotal);
    $("h3#total").show();

    var total = bunsTotal + proteinTotal + extrasTotal + saucesTotal;

    if (total <= 4.0) {
      $("h3#hungrytiger").hide();
      $("h3#respect").hide();
      $("h3#fee").show();
    } else if (total >= 5.2) {
      $("h3#fee").hide();
      $("h3#respect").hide();
      $("h3#hungrytiger").show();
    } else {
      $("h3#hungrytiger").hide();
      $("h3#fee").hide();
      $("h3#respect").show();
    }
  });

});
