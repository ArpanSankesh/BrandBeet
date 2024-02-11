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
    end:"150% 50%",
    scrub:true,
    markers:true,
    pin:true
}});

tl.to('.rotate-container',{
    rotate:-20,
    scale:0.8
},'animate')

tl.to('.row1',{
    // marginTop: "-30vw"
    marginTop: "-30vw"
},'animate')

tl.to('.row2',{
    // marginTop: "-50vw"
    marginTop: "-30vw"
},'animate')

tl.to('.row3',{
    // marginTop: "-70vw"
    marginTop: "-50vw"
},'animate')

tl.to('.row4',{
    // marginTop: "-80vw"
    marginTop: "-65vw"
},'animate')

tl.to('.overlay',{
    // marginTop: "-80vw"
    backgroundColor:"#000000c0"
},'animate')

tl.to('.overlay h1',{
    opacity:1
},'animate')