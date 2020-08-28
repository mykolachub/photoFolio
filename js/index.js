document.addEventListener('DOMContentLoaded', (event) => {

    // smooth scroll and fancy scrollbar

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#app-scroll-container"),
        smooth: true
    }); 

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#app-scroll-container", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("#app-scroll-container").style.transform ? "transform" : "fixed"
    });

    /* //////////////////////////////////////////////////////////////// */

    // text animation
    CustomEase.create("textappers", "M0,0 C0.5,0 0,1 1,1");

    gsap.from('.start__heading-item', {
        translateY: '350%',
        duration: 1.25,
        stagger: 0.115,
        ease: 'textappers',
        delay: .25,
        rotate: -15});

    // first scene
    let firstScene = document.getElementById('firstScene'),
        firstContent = document.getElementById('firstContent'),
        firstOne = document.getElementById('firstOne'),
        firstSecond = document.getElementById('firstSecond'),
        firstThird = document.getElementById('firstThird');
        firstFourth = document.getElementById('firstFourth'),
        firstFifth = document.getElementById('firstFifth'),
        firstText = document.getElementById('firstText');

    let firstAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '#firstScene',
            start: 'top top',
            end: '250% bottom',
            pin: true,
            scrub: true,
            scroller: "#app-scroll-container"
            //markers: true
        }
    });

    firstAnimation
        .to(firstContent, {
            width: firstScene.offsetWidth,
            duration: 2})
        .from(firstOne, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            rotate: -10,
            })
        .from(firstSecond, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            rotate: 10,
            })
        .from(firstThird, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            rotate: -6,
            })
        .from(firstFourth, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            rotate: 16,
            })
        .from(firstFifth, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            rotate: -4,
            })
        .fromTo(firstText, {
            opacity: 0,
            fontSize: 150,
            letterSpacing: -10}, {
            opacity: 1,
            fontSize: 250,
            letterSpacing: 16,
            duration: 5});
                
    /* ////////////////////////////////////////////////////////////////////////////// */

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
});