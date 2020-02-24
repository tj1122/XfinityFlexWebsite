console.log("burger");

var navigationIsOpen = false;

// set and hide specific items
gsap.set(" #x-lines-group, #num1, #num2, #click-zone, #click-bag, #click-user, #click-bell",{alpha:0});

function defaultValuesForBurger(){
    gsap.set(" #x-lines-group, #num1, #num2, #click-zone",{alpha:0});
}
