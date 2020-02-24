

gsap.set('.nav-background',{transformOrigin: "100% 0%"});
// this is the timeline for the background animation, notice there is a onComplete call after its done reversing to hide the nav from the user
var tlNavbackground = gsap.timeline({paused:true, onReverseComplete: hideNav});
tlNavbackground.from('.nav-background',{duration:0.25,scaleX:0,stagger:0.15, backgroundColor:"#3887FC"});

function animateNavbackground(){
    if(navigationIsOpen === false){
        tlNavbackground.play();
        // call the animateNavigation function
        animateNavigation();
    }
    else{
        // call the animateNavigation function
        animateNavigation();
        tlNavbackground.reverse();

    }
}
