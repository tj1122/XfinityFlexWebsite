// when a link is clicked, force the menu to reverse all the animations
$('nav ul li').on("click", burgerClicked);

function hideNav(){
    // make sure you hide the nav once the close or a link has been clicked / tapped
    $("nav").removeClass("show-nav");

    // call the reset function for the burger to make sure the arrows are reset
    defaultValuesForBurger();
}
