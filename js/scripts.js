//BUSINESS LOGIC
var name;
var extras = [];
var extrasTotal;
var quantity;
var total = 0;

function baoZi(bun, protein, extras, sauce, quantity) {
  this.bunName = bun;
  this.proteinName = protein;
  this.extrasName = extras;
  this.sauceName = sauce;
  this.quantityNumber = quantity;
}
function bzCost(extrasTotal, quantity) {
  this.extrasCost = extrasTotal;
  this.quantityNumber = quantity;
}
baoZi.prototype.receipt = function() {
  return this.quantityNumber + "x " + this.bunName + " bao with " + this.proteinName + ", " + this.extrasName + " glazed in a " + this.sauceName + " sauce.";
}
bzCost.prototype.cost = function() {
  return (1 + 2 + extrasTotal)*quantity;
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
      extras.push(" " + extraName);
    });
    var bun = $("input:radio[name=bun]:checked").val();
    var protein = $("input:radio[name=protein]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    quantity = parseInt($("#quantity").val());
    var newBao = new baoZi(bun, protein, extras, sauce, quantity);
    var newCost = new bzCost(extrasTotal, quantity);
    total += newCost.cost();
    $("ul#order").append("<li><h6>" + newBao.receipt() + "</h6></li>");
    $("span#totalvalue").text(total);
    $(".jumbotron.receipt").slideDown();
    $("h3#total").show();
  });
//CUSTOM MESSAGE BASED ON TOTAL ORDER VALUE
  $(".btn.confirm").click(function() {
    if (total <= 4.0) {
      $("h5#hungrytiger").hide();
      $("h5#respect").hide();
      $("h5#fee").show();
    } else if (total >= 20) {
      $("h5#fee").hide();
      $("h5#respect").hide();
      $("h5#hungrytiger").show();
    } else {
      $("h5#hungrytiger").hide();
      $("h5#fee").hide();
      $("h5#respect").show();
    }
  });
//RESET ORDER
  $(".btn.reset").click(function() {
    $("ul#order").empty();
    $(".jumbotron.receipt").slideUp();
    $("h5#hungrytiger").hide();
    $("h5#respect").hide();
    $("h5#fee").hide();
    total = 0;
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
