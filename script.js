const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

const tl =gsap.timeline();

tl.from("#nav",{
    y:-10,
    opacity:0,
    duration:1.5,
    ease : Expo.easeInOut,
    stagger:.1
})

tl.to(".boundingelem",{
    y: 0,
    ease : Expo.easeInOut ,
    duration: 1.5 ,
    stagger : .2
})

tl.from("#lowerheading",{
    y:-10,
    opacity:0,
    duration:.5,
    ease : Expo.easeInOut

})

document.querySelectorAll(".elem").forEach(function(elem){

    var rotate = 0;
  var diffrot = 0;


    elem.addEventListener("mouseleave",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top ;
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
            duration: 0.5,
            
        })
    });


    elem.addEventListener("mousemove",function(dets){
        var diff = (dets.clientY - 50 )- elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
         rotate = dets.clientX;
        console.log(diff);
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease : Power3,
            top:diff,
            left :dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        })
    });
      





});







  document.addEventListener("DOMContentLoaded", function () {
    const follower = document.querySelector("#minicircle");
  
    let followerX = 0;
    let followerY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let speed = 1.05; // Adjust this value to control the follower's responsiveness

    gsap.set(follower, { autoAlpha: 0 });
  
    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (gsap.getProperty(follower, "autoAlpha") === 0) {
        gsap.to(follower, {
          autoAlpha: 1, // Make the follower element visible
          duration: 0.2, // Adjust the duration as needed
          ease: "power2.inOut", // Adjust the easing function as needed
        });
      }
  
    });
  
    gsap.to({}, {
      repeat: -1,
      onRepeat: () => {
        // Calculate the distance between the follower and the mouse
        const dx = (mouseX - followerX ) * speed;
        const dy = (mouseY - followerY) * speed;
  
        // Update the follower's position
        followerX += dx;
        followerY += dy;
  
        // Update the follower element's position
        gsap.to(follower, {
          x: followerX,
          y: followerY,
          duration: 0.5, // Adjust the duration as needed
          ease: "power2.Out", // Adjust the easing function as needed
        });
      },
    });
  });
  


 