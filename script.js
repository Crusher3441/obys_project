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
    tl.from(".hero h1",{
        y:100,
        stagger:0.2
        
    })
}


loadingAnimation()
crsrAnimation()