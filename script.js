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
    start:"50%% 50%",
    end:"200% 50%",
    scrub:2,
    pin:true
}});

tl.to('.rotate-container',{
    rotate:-15,
    scale:0.8,
    delay:0.03,
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

tl.to('.scrolling',{
    width:"100%"
},'animate')

var tl2 =  gsap.timeline({scrollTrigger:{
    trigger:".section-2",
    start:"0% 50%",
    end:"50% 50%",
    scrub:2
}});


tl2.to('.curve-container',{
    height:0,
    marginTop:0
})

var tl3 =  gsap.timeline({scrollTrigger:{
    trigger:".text-area",
    start:"20% 50%",
    end:"150% 100%",
    scrub:2
}});

tl3.to('.text-area-hover .h1',{
    width:"100%"
})
tl3.to('.text-area-hover .secondH1',{
    width:"100%"
})

var tl4 =  gsap.timeline({scrollTrigger:{
    trigger:".section-3",
    start:"50% 50%",
    end:"200% 50%",
    scrub:1,
    pin:true,
    markers:true
}});

tl4.to('.c1',{
    opacity:1,
    marginTop:"-30%"
},"c1")

tl4.to('.c2',{
    opacity:1,
},"c2")
tl4.to('.c1',{
    opacity:0,
    marginTop:"-100%"
},"c2")

tl4.to('.c3',{
    opacity:1
},"c3")
tl4.to('.c2',{
    opacity:0,
    marginTop:"-30%"
},"c3")

tl4.to('.c4',{
    opacity:1
},"c4")
tl4.to('.c3',{
    opacity:0,
    marginTop:"-30%"
},"c4")


tl4.to('.c5',{
    opacity:1
},"c5")
tl4.to('.c4',{
    opacity:0,
    marginTop:"-30%"
},"c5")

tl4.to('.c6',{
    opacity:1
},"c6")
tl4.to('.c1',{
    opacity:0,
    marginTop:"-100%"
},"c6")


