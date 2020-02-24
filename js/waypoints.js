var waypoint = new Waypoint({
  element: document.getElementById('prices'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
})

var headerHeight = 80 //80px

gsap.set("#priceCard",{alpha:0, y:80});
gsap.set("#lamp",{alpha:0, y:-80});
gsap.set("#imgleft",{alpha:0, x:-80, rotation: 180});
gsap.set("#imgright",{alpha:0, x:80, rotation: -180});

var inviewPrices = new Waypoint.Inview({
  element: $('#prices')[0],
  enter: function(direction) {
     // $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
     priceCardChange(direction, scrollDirection = "enter");
  },
  entered: function(direction) {
    // $.notify('Entered triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
    priceCardChange(direction , scrollDirection = "entered");
  },
  exit: function(direction) {
    // $.notify('Exit triggered with direction ' + direction,{     globalPosition: 'right middle', className:"info" })
    priceCardChange(direction , scrollDirection = "exit");
  },
  exited: function(direction) {
    // $.notify('Exited triggered with direction ' + direction,{ globalPosition: 'right middle', className:"info" })
    priceCardChange(direction , scrollDirection = "exited");
  },offset: {
    top: headerHeight
  }
})

var inviewIntro = new Waypoint.Inview({
  element: $('#check')[0],
  enter: function(direction) {
     // $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
     lampFall(direction, scrollDirection = "enter");
  },
  entered: function(direction) {
    // $.notify('Entered triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
    lampFall(direction , scrollDirection = "entered");
  },
  exit: function(direction) {
    // $.notify('Exit triggered with direction ' + direction,{     globalPosition: 'right middle', className:"info" })
    lampFall(direction , scrollDirection = "exit");
  },
  exited: function(direction) {
    // $.notify('Exited triggered with direction ' + direction,{ globalPosition: 'right middle', className:"info" })
    lampFall(direction , scrollDirection = "exited");
  },offset: {
    top: headerHeight
  }
})

var inviewIncluded = new Waypoint.Inview({
  element: $('#included')[0],
  enter: function(direction) {
     // $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
     spinModem(direction, scrollDirection = "enter");
  },
  entered: function(direction) {
    // $.notify('Entered triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
    spinModem(direction , scrollDirection = "entered");
  },
  exit: function(direction) {
    // $.notify('Exit triggered with direction ' + direction,{     globalPosition: 'right middle', className:"info" })
    spinModem(direction , scrollDirection = "exit");
  },
  exited: function(direction) {
    // $.notify('Exited triggered with direction ' + direction,{ globalPosition: 'right middle', className:"info" })
    spinModem(direction , scrollDirection = "exited");
  },offset: {
    top: headerHeight
  }
})

function priceCardChange(direction, scrollDirection){

    if(direction === "up" & scrollDirection === "enter"){
        gsap.to("#priceCard",{alpha:1 ,y:0});
    }else if(direction === "up"& scrollDirection === "entered"){
        // sets priceCard to original cordinates
        gsap.to("#priceCard",{alpha:0 ,y:80});
    }else if(direction === "down"& scrollDirection === "exit"){
        gsap.to("#priceCard",{alpha:1 ,y:0});
    } else if(direction === "down"& scrollDirection === "exited"){
        gsap.to("#priceCard",{alpha:1 ,y:0});
    }

}

function lampFall(direction, scrollDirection){

    if(direction === "up" & scrollDirection === "enter"){
        gsap.to("#lamp",{alpha:1 ,y:0, delay:2});
    }else if(direction === "up"& scrollDirection === "entered"){
        gsap.to("#lamp",{alpha:0 ,y:-80});
    }else if(direction === "down"& scrollDirection === "exit"){
        gsap.to("#lamp",{alpha:1 ,y:0, delay:1});
    } else if(direction === "down"& scrollDirection === "exited"){
        gsap.to("#lamp",{alpha:1 ,y:0, delay:1});
    }

}

function spinModem(direction, scrollDirection){

    if(direction === "up" & scrollDirection === "enter"){
      gsap.to("#imgleft",{alpha:1, x:0, rotation: 0});
      gsap.to("#imgright",{alpha:1, x:0, rotation: 0});
    }else if(direction === "up"& scrollDirection === "entered"){
      gsap.to("#imgleft",{alpha:0, x:-80, rotation: 180});
      gsap.to("#imgright",{alpha:0, x:80, rotation: -180});
    }else if(direction === "down"& scrollDirection === "exit"){
      gsap.to("#imgleft",{alpha:1, x:0, rotation: 0});
      gsap.to("#imgright",{alpha:1, x:0, rotation: 0});
    } else if(direction === "down"& scrollDirection === "exited"){
      gsap.to("#imgleft",{alpha:1, x:0, rotation: 0});
      gsap.to("#imgright",{alpha:1, x:0, rotation: 0});
    }
}
