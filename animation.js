let opening = gsap.timeline();

opening.fromTo(
  ".logo",
  { autoAlpha: 0, x: -17 },
  { autoAlpha: 1, x: 0, duration: 2 }
);
opening.fromTo(
  ".navbar-list",
  { autoAlpha: 0, x: 17 },
  { autoAlpha: 1, x: 0, duration: 2 },
  "<.2"
);
opening.fromTo(
  ".section",
  { autoAlpha: 0, y: 20 },
  { autoAlpha: 1, y: 0, duration: 2 },
  "<.3"
);

opening.fromTo("#ethereum", {opacity:0, y: -20},{ y:0, opacity:1, duration: 2}, "<.3")


gsap.registerPlugin(ScrollToPlugin);

let button = document.querySelector(".btn");


//click event 
button.addEventListener('click', function(){
    gsap.to(window, {duration: 1, scrollTo: {y: ".trending-cont", offsetY: 50}});
    gsap.fromTo(".trending-title", {autoAlpha:0 ,y:20}, {y:0, autoAlpha:1, duration:2});
    gsap.fromTo(".trending-descript", {autoAlpha:0, y:20}, {y:0, autoAlpha:1, duration:2.8});
    gsap.fromTo(".trending-card", {autoAlpha:0 ,y:20}, {y:20, autoAlpha:1, duration:2.8});
})



gsap.registerPlugin(ScrollTrigger);


//scroll event
gsap.to('.bgfixed .bg', {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    },
    filter: "hue-rotate(270deg)"
})



let click = document.querySelector('.navbar-home');
click.addEventListener('mouseenter', function(){
  console.log("what da fuq")
})