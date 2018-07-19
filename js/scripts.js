//BUSINESS LOGIC
var name;
var extras = [];
var extrasTotal;
var quantity;
var total;

function baoZi(bun, protein, extras, sauce, quantity) {
  this.bunSel = bun;
  this.proteinSel = protein;
  this.extrasSel = extras;
  this.sauceSel = sauce;
  this.quantitySel = quantity;
}

baoZi.prototype.receipt = function() {
  return this.quantitySel + "x " + this.bunSel + " bao with " + this.proteinSel + ", " + this.extraSel + " glazed with " + this.sauceSel + " sauce.";
}

//USER INTERFACE LOGIC
$(document).ready(function() {

  $("form#byo").submit(function(event) {
    event.preventDefault();

    extras = [];
    extrasTotal = 0;
    $("input:checkbox[name=extras]:checked").each(function() {
      var extraName = $(this).val();
      extrasTotal += 0.25;
      extras.push(extraName);
    });

    console.log(extras);

    var bun = $("input:radio[name=bun]:checked").val();
    var protein = $("input:radio[name=protein]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    quantity = parseInt($("#quantity").val());
    total = (1 + 2 + extrasTotal) * quantity;
    $("span#totalvalue").text(total.toPrecision(4));
    $(".jumbotron.receipt").slideDown();
    $("h3#total").show();
//CUSTOM MESSAGE BASED ON TOTAL ORDER VALUE
    if (total <= 4.0) {
      $("h3#hungrytiger").hide();
      $("h3#respect").hide();
      $("h3#fee").show();
    } else if (total >= 13) {
      $("h3#fee").hide();
      $("h3#respect").hide();
      $("h3#hungrytiger").show();
    } else {
      $("h3#hungrytiger").hide();
      $("h3#fee").hide();
      $("h3#respect").show();
    }
  });
//CONTACT US FORM
  $("form#contact").submit(function(event) {
    event.preventDefault();

    name = $("input#name").val();

    $("span#name").text(name);
    $("form#contact").slideToggle();
    $("p.thankyou").show();
  });
//CLASSIC BAOZI ANIMATIONS
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
//FOOTER LINKS ANIMATIONS
  $("a.find").click(function() {
    $(".jumbotron.find").slideToggle();
  });
  $("a.contact").click(function() {
    $(".jumbotron.contact").slideToggle();
  });
  $("a.follow").click(function() {
    $(".jumbotron.follow").slideToggle();
  });
//SOCIAL MEDIA ANIMATIONS
  $("img.twitter").hover(function() {
    $("p.twitter").fadeToggle();
  });
  $("img.instagram").hover(function() {
    $("p.instagram").fadeToggle();
  });
  $("img.facebook").hover(function() {
    $("p.facebook").fadeToggle();
  });
});

/*OLD STUFF TO REMEMBER

function xNan (v) {
  if ( v == null ) {
    return 0;
  }
  return v;
}

extrasTotal += parseFloat($(this).val());

*/
