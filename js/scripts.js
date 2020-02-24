// @prepros-append "navigation.js";
// @prepros-append "navigation-background.js";
// @prepros-append "navigation-animation.js";

// @prepros-prepend "burger/burger.js";
// @prepros-prepend "burger/burger-mouseenter.js";
// @prepros-prepend "burger/burger-mouseleave.js";
// @prepros-prepend "burger/burger-click.js";

// @prepros-prepend "waypoints.js";

$(document).ready(function() {
  // console.log( "ready!" );
  // register Greensock plugins
  gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, ScrollToPlugin);
});

// hides the hot spots until nav is opened (see burger/burger-click.js lines 24 & 25)
$("#click-user, #click-bell, #click-bag").hide();

// switch tabs by clicking on nav icons
$(function() {

  // only .aside1 will show first (Shopping Bag)
  $(".aside2, .aside3").hide();

  $(".link1, .link2, .link3").bind("click", function() {

    $(".aside1, .aside2, .aside3").hide();

    // if clicked show shopping bag
    if ($(this).attr("class") == "link1") {
      $(".aside1").fadeIn('medium');
      console.log('click bag')
    }
    // if clicked show notifications
    else if ($(this).attr("class") == "link2") {
      $(".aside2").fadeIn('medium');
      console.log('click bell')
    }
    // if clicked show profile
    else if ($(this).attr("class") == "link3") {
      $(".aside3").fadeIn('medium');
      console.log('click user')
    }
  });
});

// scroll to prices section when clicking on "check availability" button in hero
var pricesSection = ["#prices"];

$("#check").on("click", function(){
    console.log("mouse click");

    gsap.to(window, {duration: 1, scrollTo:{y:pricesSection[$('#check').index(this)], offsetY:60}});
});
