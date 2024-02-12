const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl =  gsap.timeline({scrollTrigger:{
    trigger:".section-1",
    start:"25% 50%",
    end:"200% 50%",
    scrub:true,
    pin:true,
    markers:true
}});

tl.to('.rotate-container',{
    rotate:-15,
    scale:0.8
},'animate')

tl.to('.row1',{
    // marginTop: "-30vw"
    marginTop: "-22vw"
},'animate')

tl.to('.row2',{
    // marginTop: "-50vw"
    marginTop: "-22vw"
},'animate')

tl.to('.row3',{
    // marginTop: "-70vw"
    marginTop: "-40vw"
},'animate')

tl.to('.row4',{
    // marginTop: "-80vw"
    marginTop: "-56vw"
},'animate')

tl.to('.overlay',{
    // marginTop: "-80vw"
    backgroundColor:"#000000c0"
},'animate')

tl.to('.overlay h1',{
    duration:0.1,
    delay:0.05,
    opacity:1
},'animate')