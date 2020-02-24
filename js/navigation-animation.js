// create a timeline for the background animations and pause it on creation
var tlNavAnimation = gsap.timeline({paused:true});
tlNavAnimation.from('nav aside',{duration:0.25,x:100, alpha:0, delay:0.25, color:"#3887FC"});

function animateNavigation(){
    if(navigationIsOpen === false){
        tlNavAnimation.play();
    }
    else{
        tlNavAnimation.reverse();
    }
}
