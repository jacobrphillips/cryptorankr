


let opening = gsap.timeline();

opening.fromTo(".logo", {autoAlpha: 0 , x: -17}, {autoAlpha: 1, x:0, duration: 2})
opening.fromTo(".navbar-list", {autoAlpha: 0 , x: 17}, {autoAlpha: 1, x:0, duration: 2}, "<.2")
opening.fromTo(".section", {autoAlpha: 0, y: 20}, {autoAlpha: 1, y:0, duration: 2}, "<.3");



var body = document.querySelector('body');

let button = document.querySelector('.btn')

button.addEventListener('click', function(){

     var scroll = gsap.to("body", {y:-400, duration: 6});

     const rect = body.getBoundingClientRect();

for (var  key in rect) {
    // console.log(key , rect[key])

    if (key == 'y' && rect[key] == Number(-400)){
        scroll.revert();
    }

}
     
})




