var lineToX = gsap.timeline({paused:true});
var morphFromDots = gsap.timeline({paused:true});

// morph 3 dots into user icon, bell icon, and shopping bag icon
morphFromDots.to("#num3, #dot-center",{alpha:0})
.to("#ellipse-left",{duration:0.2, x:-163, y:-19, morphSVG:"#user-icon"})
.to("#ellipse-middle",{duration:0.2, x:-115, y:-12, morphSVG:"#bell"})
.to("#ellipse-right",{duration:0.2, x:-62, y:-12, morphSVG:"#shopping-bag"})
.to("#num1, #num2",{alpha:1});
// draw line to form an x
lineToX.from(".x-lines",{duration:0.2, drawSVG:"50% 50%",delay:0.6});

$("#click-zone").on("click", burgerClicked);

function burgerClicked(){
  console.log("click");

  $("nav").addClass("show-nav");

  // if the nav is hidden then
  if(navigationIsOpen === false){
      gsap.set("#x-lines-group",{alpha:1});
      // shows the hot spots
      $("#click-user, #click-bell, #click-bag").show();
      morphFromDots.play();
      lineToX.play();
      animateNavbackground();
      navigationIsOpen = true;
  // if nav is visible then
  }else{
      morphFromDots.reverse();
      lineToX.reverse();
      animateNavbackground();
      // hides the hot spots again
      $("#click-user, #click-bell, #click-bag").hide();
      navigationIsOpen = false;
  }
}
