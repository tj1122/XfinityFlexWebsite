
$("#click-zone").on("mouseleave",function(){
    console.log("mouse leave");
    if(navigationIsOpen === false){
        // reverse the timeline to form 3 dots into center dot
        morphFromDots.progress(0);
        ringToDots.reverse();


    }
});
