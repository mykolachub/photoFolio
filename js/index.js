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

    let elementsAppear = gsap.timeline();

    elementsAppear
        .from('.start__heading-item', {
            translateY: '350%',
            duration: 1.25,
            stagger: 0.115,
            ease: 'textappers',
            delay: .25,
            rotate: -15
        })
        .from('#introScene', {
            duration: 1,
            opacity: 0,
            ease: 'textappers'
        }, '-=0.5')
        .from('.start__scroll-item', {
            translateY: '-100%',
            duration: 1.25,
            ease: 'textappers',
            opacity: 0
        }, '-=0.5');

    // intro scene
    let introScene = document.getElementById('introScene'),
        introContent = document.getElementById('introContent'),
        introOne = document.getElementById('introOne'),
        introSecond = document.getElementById('introSecond'),
        introThird = document.getElementById('introThird');
        introFourth = document.getElementById('introFourth'),
        introFifth = document.getElementById('introFifth'),
        introText = document.getElementById('introText');

    let introAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '#introScene',
            start: 'top top',
            end: '400% bottom',
            pin: true,
            scrub: true,
            scroller: "#app-scroll-container",
            //markers: true
        }
    });

    introAnimation
        .to(introContent, {
            width: '100%',
            duration: 2})
        .from(introOne, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            rotate: -10,
            })
        .from(introSecond, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            rotate: 10,
            })
        .from(introThird, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            rotate: -6,
            })
        .from(introFourth, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            rotate: 16,
            })
        .from(introFifth, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            rotate: -4,
            })
        .fromTo(introText, {
            opacity: 0,
            fontSize: 150,
            letterSpacing: -10}, {
            opacity: 1,
            fontSize: 250,
            letterSpacing: 16,
            duration: 5
        });

    // LATEST WORKS SECTIONS

    let latestLinks = document.querySelectorAll('.latest__image-link');


    latestLinks.forEach(element => {

        let latestNameAppear = gsap.timeline();

        let elementToAnim = element.querySelectorAll(`.latest__image-text .latest__image-anim`);
        
        latestNameAppear
            .from(elementToAnim, {
                translateY: '350%',
                duration: 1.25,
                stagger: 0.115,
                ease: 'textappers',
                delay: .05,
                rotate: -15
            }).pause();


        element.addEventListener('mouseover', () => {
            latestNameAppear.play();
        });

        element.addEventListener('mouseout', () => {
            latestNameAppear.reverse();
        });
    });

    // SELECTED PROJECTS

    /*let selectedContents = document.querySelectorAll('.selected__content');
    let selectedImage = document.getElementById('selectedImage');

    let mouseX, mouseY;

    document.addEventListener('mousemove', event => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        //console.log('y: ', mouseY, ' x: ', mouseX);
    });

    selectedContents.forEach(element => {

        element.addEventListener('mousemove', event => {            
            selectedImage.setAttribute('style', `top: ${mouseY}px; left: ${mouseX}px;`);
        })

        element.addEventListener('mouseout', event => {            
            selectedImage.setAttribute('style', `top: 50%; left: 50%;`);
        })
    });*/

    let selectedProjects = gsap.timeline({
        scrollTrigger: {
            trigger: '#selectedProjects',
            start: 'top top',
            end: '400% bottom',
            pin: true,
            scrub: true,
            scroller: "#app-scroll-container",
            //markers: true
        }
    });

    selectedProjects.to('.selected__wrapper',{
        translateX: '-200%',
        ease: 'linear'
        });
                
    /* ////////////////////////////////////////////////////////////////////////////// */

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
});