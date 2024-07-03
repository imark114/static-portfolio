const menuButton = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu")

menuButton.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('hidden')
})

// Smooth SCroller
const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Scroll Trigger

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.skill-section',
        pin: true,
        start: '45% 65%',
        end: '200% 50%',
        scrub: true,
    }
});

tl.to("#django",{
    opacity: 1,
    filter: "blur(0px)",
})
.to("#python",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#javascript",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#sql",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#tailwind",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#c_pp",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#postgreSql",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#aws",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#mySql",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#html",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#c",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#bootstrap",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#dbms",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})
.to("#css",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})