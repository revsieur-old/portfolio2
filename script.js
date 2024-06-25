const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        opacity: 0,
        y: '-10',
        ease: Expo.easeInOut,
        duration: 1.5,
        stagger: 0.2
    })

    gsap.to(".boundingelem", {
        y:0,
        delay: 0.5,
        ease: Expo.easeInOut,
        duration: 2.5,
        stagger: 0.5
    })

    gsap.from("#herofooter", {
        x: '-30',
        delay: 3,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 3,

    })
}


function cursorMicroAnim(){

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(dets){

        

        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;
        
        mouseFollower(xscale,yscale);
    })
}



function mouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
        document.querySelector("#cursor").style.transform = `scale(${xscale},${yscale})`;
    });
}

document.querySelectorAll(".elem").forEach(function(elem) {
    elem.addEventListener("mousemove", function(dets) {
        var img = elem.querySelector("img");
        var diffY = dets.clientY - elem.getBoundingClientRect().top;
        var diffX = dets.clientX - elem.getBoundingClientRect().left;

        gsap.to(img, {
            opacity: 1,
            x: diffX - (img.offsetWidth / 2),
            y: diffY - (img.offsetHeight / 2),
            ease: "power3.out",
            duration: 0.1
        });
    });

    elem.addEventListener("mouseleave", function() {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "power3.out",
            duration: 0.5
        });
    });
});

function cursorMicroAnim() {
    var cursor = document.querySelector("#cursor");
    var prevX = 0;
    var prevY = 0;

    window.addEventListener("mousemove", function(dets) {
        var angle = Math.atan2(dets.clientY - prevY, dets.clientX - prevX) * (180 / Math.PI);
        prevX = dets.clientX;
        prevY = dets.clientY;

        gsap.to(cursor, {
            x: dets.clientX - cursor.offsetWidth / 2,
            y: dets.clientY - cursor.offsetHeight / 2,
            rotation: angle,
            ease: "power3.out",
            duration: 0.1
        });
    });
}

cursorMicroAnim();








cursorMicroAnim();
mouseFollower();    
firstPageAnim();




