
// timeline for the center dot to become 3 dots
var ringToDots = gsap.timeline({paused:true});
ringToDots.to("#dot-ring",{alpha:0},"move-dots")
.to("#ellipse-left",{duration:0.25, x:-10},"move-dots")
.to("#ellipse-right",{duration:0.25, x:10},"move-dots");

//
$("#click-zone").on("mouseenter", function(){
    console.log("mouse enter");

    if(navigationIsOpen === false){
        // play the timeline to form center dot into 3
        ringToDots.play();
    }

});
