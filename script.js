
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


function crsrAnimation(){
    let crsr=document.querySelector('#crsr')

document.addEventListener("mousemove",(event)=>{
    gsap.to(crsr,{
        x:event.clientX ,
        y:event.clientY ,
        
    })
 
})

Shery.makeMagnet("#nav-part2 h4");
}

function loadingAnimation(){
    gsap.from(".line h1", {
        y: 100,
        stagger: 0.2,
        duration: 0.6,
        delay: 0.5
    })
    
    
    var tl = gsap.timeline()
    tl.from(".line1_part1", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector(".line1_part1 h5")
            var timer = 0
            setInterval(function () {
                if (timer < 100) {
                    
                    h5timer.innerHTML = timer++
                }
                else {
    
                    h5timer.innerHTML = timer
                }
            }, 35);
        }
    })
    
    tl.to(".line h2",{
        animationName:"anime",
        opacity:1
    })
    
    tl.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 4
    })
    
    tl.from('#pg1',{
        y:1200,
        opacity:0
    })
    
    tl.to("#loader",{
        display:'none'
    })
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3, #hero4 h1",{
        y:100,
        stagger:0.2
    });
    tl.from("#hero1, #page2",{
        opacity:0,
    },"-=1.2");
}


// locomotiveAnimation()
loadingAnimation()
crsrAnimation()

function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749691738595},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.76,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":15.27,"range":[0,100]}},
        gooey:true,
        amplitude:0
    })
}

sheryAnimation()