document.addEventListener('DOMContentLoaded', (event) => {

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
                

    /*firstContent.addEventListener('click', () => {
        console.log('firstAnimation: ', firstAnimation);
        firstAnimation.play();
    });*/
});