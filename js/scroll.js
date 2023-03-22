gsap.registerPlugin(ScrollTrigger);

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

const $section = document.getElementById("parallaxBg");


gsap.fromTo($section, {
        backgroundPosition: () =>  "50% 0px"
    }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - 1.25)}px`,
    ease: "none",
    scrollTrigger: {
        trigger: $section,
        start: () => "top top", 
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true // to make it responsive
    }

});

gsap.to(".med-staff .image", {
    scrollTrigger : {
        trigger: ".med-staff",
        start: 'top 50%',
        scrub: true,
        end: 'bottom 50%',
    },
    x: 0,
    opacity: 1
});
gsap.to(".med-staff .copy", {
    scrollTrigger : {
        trigger: ".med-staff",
        start: 'top 50%',
        scrub: true,
        end: 'bottom 50%',
    },
    x: "-50%",
});