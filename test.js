function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
gsap.to(".nav",{
  backgroundColor: "rgba(0, 0, 0, 0.89)",
  height:"85.85px",
  duration:1,
  scrollTrigger:{
      trigger:".nav",
      scroller:"body",
      marker:true,
      start:"top -10%",
      end:"top -11%",
      scrub:2,

  }
  
  })
  gsap.to("#main",{
    backgroundColor:"white",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        marker:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2,
    }
  })
  gsap.from("#aboutus img,.about",{
    y:90,
    opacity:0,
    duration:3,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        marker:true,
        start:"top 60%",
        end:"top 58%", 
scrub:3,
    }
  })

  gsap.from(".panel2",{
    y:90,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".panel2",
        scroller:"body",
        marker:true,
        start:"top 120%",
        end:"top 58%", 
scrub:3,
    }
  })
  